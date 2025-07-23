'use client';
import React from 'react';
import Link from 'next/link';
import { Particles } from '@/components/particles';

export function Landing() {
  return (
<<<<<<< HEAD
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-transparent text-foreground">
      <div
        className="relative z-10 flex flex-col items-center text-center px-4 animate-fade-in"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-primary to-foreground/80">
=======
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <div
        className="relative z-10 flex flex-col items-center text-center px-4 animate-fade-in"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-foreground to-zinc-500">
>>>>>>> 214392b (los temas que cambian es el recuadro de los temas, no todo el sitio web)
          Donovan Riaño
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Full-stack developer building beautiful and functional user interfaces.
        </p>
        <nav className="my-16 flex items-center justify-center gap-4">
          <Link
            href="/projects"
            className="text-sm duration-500 text-muted-foreground hover:text-foreground"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="text-sm duration-500 text-muted-foreground hover:text-foreground"
          >
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
}
