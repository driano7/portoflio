'use client';
import React, { useRef, useEffect, useState } from 'react';
import { Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

export function Landing() {
  const ref = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black text-white">
      <div
        ref={ref}
        className="relative z-10 flex flex-col items-center text-center px-4"
      >
        <div
          className={`duration-1000 transition-all ease-in-out ${
            isIntersecting ? 'opacity-100' : 'opacity-0 translate-y-4'
          }`}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Donovan Riaño
          </h1>
          <p className="mt-4 text-lg text-zinc-400">
            Full-stack developer building beautiful and functional user interfaces.
          </p>
        </div>
        <nav className="my-16 flex items-center justify-center gap-4 animate-fade-in">
          <Link
            href="/#projects"
            className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
          >
            Projects
          </Link>
          <Link
            href="/#contact"
            className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center justify-center gap-4">
          <Link href="https://github.com/driano7" target="_blank" rel="noopener noreferrer">
             <Github className="h-6 w-6 text-zinc-500 hover:text-zinc-300 duration-500" />
          </Link>
          <Link href="https://www.linkedin.com/in/driano7" target="_blank" rel="noopener noreferrer">
             <Linkedin className="h-6 w-6 text-zinc-500 hover:text-zinc-300 duration-500" />
          </Link>
        </div>
      </div>
    </div>
  );
}
