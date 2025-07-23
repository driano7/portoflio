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

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> e27c3de (habia visto la animación rápidamente y la quitaste (los puntos de fondo))
    const connect = () => {
        let opacity = 1;
        for (let i = 0; i < circles.length; i++) {
            for (let j = i + 1; j < circles.length; j++) {
                const distance = Math.sqrt(
                    Math.pow(circles[i].x - circles[j].x, 2) +
                    Math.pow(circles[i].y - circles[j].y, 2)
                );
                if (distance < 250) {
                    opacity = opacity - distance / 250;
                    ctx.strokeStyle = `rgba(${
                        theme === 'dark' || theme === 'dim' ? '255, 255, 255' : '0, 0, 0'
                    }, ${opacity})`;
                    ctx.beginPath();
                    ctx.moveTo(circles[i].x, circles[i].y);
                    ctx.lineTo(circles[j].x, circles[j].y);
                    ctx.stroke();
                    opacity = 1;
                }
            }
        }
    };


<<<<<<< HEAD
>>>>>>> e27c3de (habia visto la animación rápidamente y la quitaste (los puntos de fondo))
=======
>>>>>>> 77c6510 (mejora la animación de los puntos balncos de fondo del homepage por favo)
=======
>>>>>>> e27c3de (habia visto la animación rápidamente y la quitaste (los puntos de fondo))
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        this.size = Math.random() * 1.5 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
=======
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
>>>>>>> e27c3de (habia visto la animación rápidamente y la quitaste (los puntos de fondo))
=======
        this.size = Math.random() * 1.5 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
>>>>>>> 77c6510 (mejora la animación de los puntos balncos de fondo del homepage por favo)
=======
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
>>>>>>> e27c3de (habia visto la animación rápidamente y la quitaste (los puntos de fondo))
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

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      for (let i = 0; i < 100; i++) {
=======
      for (let i = 0; i < 80; i++) {
>>>>>>> e27c3de (habia visto la animación rápidamente y la quitaste (los puntos de fondo))
=======
      for (let i = 0; i < 100; i++) {
>>>>>>> 77c6510 (mejora la animación de los puntos balncos de fondo del homepage por favo)
=======
      for (let i = 0; i < 80; i++) {
>>>>>>> e27c3de (habia visto la animación rápidamente y la quitaste (los puntos de fondo))
        circles.push(
          new Circle(
            Math.random() * width,
            Math.random() * height,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            `rgba(${particleColor}, ${Math.random() * 0.4 + 0.1})`
=======
            `rgba(${particleColor}, ${Math.random()})`
>>>>>>> e27c3de (habia visto la animación rápidamente y la quitaste (los puntos de fondo))
=======
            `rgba(${particleColor}, ${Math.random() * 0.4 + 0.1})`
>>>>>>> 77c6510 (mejora la animación de los puntos balncos de fondo del homepage por favo)
=======
            `rgba(${particleColor}, ${Math.random()})`
>>>>>>> e27c3de (habia visto la animación rápidamente y la quitaste (los puntos de fondo))
          )
        );
      }
    };

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    let animationFrameId: number;
=======
>>>>>>> e27c3de (habia visto la animación rápidamente y la quitaste (los puntos de fondo))
=======
    let animationFrameId: number;
>>>>>>> 7c077b0 (¿puedes arreglar la animación del fondo?)
=======
>>>>>>> e27c3de (habia visto la animación rápidamente y la quitaste (los puntos de fondo))
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      for (const circle of circles) {
        circle.update();
        circle.draw();
      }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 77c6510 (mejora la animación de los puntos balncos de fondo del homepage por favo)
      animationFrameId = requestAnimationFrame(animate);
=======
      connect();
<<<<<<< HEAD
      requestAnimationFrame(animate);
>>>>>>> e27c3de (habia visto la animación rápidamente y la quitaste (los puntos de fondo))
=======
      animationFrameId = requestAnimationFrame(animate);
>>>>>>> 7c077b0 (¿puedes arreglar la animación del fondo?)
=======
      connect();
      requestAnimationFrame(animate);
>>>>>>> e27c3de (habia visto la animación rápidamente y la quitaste (los puntos de fondo))
    };

    const handleResize = () => {
      init();
    };

    init();
    animate();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      cancelAnimationFrame(animationFrameId);
=======
>>>>>>> e27c3de (habia visto la animación rápidamente y la quitaste (los puntos de fondo))
=======
      cancelAnimationFrame(animationFrameId);
>>>>>>> 7c077b0 (¿puedes arreglar la animación del fondo?)
=======
>>>>>>> e27c3de (habia visto la animación rápidamente y la quitaste (los puntos de fondo))
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
    />
  );
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
}
>>>>>>> e27c3de (habia visto la animación rápidamente y la quitaste (los puntos de fondo))
=======
}
>>>>>>> 7c077b0 (¿puedes arreglar la animación del fondo?)
=======
}
>>>>>>> e27c3de (habia visto la animación rápidamente y la quitaste (los puntos de fondo))
