"use client";

import { useEffect, useMemo, useState } from "react";

type EthGuideChartProps = {
  isEs: boolean;
};

type ChartPoint = {
  time: string;
  priceUsd: number;
};

type ChartResponse = {
  points?: ChartPoint[];
  source?: string;
  error?: string;
};

function formatUsd(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

function formatSourceLabel(source: string | null, isEs: boolean) {
  if (source === "estimated_from_24h_change") {
    return isEs
      ? "Fuente: CoinMarketCap (estimación por variación 24h)."
      : "Source: CoinMarketCap (estimated from 24h change).";
  }

  return isEs
    ? "Fuente: CoinMarketCap (datos horarios de mercado, 24h)."
    : "Source: CoinMarketCap (hourly market data, 24h).";
}

function buildSparkline(points: ChartPoint[]) {
  const width = 640;
  const height = 240;
  const paddingX = 18;
  const paddingY = 18;
  const usableWidth = width - paddingX * 2;
  const usableHeight = height - paddingY * 2;

  const prices = points.map((point) => point.priceUsd);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  const range = Math.max(maxPrice - minPrice, 1e-9);

  const coordinates = points.map((point, index) => {
    const x =
      points.length <= 1
        ? paddingX
        : paddingX + (index / (points.length - 1)) * usableWidth;
    const y = paddingY + usableHeight - ((point.priceUsd - minPrice) / range) * usableHeight;
    return { x, y };
  });

  const line = coordinates
    .map((coord, index) =>
      `${index === 0 ? "M" : "L"}${coord.x.toFixed(2)} ${coord.y.toFixed(2)}`,
    )
    .join(" ");

  const first = coordinates[0];
  const last = coordinates[coordinates.length - 1];
  const area = `${line} L${last.x.toFixed(2)} ${(height - paddingY).toFixed(
    2,
  )} L${first.x.toFixed(2)} ${(height - paddingY).toFixed(2)} Z`;

  return {
    width,
    height,
    line,
    area,
    up: prices[prices.length - 1] >= prices[0],
    minPrice,
    maxPrice,
  };
}

export function EthGuideChart({ isEs }: EthGuideChartProps) {
  const [points, setPoints] = useState<ChartPoint[]>([]);
  const [source, setSource] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let disposed = false;

    const fetchChart = async () => {
      try {
        const res = await fetch("/api/market/token-chart?symbol=ETH", { cache: "no-store" });
        const payload = (await res.json()) as ChartResponse;
        if (!res.ok) {
          if (disposed) return;
          setPoints([]);
          setSource(null);
          return;
        }
        if (disposed) return;
        setPoints(payload.points ?? []);
        setSource(payload.source ?? null);
      } catch {
        if (disposed) return;
        setPoints([]);
        setSource(null);
      } finally {
        if (!disposed) setLoading(false);
      }
    };

    void fetchChart();
    return () => {
      disposed = true;
    };
  }, []);

  const sparkline = useMemo(
    () => (points.length >= 2 ? buildSparkline(points) : null),
    [points],
  );

  if (loading || !sparkline) return null;

  return (
    <div className="rounded-2xl border border-violet-400/30 bg-zinc-900/55 p-4 md:p-6">
      <p className="text-sm font-semibold text-zinc-100 md:text-base">
        {isEs ? "ETH/USD · últimas 24 horas" : "ETH/USD · last 24 hours"}
      </p>

      <div className="mt-2">
        <svg
          viewBox={`0 0 ${sparkline.width} ${sparkline.height}`}
          className="h-48 w-full md:h-56"
          role="img"
          aria-label={isEs ? "Gráfica de precio de Ethereum en 24 horas" : "Ethereum 24-hour price chart"}
        >
          <defs>
            <linearGradient id="guide-eth-area" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="0%"
                stopColor={sparkline.up ? "rgba(16, 185, 129, 0.38)" : "rgba(239, 68, 68, 0.38)"}
              />
              <stop
                offset="100%"
                stopColor={sparkline.up ? "rgba(16, 185, 129, 0.04)" : "rgba(239, 68, 68, 0.04)"}
              />
            </linearGradient>
          </defs>
          <path d={sparkline.area} fill="url(#guide-eth-area)" />
          <path
            d={sparkline.line}
            fill="none"
            stroke={sparkline.up ? "#10b981" : "#ef4444"}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="mt-1 flex items-center justify-between text-[11px] text-zinc-400">
          <span>{formatUsd(sparkline.minPrice)}</span>
          <span>{formatUsd(sparkline.maxPrice)}</span>
        </div>
        <p className="mt-2 text-[11px] text-zinc-500">
          {formatSourceLabel(source, isEs)}
        </p>
      </div>
    </div>
  );
}
