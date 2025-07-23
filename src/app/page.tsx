import { Header } from "@/components/header";
import { Landing } from "@/components/sections/landing";
import { About } from "@/components/sections/about";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { GithubRepos } from "@/components/sections/github-repos";
import { TechStack } from "@/components/sections/tech-stack";
import { Footer } from "@/components/sections/footer";

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
    return data;
  } catch (error) {
    console.error('Error fetching repositories:', error);
    return [];
  }
}

export default async function Home() {
  const allRepos = await getRepos();

  const featuredProjectsNames = ['strawberry-wallet', 'xoco-cafe'];
  
  const featuredProjects = allRepos.filter(repo => featuredProjectsNames.includes(repo.name));
  const otherRepos = allRepos.filter(repo => !featuredProjectsNames.includes(repo.name));

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Landing />
        <About />
        <FeaturedProjects projects={featuredProjects} />
        <GithubRepos repos={otherRepos} />
        <TechStack />
      </main>
      <Footer />
    </div>
  );
}
