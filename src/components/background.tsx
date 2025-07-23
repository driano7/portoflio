"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useRef } from "react";

export function Background() {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const mouse = useRef({
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
  });
  const a = useRef(0);
  const b = useRef(0);
  const isTouchDevice =
    typeof window !== "undefined" &&
    ("ontouchstart" in window || navigator.maxTouchPoints > 0);
  const color =
    theme === "dark" || theme === "dim" ? "255, 255, 255" : "0, 0, 0";
  const numParticles = isTouchDevice ? 500 : 1000;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);
    let particles: {
      x: number;
      y: number;
      size: number;
      vx: number;
      vy: number;
      opacity: number;
    }[] = [];

    function initParticles() {
      particles = [];
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 0.4 + 0.1,
          vx: 0,
          vy: 0,
          opacity: Math.random() * 0.5 + 0.2,
        });
      }
    }

    function animate() {
      if (!ctx) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      ctx.clearRect(0, 0, width, height);

      mouse.current.vx = (mousePosition.current.x - mouse.current.x) * 0.05;
      mouse.current.vy = (mousePosition.current.y - mouse.current.y) * 0.05;
      mouse.current.x += mouse.current.vx;
      mouse.current.y += mouse.current.vy;

      a.current += mouse.current.vx * 0.5;
      b.current += mouse.current.vy * 0.5;

      particles.forEach((p) => {
        const dx = mouse.current.x - p.x;
        const dy = mouse.current.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const angle = Math.atan2(dy, dx);
        const force = -10 / dist;
        if (dist < 100) {
          p.vx += force * Math.cos(angle);
          p.vy += force * Math.sin(angle);
        }
        p.vx *= 0.95;
        p.vy *= 0.95;
        p.x += p.vx + Math.sin(a.current * 0.01 + p.y * 0.1) * 0.1;
        p.y += p.vy + Math.sin(b.current * 0.01 + p.x * 0.1) * 0.1;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.fillStyle = `rgba(${color}, ${p.opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    initParticles();
    animate();

    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current.x = e.clientX;
      mousePosition.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [color, numParticles]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-10 h-full w-full bg-transparent"
    />
  );
}
