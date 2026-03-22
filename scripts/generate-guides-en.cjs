const fs = require('fs');
const path = require('path');
const vm = require('vm');
const ts = require('typescript');

const ROOT = process.cwd();
const SOURCE_FILE = path.join(ROOT, 'src/lib/education-guides.ts');
const OUTPUT_FILE = path.join(ROOT, 'src/lib/education-guides-content-en.ts');

function loadGuides() {
  const tsCode = fs.readFileSync(SOURCE_FILE, 'utf8');
  const transpiled = ts.transpileModule(tsCode, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
    },
  }).outputText;

  const sandbox = {
    module: { exports: {} },
    exports: {},
    require: (id) => {
      throw new Error(`Unsupported require in transpiled module: ${id}`);
    },
    console,
  };

  vm.runInNewContext(transpiled, sandbox, { filename: 'education-guides.js' });
  return sandbox.module.exports.educationGuides || sandbox.exports.educationGuides || [];
}

function collectStrings(guides) {
  const strings = new Set();
  for (const guide of guides) {
    if (!guide?.fallbackSections?.length) continue;
    for (const section of guide.fallbackSections) {
      if (section.title) strings.add(section.title);
      for (const p of section.paragraphs || []) strings.add(p);
      for (const b of section.bullets || []) strings.add(b);
      for (const r of section.references || []) {
        if (r.label) strings.add(r.label);
      }
    }
  }
  return [...strings].filter(Boolean);
}

function shouldSkipTranslation(text) {
  if (!text || typeof text !== 'string') return true;
  const trimmed = text.trim();
  if (!trimmed) return true;
  if (/^https?:\/\//i.test(trimmed)) return true;
  if (/^[\d\s.,;:()\-_/]+$/.test(trimmed)) return true;
  return false;
}

async function translateOne(text, from = 'es', to = 'en') {
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${from}&tl=${to}&dt=t&q=${encodeURIComponent(text)}`;
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0',
      'Accept': 'application/json,text/plain,*/*',
    },
  });

  if (!res.ok) {
    throw new Error(`Translate request failed (${res.status})`);
  }

  const data = await res.json();
  const chunks = data?.[0] || [];
  const translated = chunks.map((c) => c?.[0] || '').join('');
  return translated || text;
}

async function translateAll(strings) {
  const cache = new Map();
  const queue = strings.slice();
  const concurrency = 6;

  async function worker(workerId) {
    while (queue.length > 0) {
      const text = queue.shift();
      if (typeof text !== 'string') continue;

      if (cache.has(text)) continue;
      if (shouldSkipTranslation(text)) {
        cache.set(text, text);
        continue;
      }

      let attempts = 0;
      let translated = text;
      while (attempts < 3) {
        attempts += 1;
        try {
          translated = await translateOne(text);
          break;
        } catch (error) {
          if (attempts >= 3) {
            translated = text;
            break;
          }
          await new Promise((r) => setTimeout(r, 400 * attempts));
        }
      }

      cache.set(text, translated);
      if (cache.size % 120 === 0) {
        console.log(`[worker ${workerId}] translated ${cache.size}/${strings.length}`);
      }
    }
  }

  await Promise.all(Array.from({ length: concurrency }, (_, i) => worker(i + 1)));
  return cache;
}

function q(str) {
  return JSON.stringify(str ?? '');
}

function buildOutput(guides, cache) {
  const lines = [];
  lines.push('type GuideSection = {');
  lines.push('  title: string;');
  lines.push('  imageUrl?: string;');
  lines.push('  paragraphs: string[];');
  lines.push('  bullets?: string[];');
  lines.push('  references?: Array<{');
  lines.push('    label: string;');
  lines.push('    url: string;');
  lines.push('  }>;');
  lines.push('};');
  lines.push('');
  lines.push('export const guideFallbackSectionsEn: Record<string, GuideSection[]> = {');

  for (const guide of guides) {
    if (!guide?.fallbackSections?.length) continue;
    lines.push(`  ${q(guide.slug)}: [`);

    for (const section of guide.fallbackSections) {
      const title = cache.get(section.title) || section.title;
      lines.push('    {');
      lines.push(`      title: ${q(title)},`);
      if (section.imageUrl) {
        lines.push(`      imageUrl: ${q(section.imageUrl)},`);
      }

      lines.push('      paragraphs: [');
      for (const p of section.paragraphs || []) {
        const v = cache.get(p) || p;
        lines.push(`        ${q(v)},`);
      }
      lines.push('      ],');

      if (section.bullets?.length) {
        lines.push('      bullets: [');
        for (const b of section.bullets) {
          const v = cache.get(b) || b;
          lines.push(`        ${q(v)},`);
        }
        lines.push('      ],');
      }

      if (section.references?.length) {
        lines.push('      references: [');
        for (const r of section.references) {
          const label = cache.get(r.label) || r.label;
          lines.push('        {');
          lines.push(`          label: ${q(label)},`);
          lines.push(`          url: ${q(r.url)},`);
          lines.push('        },');
        }
        lines.push('      ],');
      }

      lines.push('    },');
    }

    lines.push('  ],');
  }

  lines.push('};');
  lines.push('');
  return lines.join('\n');
}

(async () => {
  const guides = loadGuides();
  const strings = collectStrings(guides);
  console.log(`Collected ${strings.length} strings from ${guides.length} guides.`);

  const cache = await translateAll(strings);
  console.log(`Translation cache entries: ${cache.size}`);

  const output = buildOutput(guides, cache);
  fs.writeFileSync(OUTPUT_FILE, output, 'utf8');
  console.log(`Wrote ${OUTPUT_FILE}`);
})();
