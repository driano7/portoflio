import type { Repository } from "@/app/projects/page";
import Link from 'next/link';
import { Github, Star } from 'lucide-react';
import { Card } from "@/components/ui/card";
import { formatDistanceToNow } from "date-fns";

type ProjectsProps = {
  projects: Repository[];
};

export function Projects({ projects }: ProjectsProps) {
  return (
    <div id="projects" className="relative py-16">
        <div className="container px-4 mx-auto animate-fade-in">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Projects</h2>
            <div className="grid grid-cols-1 gap-8 mx-auto sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <Card key={project.id} className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden flex flex-col justify-between hover:border-zinc-700 transition-colors">
                        <article className="h-full w-full flex flex-col justify-between">
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <Link href={project.html_url} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-white hover:text-zinc-300 transition-colors">
                                        {project.name}
                                    </Link>
                                    <div className="text-sm text-zinc-400 flex items-center gap-1">
                                        <Star className="w-4 h-4 text-zinc-500" />
                                        <span>{project.stargazers_count}</span>
                                    </div>
                                </div>
                                <p className="text-sm text-zinc-400 mb-4">{project.description}</p>
                            </div>
                            <div className="text-xs text-zinc-500 flex items-center justify-between">
                                <span>{project.language}</span>
                                <span>
                                  Updated {formatDistanceToNow(new Date(project.pushed_at), { addSuffix: true })}
                                </span>
                            </div>
                        </article>
                    </Card>
                ))}
            </div>
        </div>
    </div>
  );
}
