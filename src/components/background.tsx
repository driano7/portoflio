'use client';

import { useTheme } from 'next-themes';
import React, { useEffect, useRef } from 'react';

export function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return;
    }

    let width = window.innerWidth;
    let height = window.innerHeight;
    let circles: Circle[] = [];

    class Circle {
      x: number;
      y: number;
      color: string;
      size: number;
      speedX: number;
      speedY: number;

      constructor(x: number, y: number, color: string) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.size = Math.random() * 1.5 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
      }

      update() {
        if (this.x > width || this.x < 0) {
          this.speedX = -this.speedX;
        }
        if (this.y > height || this.y < 0) {
          this.speedY = -this.speedY;
        }
        this.x += this.speedX;
        this.y += this.speedY;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      circles = [];
      const particleColor = theme === 'dark' || theme === 'dim' ? '255, 255, 255' : '0, 0, 0';

      for (let i = 0; i < 100; i++) {
        circles.push(
          new Circle(
            Math.random() * width,
            Math.random() * height,
            `rgba(${particleColor}, ${Math.random() * 0.4 + 0.1})`
          )
        );
      }
    };

    let animationFrameId: number;
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      for (const circle of circles) {
        circle.update();
        circle.draw();
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      init();
    };

    init();
    animate();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
    />
  );
}
