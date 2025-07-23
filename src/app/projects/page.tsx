import { Projects } from "@/components/sections/projects";
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Particles from '@/components/particles';

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

async function getRepos(): Promise<Repository[]> {
  try {
    const res = await fetch('https://api.github.com/users/driano7/repos?sort=pushed&direction=desc', {
      next: { revalidate: 3600 } // Revalidate every hour
    });
    if (!res.ok) {
      return [];
    }
    const data = await res.json();
    const threeYearsAgo = new Date();
    threeYearsAgo.setFullYear(threeYearsAgo.getFullYear() - 3);

    return data.filter((repo: Repository) => new Date(repo.pushed_at) > threeYearsAgo);
  } catch (error) {
    return [];
  }
}

export default async function ProjectsPage() {
  const repos = await getRepos();

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-start h-16">
            <Link href="/" className="text-sm duration-500 text-zinc-500 hover:text-zinc-300">
              <ArrowLeft className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </header>
      <main className="pt-16">
        <Projects projects={repos} />
      </main>
    </div>
  );
}
