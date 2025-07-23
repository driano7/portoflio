import { Landing } from "@/components/sections/landing";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";

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
      console.error('Failed to fetch repos:', res.statusText);
      return [];
    }
    const data = await res.json();
    const threeYearsAgo = new Date();
    threeYearsAgo.setFullYear(threeYearsAgo.getFullYear() - 3);

    return data.filter((repo: Repository) => new Date(repo.pushed_at) > threeYearsAgo);
  } catch (error) {
    console.error('Error fetching repositories:', error);
    return [];
  }
}

export default async function Home() {
  const repos = await getRepos();

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <main className="flex-1">
        <Landing />
        <Projects projects={repos} />
        <Contact />
      </main>
    </div>
  );
}
