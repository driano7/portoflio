import { FirebaseIcon } from "../icons/firebase";
import { ReactIcon } from "../icons/react";
import { TailwindIcon } from "../icons/tailwind";
import { TypescriptIcon } from "../icons/typescript";

const techStack = [
  { name: 'React', icon: <ReactIcon className="h-12 w-12" /> },
  { name: 'TypeScript', icon: <TypescriptIcon className="h-12 w-12" /> },
  { name: 'TailwindCSS', icon: <TailwindIcon className="h-12 w-12" /> },
  { name: 'Firebase', icon: <FirebaseIcon className="h-12 w-12" /> },
];

export function TechStack() {
  return (
    <section id="tech-stack" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">My Tech Stack</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Technologies I love to work with to build modern, scalable applications.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-6 py-12 sm:grid-cols-4 lg:gap-8">
          {techStack.map((tech) => (
            <div key={tech.name} className="flex flex-col items-center justify-center space-y-2 rounded-lg border bg-card p-6 text-card-foreground shadow-sm transition-transform duration-300 hover:-translate-y-2">
              {tech.icon}
              <span className="text-lg font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
