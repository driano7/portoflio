"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type LoopingGuideImageProps = {
  src: string;
  alt: string;
  className?: string;
  speedPxPerSec?: number;
  scale?: number;
  yOffset?: number;
  startDelayMs?: number;
};

export function LoopingGuideImage({
  src,
  alt,
  className,
  speedPxPerSec = 26,
  scale = 1.05,
  yOffset = -4.5,
  startDelayMs = 450,
}: LoopingGuideImageProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const xRef = useRef(0);
  const lastTsRef = useRef<number | null>(null);
  const startTimerRef = useRef<number | null>(null);
  const [inView, setInView] = useState(false);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState(false);

  const yOffsetRatio = useMemo(() => yOffset / 200, [yOffset]);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setInView(entry.isIntersecting);
      },
      { threshold: 0.3 },
    );

    observer.observe(wrapper);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const img = new Image();
    img.decoding = "async";
    img.loading = "eager";
    img.crossOrigin = "anonymous";
    img.src = src;

    img.onload = () => {
      imageRef.current = img;
      setReady(true);
      setError(false);
    };

    img.onerror = () => {
      setError(true);
      setReady(false);
      imageRef.current = null;
    };
  }, [src]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !wrapper || !ready || error) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const resizeCanvas = () => {
      const rect = wrapper.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      const width = Math.max(1, Math.floor(rect.width));
      const height = Math.max(1, Math.floor(rect.height));
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (ts: number) => {
      const img = imageRef.current;
      if (!img) return;

      const rect = wrapper.getBoundingClientRect();
      const canvasW = Math.max(1, Math.floor(rect.width));
      const canvasH = Math.max(1, Math.floor(rect.height));

      const lastTs = lastTsRef.current ?? ts;
      const deltaSec = Math.min(0.05, (ts - lastTs) / 1000);
      lastTsRef.current = ts;
      xRef.current += speedPxPerSec * deltaSec;

      const fitScale = (canvasH / Math.max(img.height, 1)) * scale;
      const imgW = Math.max(1, img.width * fitScale);
      const imgH = Math.max(1, img.height * fitScale);
      const y = (canvasH - imgH) / 2 + canvasH * yOffsetRatio;

      context.clearRect(0, 0, canvasW, canvasH);

      const offsetX = ((xRef.current % imgW) + imgW) % imgW;
      let drawX = -offsetX;
      while (drawX < canvasW + imgW) {
        context.drawImage(img, drawX, y, imgW, imgH);
        drawX += imgW;
      }

      frameRef.current = window.requestAnimationFrame(draw);
    };

    const start = () => {
      if (frameRef.current) return;
      lastTsRef.current = null;
      frameRef.current = window.requestAnimationFrame(draw);
    };

    const stop = () => {
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    if (inView) {
      startTimerRef.current = window.setTimeout(start, startDelayMs);
    } else {
      stop();
    }

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      stop();
      if (startTimerRef.current) {
        window.clearTimeout(startTimerRef.current);
        startTimerRef.current = null;
      }
    };
  }, [ready, error, inView, scale, speedPxPerSec, startDelayMs, yOffsetRatio]);

  if (error) {
    return (
      <div className={cn("w-full overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900", className)}>
        <img src={src} alt={alt} className="h-full w-full object-cover" loading="lazy" />
      </div>
    );
  }

  return (
    <div ref={wrapperRef} className={cn("w-full overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900", className)}>
      <canvas ref={canvasRef} aria-label={alt} role="img" className="block h-full w-full" />
    </div>
  );
}

