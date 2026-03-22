'use client';

import React, { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

import { cn } from '@/lib/utils';

type ParticlesProps = {
  className?: string;
  quantity?: number;
  speed?: number;
};

type Dot = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
};

function getParticleColor(theme?: string) {
  return theme === 'light' ? '0, 0, 0' : '255, 255, 255';
}

export function Particles({ className, quantity = 100, speed = 0.35 }: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const dotsRef = useRef<Dot[]>([]);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) {
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return;
    }

    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
      canvas.style.width = `${Math.floor(rect.width)}px`;
      canvas.style.height = `${Math.floor(rect.height)}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      dotsRef.current = Array.from({ length: quantity }, () => ({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        radius: 0.8 + Math.random() * 1.6,
        alpha: 0.15 + Math.random() * 0.45,
      }));
    };

    const draw = () => {
      const rect = container.getBoundingClientRect();
      const color = getParticleColor(theme);

      ctx.clearRect(0, 0, rect.width, rect.height);

      for (const dot of dotsRef.current) {
        dot.x += dot.vx;
        dot.y += dot.vy;

        if (dot.x <= 0 || dot.x >= rect.width) dot.vx *= -1;
        if (dot.y <= 0 || dot.y >= rect.height) dot.vy *= -1;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${dot.alpha})`;
        ctx.fill();
      }

      rafRef.current = window.requestAnimationFrame(draw);
    };

    resize();
    rafRef.current = window.requestAnimationFrame(draw);
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, [quantity, speed, theme]);

  return (
    <div ref={containerRef} className={cn('pointer-events-none absolute inset-0', className)}>
      <canvas ref={canvasRef} className="h-full w-full" aria-hidden />
    </div>
  );
}

export default Particles;
