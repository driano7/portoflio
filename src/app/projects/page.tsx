import type { Metadata } from "next";

import { Projects } from "@/components/sections/projects";
import { buildPageMetadata } from "@/lib/seo";

export type Repository = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  pushed_at: string;
};

export const metadata: Metadata = buildPageMetadata({
  title: "Proyectos y Portafolio | Donovan Riaño",
  description:
    "Portafolio técnico y proyectos recientes: productos, integraciones y repositorios activos de Donovan Riaño.",
  path: "/projects",
});

async function getRepos(): Promise<Repository[]> {
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
    return data.slice(0, 7);
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
