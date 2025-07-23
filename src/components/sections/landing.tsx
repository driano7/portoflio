export function Landing() {
  return (
    <section id="home" className="container flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center text-center">
      <div className="space-y-4">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Donovan Riaño
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Welcome to my digital space. I'm a passionate developer creating modern web experiences.
        </p>
      </div>
    </section>
  );
}
