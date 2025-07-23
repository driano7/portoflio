import type { Repository } from "@/app/page";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, GitFork } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

type GithubReposProps = {
  repos: Repository[];
};

export function GithubRepos({ repos }: GithubReposProps) {
  if (!repos || repos.length === 0) {
    return (
      <section id="repositories" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">My Repositories</h2>
          <p className="mt-4 text-muted-foreground">Could not load repositories at this time.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="repositories" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">My GitHub Contributions</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A selection of my public repositories on GitHub.
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo) => (
            <Link key={repo.id} href={repo.html_url} target="_blank" rel="noopener noreferrer" className="block h-full">
              <Card className="h-full flex flex-col transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <CardHeader>
                  <CardTitle className="text-lg">{repo.name}</CardTitle>
                  <CardDescription className="line-clamp-3 flex-grow">{repo.description || 'No description provided.'}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto flex flex-col gap-4">
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4" />
                        {repo.stargazers_count}
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork className="h-4 w-4" />
                        {repo.forks_count}
                      </div>
                    </div>
                    {repo.language && <Badge variant="outline">{repo.language}</Badge>}
                  </div>
                   <p className="text-xs text-muted-foreground">
                    Updated {formatDistanceToNow(new Date(repo.pushed_at), { addSuffix: true })}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
