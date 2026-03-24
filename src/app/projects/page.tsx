import type { Metadata } from "next";

import { Projects } from "@/components/sections/projects";
import { buildPageMetadata } from "@/lib/seo";

export type Repository = {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  homepage: string | null;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  pushed_at: string;
  default_branch: string;
  owner?: {
    login: string;
  };
  coverImageUrl?: string | null;
};

export const metadata: Metadata = buildPageMetadata({
  title: "Proyectos y Portafolio | Donovan Riaño",
  description:
    "Portafolio técnico y proyectos recientes: productos, integraciones y repositorios activos de Donovan Riaño.",
  path: "/projects",
});

async function getRepos(): Promise<Repository[]> {
  const requestHeaders: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "User-Agent": "driano7-portfolio",
  };

  const fetchJson = async <T,>(url: string, timeoutMs: number, init?: RequestInit): Promise<T | null> => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    try {
      const controller = new AbortController();
      timeoutId = setTimeout(() => controller.abort(), timeoutMs);

      const response = await fetch(url, {
        ...init,
        headers: requestHeaders,
        signal: controller.signal,
        next: { revalidate: 3600 },
      });

      if (!response.ok) return null;
      return (await response.json()) as T;
    } catch {
      return null;
    } finally {
      if (timeoutId) clearTimeout(timeoutId);
    }
  };

  const decodeBase64 = (value: string) => Buffer.from(value.replace(/\n/g, ""), "base64").toString("utf8");

  const collectMarkdownImageCandidates = (markdown: string) => {
    const output: string[] = [];
    const markdownImageRegex = /!\[[^\]]*]\(([^)]+)\)/g;
    const htmlImageRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;

    for (const match of markdown.matchAll(markdownImageRegex)) {
      const raw = (match[1] ?? "").trim();
      if (!raw) continue;
      const cleaned = raw.replace(/^<|>$/g, "");
      const spaceIndex = cleaned.search(/\s/);
      output.push(spaceIndex === -1 ? cleaned : cleaned.slice(0, spaceIndex));
    }

    for (const match of markdown.matchAll(htmlImageRegex)) {
      const raw = (match[1] ?? "").trim();
      if (raw) output.push(raw);
    }

    return output;
  };

  const toAbsoluteReadmeUrl = (
    candidate: string,
    owner: string,
    repo: string,
    defaultBranch: string,
    readmePath: string,
  ) => {
    if (!candidate || candidate.startsWith("data:")) return null;
    if (candidate.startsWith("http://") || candidate.startsWith("https://")) return candidate;
    if (candidate.startsWith("//")) return `https:${candidate}`;

    if (candidate.startsWith("/")) {
      return `https://raw.githubusercontent.com/${owner}/${repo}/${defaultBranch}/${candidate.slice(1)}`;
    }

    const readmeDir = readmePath.includes("/")
      ? readmePath.slice(0, readmePath.lastIndexOf("/") + 1)
      : "";
    const base = `https://raw.githubusercontent.com/${owner}/${repo}/${defaultBranch}/${readmeDir}`;
    try {
      return new URL(candidate, base).toString();
    } catch {
      return null;
    }
  };

  const pickCoverImage = (
    candidates: string[],
    owner: string,
    repo: string,
    defaultBranch: string,
    readmePath: string,
  ) => {
    const normalized = candidates
      .map((item) => toAbsoluteReadmeUrl(item, owner, repo, defaultBranch, readmePath))
      .filter((item): item is string => Boolean(item));

    const nonBadge = normalized.find((item) => {
      const lower = item.toLowerCase();
      return !lower.includes("shields.io") && !lower.includes("badge");
    });

    return nonBadge ?? normalized[0] ?? null;
  };

  const resolveReadmeCover = async (owner: string, repo: string, defaultBranch: string) => {
    const readme = await fetchJson<{
      content?: string;
      encoding?: string;
      path?: string;
    }>(
      `https://api.github.com/repos/${owner}/${repo}/readme`,
      2000,
    );
    if (!readme?.content || readme.encoding !== "base64") return null;

    const markdown = decodeBase64(readme.content);
    const candidates = collectMarkdownImageCandidates(markdown);
    if (!candidates.length) return null;

    return pickCoverImage(candidates, owner, repo, defaultBranch, readme.path ?? "README.md");
  };

  let timeoutId: ReturnType<typeof setTimeout> | undefined;
  try {
    const controller = new AbortController();
    timeoutId = setTimeout(() => controller.abort(), 1800);

    const res = await fetch("https://api.github.com/users/driano7/repos?sort=pushed&direction=desc&per_page=30", {
      next: { revalidate: 3600 },
      headers: {
        Accept: "application/vnd.github+json",
      },
      signal: controller.signal,
    });

    if (!res.ok) {
      return [];
    }

    const data = (await res.json()) as Repository[];
    const selected = data.slice(0, 7);

    return Promise.all(
      selected.map(async (repo) => {
        const owner = repo.owner?.login ?? "driano7";
        const defaultBranch = repo.default_branch || "main";
        const readmeCover = await resolveReadmeCover(owner, repo.name, defaultBranch);
        const fallbackCover = `https://opengraph.githubassets.com/1/${owner}/${repo.name}`;

        return {
          ...repo,
          coverImageUrl: readmeCover ?? fallbackCover,
        };
      }),
    );
  } catch {
    return [];
  } finally {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  }
}

export default async function ProjectsPage() {
  const repos = await getRepos();

  return (
      <main className="w-full max-w-6xl mx-auto">
        <Projects projects={repos} />
      </main>
  );
}
