'use client';
import React from 'react';
import Link from 'next/link';

export function Landing() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-transparent text-foreground">
      <div
        className="relative z-10 flex flex-col items-center text-center px-4 animate-fade-in"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-primary to-foreground/80">
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
