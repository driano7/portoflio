import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
        <div className="space-y-4">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            I'm a full-stack developer with a passion for building beautiful and functional user interfaces. With a foundation in modern web technologies, I specialize in bringing ideas to life from concept to deployment. I enjoy tackling complex problems and learning new skills along the way. When I'm not coding, I enjoy exploring new coffee shops and contributing to open-source projects.
          </p>
        </div>
        <div className="flex justify-center">
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle>Let's Connect</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision.
              </p>
               <Image 
                src="https://placehold.co/400x400"
                alt="Donovan Riaño"
                width={400}
                height={400}
                data-ai-hint="professional portrait"
                className="mt-4 rounded-lg object-cover"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
