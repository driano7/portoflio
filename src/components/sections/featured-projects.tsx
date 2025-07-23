import type { Repository } from "@/app/page";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, GitFork } from "lucide-react";

type FeaturedProjectsProps = {
  projects: Repository[];
};

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  if (!projects || projects.length === 0) {
    return null;
  }

  return (
    <section id="featured-projects" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A couple of projects I'm particularly proud of.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-1 md:grid-cols-2">
          {projects.map((project) => (
            <Link key={project.id} href={project.html_url} target="_blank" rel="noopener noreferrer" className="block h-full">
              <Card className="h-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <CardHeader>
                  <Image
                    src={`https://placehold.co/600x400.png`}
                    data-ai-hint={project.name === 'strawberry-wallet' ? 'digital wallet' : 'coffee shop'}
                    alt={`Screenshot of ${project.name}`}
                    width={600}
                    height={400}
                    className="mb-4 rounded-lg object-cover"
                  />
                  <CardTitle>{project.name}</CardTitle>
                  <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    {project.language && <Badge variant="secondary">{project.language}</Badge>}
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4" />
                        {project.stargazers_count}
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork className="h-4 w-4" />
                        {project.forks_count}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
