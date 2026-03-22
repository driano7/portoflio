export type DocBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

export type DocSection = {
  id: string;
  title: string;
  blocks: DocBlock[];
};

export type ParsedDoc = {
  title: string;
  sections: DocSection[];
};

function slugify(input: string): string {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function cleanupLine(line: string): string {
  return line.replace(/\uFEFF/g, "").replace(/\t/g, " ").trimEnd();
}

function extractIndexHeadings(lines: string[]): string[] {
  const idx = lines.findIndex((line) => line.trim().toLowerCase() === "índice" || line.trim().toLowerCase() === "indice");
  if (idx === -1) return [];

  const headings: string[] = [];
  for (let i = idx + 1; i < lines.length; i += 1) {
    const raw = lines[i].trim();
    if (!raw) continue;

    const hasPageNumber = /\s+\d+$/.test(raw);
    const clean = raw.replace(/\s+\d+$/, "").trim();
    if (!clean) continue;

    // When the body starts, the heading appears without page number.
    if (!hasPageNumber && headings.length > 0 && (clean === headings[0] || clean.toLowerCase() === "introducción")) {
      break;
    }

    // Keep only likely heading lines from the index section.
    if (clean.length <= 80 && !clean.startsWith("*") && !clean.startsWith("[")) {
      headings.push(clean);
    }
  }

  return [...new Set(headings)];
}

function buildBlocks(lines: string[]): DocBlock[] {
  const blocks: DocBlock[] = [];
  let paragraphBuffer: string[] = [];
  let listBuffer: string[] = [];

  const flushParagraph = () => {
    if (paragraphBuffer.length === 0) return;
    blocks.push({ type: "paragraph", text: paragraphBuffer.join(" ") });
    paragraphBuffer = [];
  };

  const flushList = () => {
    if (listBuffer.length === 0) return;
    blocks.push({ type: "list", items: [...listBuffer] });
    listBuffer = [];
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (!line || line === "___" || line === "________________") {
      flushParagraph();
      flushList();
      continue;
    }

    if (line.startsWith("* ")) {
      flushParagraph();
      listBuffer.push(line.replace(/^\*\s+/, "").trim());
      continue;
    }

    if (listBuffer.length > 0) {
      flushList();
    }

    paragraphBuffer.push(line);
  }

  flushParagraph();
  flushList();

  return blocks;
}

function parseSections(lines: string[], headingHints: string[]): DocSection[] {
  const normalizedHints = headingHints.map((heading) => heading.toLowerCase());

  const introIndex = lines.findIndex((line) => {
    const clean = line.trim().toLowerCase();
    return clean === "introducción" || clean === "introduccion";
  });

  const body = (introIndex >= 0 ? lines.slice(introIndex) : lines).map((line) => cleanupLine(line));

  const sections: Array<{ title: string; contentLines: string[] }> = [];
  let currentTitle = "Contenido";
  let currentLines: string[] = [];

  for (const rawLine of body) {
    const line = rawLine.trim();
    if (!line) {
      currentLines.push("");
      continue;
    }

    const lower = line.toLowerCase();
    const isHeading = normalizedHints.includes(lower);

    if (isHeading) {
      if (currentLines.length > 0) {
        sections.push({ title: currentTitle, contentLines: [...currentLines] });
      }
      currentTitle = line;
      currentLines = [];
      continue;
    }

    currentLines.push(line);
  }

  if (currentLines.length > 0) {
    sections.push({ title: currentTitle, contentLines: currentLines });
  }

  return sections
    .map((section) => ({
      id: slugify(section.title),
      title: section.title,
      blocks: buildBlocks(section.contentLines),
    }))
    .filter((section) => section.blocks.length > 0);
}

export async function fetchAndParseGoogleDoc(docId: string): Promise<ParsedDoc | null> {
  const exportUrl = `https://docs.google.com/document/d/${docId}/export?format=txt`;

  try {
    const res = await fetch(exportUrl, {
      next: { revalidate: 3600 },
      headers: {
        Accept: "text/plain",
      },
    });

    if (!res.ok) {
      return null;
    }

    const rawText = await res.text();
    if (!rawText || rawText.includes("Sign in")) {
      return null;
    }

    const lines = rawText.split("\n").map(cleanupLine);
    const title = lines.find((line) => line.trim().length > 0) ?? "Guide";
    const indexHeadings = extractIndexHeadings(lines);
    const sections = parseSections(lines, indexHeadings);

    if (sections.length === 0) {
      return {
        title,
        sections: [
          {
            id: "contenido",
            title: "Contenido",
            blocks: [{ type: "paragraph", text: rawText.replace(/\s+/g, " ").trim() }],
          },
        ],
      };
    }

    return { title, sections };
  } catch {
    return null;
  }
}
