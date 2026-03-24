"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowDownRight, ArrowUpRight, X } from "lucide-react";
import { useLocale } from "next-intl";

import type { AppLocale } from "@/i18n/routing";

type MarketToken = {
  symbol: string;
  priceUsd: number | null;
  change24h: number | null;
  hasChartData?: boolean;
};

type MarketResponse = {
  updatedAt?: string;
  tokens?: MarketToken[];
  error?: string;
};

type ChartPoint = {
  time: string;
  priceUsd: number;
};

type ChartResponse = {
  points?: ChartPoint[];
  source?: string;
  windowHours?: number;
  samplingHours?: number;
  error?: string;
};

type ChartState = {
  loading: boolean;
  points: ChartPoint[];
  source: string | null;
  windowHours: number | null;
  samplingHours: number | null;
  error: string | null;
};

const REFRESH_INTERVAL_MS = 5 * 60 * 1000;

function formatUsd(value: number | null, isMobile: boolean) {
  if (value === null) return "--";

  const useSingleDecimal = isMobile && value >= 10_000;

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: useSingleDecimal ? 1 : 2,
    maximumFractionDigits: useSingleDecimal ? 1 : 2,
  }).format(value);
}

function formatPercent(value: number | null) {
  if (value === null) return "--";
  const formatted = Math.abs(value).toFixed(2);
  return `${value >= 0 ? "+" : "-"}${formatted}%`;
}

function formatSourceLabel(
  source: string | null,
  isEs: boolean,
  windowHours: number,
  samplingHours: number,
) {
  if (source === "estimated_from_24h_change") {
    return isEs
      ? `Fuente: CoinMarketCap (estimación por variación 24h, muestreo cada ${samplingHours}h).`
      : `Source: CoinMarketCap (estimated from 24h change, sampling every ${samplingHours}h).`;
  }

  return isEs
    ? `Fuente: CoinMarketCap (${windowHours}h, muestreo cada ${samplingHours}h).`
    : `Source: CoinMarketCap (${windowHours}h window, sampling every ${samplingHours}h).`;
}

function buildSparkline(points: ChartPoint[]) {
  const width = 320;
  const height = 118;
  const paddingX = 10;
  const paddingY = 12;
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
    const y =
      paddingY + usableHeight - ((point.priceUsd - minPrice) / range) * usableHeight;
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

export function DefiMarketTicker() {
  const locale = useLocale() as AppLocale;
  const isEs = locale === "es";
  const [tokens, setTokens] = useState<MarketToken[]>([]);
  const [updatedAt, setUpdatedAt] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [openChartSymbol, setOpenChartSymbol] = useState<string | null>(null);
  const [chartBySymbol, setChartBySymbol] = useState<Record<string, ChartState>>({});

  const subtitle = useMemo(
    () =>
      isEs
        ? "Precios y variación 24h para activos relevantes de las guías DeFi."
        : "Price and 24h change for guide-relevant DeFi assets.",
    [isEs],
  );

  useEffect(() => {
    let disposed = false;

    const fetchMarket = async () => {
      if (document.visibilityState === "hidden") return;
      try {
        const res = await fetch("/api/market/tokens", { cache: "no-store" });
        const payload = (await res.json()) as MarketResponse;
        if (!res.ok) throw new Error(payload.error ?? "Market request failed");
        if (disposed) return;
        setTokens(payload.tokens ?? []);
        setUpdatedAt(payload.updatedAt ?? null);
        setError(null);
      } catch (err) {
        if (disposed) return;
        setError(err instanceof Error ? err.message : "Market unavailable");
      } finally {
        if (!disposed) setLoading(false);
      }
    };

    fetchMarket();
    const intervalId = window.setInterval(fetchMarket, REFRESH_INTERVAL_MS);
    const onVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        fetchMarket();
      }
    };

    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      disposed = true;
      window.clearInterval(intervalId);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const sync = () => setIsMobile(media.matches);

    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  const visibleTokens = tokens.slice(0, 6);
  const selectedToken = visibleTokens.find((token) => token.symbol === openChartSymbol) ?? null;
  const selectedChart = selectedToken ? chartBySymbol[selectedToken.symbol] : null;
  const sparkline = useMemo(
    () =>
      selectedChart && selectedChart.points.length >= 2
        ? buildSparkline(selectedChart.points)
        : null,
    [selectedChart],
  );

  const loadTokenChart = async (symbol: string) => {
    setChartBySymbol((prev) => ({
      ...prev,
      [symbol]: {
        loading: true,
        points: prev[symbol]?.points ?? [],
        source: prev[symbol]?.source ?? null,
        windowHours: prev[symbol]?.windowHours ?? null,
        samplingHours: prev[symbol]?.samplingHours ?? null,
        error: null,
      },
    }));

    try {
      const res = await fetch(`/api/market/token-chart?symbol=${encodeURIComponent(symbol)}`, {
        cache: "no-store",
      });
      const payload = (await res.json()) as ChartResponse;
      if (!res.ok) throw new Error(payload.error ?? "Chart unavailable");

      setChartBySymbol((prev) => ({
        ...prev,
        [symbol]: {
          loading: false,
          points: payload.points ?? [],
          source: payload.source ?? null,
          windowHours:
            typeof payload.windowHours === "number"
              ? payload.windowHours
              : (payload.points ?? []).length || null,
          samplingHours:
            typeof payload.samplingHours === "number"
              ? payload.samplingHours
              : null,
          error: null,
        },
      }));
    } catch (err) {
      setChartBySymbol((prev) => ({
        ...prev,
        [symbol]: {
          loading: false,
          points: prev[symbol]?.points ?? [],
          source: prev[symbol]?.source ?? null,
          windowHours: prev[symbol]?.windowHours ?? null,
          samplingHours: prev[symbol]?.samplingHours ?? null,
          error: err instanceof Error ? err.message : "Chart unavailable",
        },
      }));
    }
  };

  const handleToggleChart = (symbol: string) => {
    const token = visibleTokens.find((item) => item.symbol === symbol);
    if (!token?.hasChartData) return;

    setOpenChartSymbol((current) => (current === symbol ? null : symbol));

    const existing = chartBySymbol[symbol];
    if (!existing || (!existing.loading && existing.points.length === 0)) {
      void loadTokenChart(symbol);
    }
  };

  return (
    <div className="rounded-2xl border border-violet-300/35 bg-white p-4 md:p-5 dark:border-violet-500/25 dark:bg-zinc-900">
      <div className="mb-3">
        <div>
          <p className="text-sm font-semibold text-zinc-900 md:text-base dark:text-zinc-100">
            {isEs ? "Snapshot DeFi en tiempo real" : "Real-time DeFi snapshot"}
          </p>
          <p className="text-xs text-zinc-600 md:text-sm dark:text-zinc-400">{subtitle}</p>
        </div>
      </div>

      {loading ? (
        <p className="text-sm text-zinc-600 dark:text-zinc-400">{isEs ? "Cargando mercado..." : "Loading market..."}</p>
      ) : error ? (
        <p className="text-sm text-red-500 dark:text-red-400">
          {isEs ? "No se pudo cargar el mercado:" : "Unable to load market:"} {error}
        </p>
      ) : (
        <div className="grid grid-cols-3 gap-2 md:grid-cols-6 md:gap-3">
          {visibleTokens.map((token) => {
            const up = (token.change24h ?? 0) >= 0;
            return (
              <div
                key={token.symbol}
                className="min-w-0 rounded-xl border border-zinc-300/80 bg-white px-2 py-2 md:px-3 md:py-2.5 dark:border-zinc-700 dark:bg-zinc-950"
              >
                <p className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">{token.symbol}</p>
                <p className="mt-1 whitespace-nowrap text-sm font-bold leading-tight text-zinc-900 md:text-base dark:text-zinc-100">{formatUsd(token.priceUsd, isMobile)}</p>
                <p className={`mt-1 inline-flex items-center gap-1 text-xs font-medium ${up ? "text-emerald-600 dark:text-emerald-400" : "text-red-600 dark:text-red-400"}`}>
                  {up ? <ArrowUpRight className="h-3.5 w-3.5" /> : <ArrowDownRight className="h-3.5 w-3.5" />}
                  {formatPercent(token.change24h)}
                </p>
                {token.hasChartData ? (
                  <button
                    type="button"
                    onClick={() => handleToggleChart(token.symbol)}
                    className="mt-1.5 inline-flex text-[11px] font-semibold text-violet-600 transition-colors hover:text-violet-700 dark:text-violet-300 dark:hover:text-violet-200"
                  >
                    {isEs ? "Ver gráfica" : "View chart"}
                  </button>
                ) : null}
              </div>
            );
          })}
        </div>
      )}

      {selectedToken?.hasChartData ? (
        <div className="mt-3 rounded-xl border border-violet-300/40 bg-white p-3 dark:border-violet-500/30 dark:bg-zinc-950">
          <div className="mb-2 flex items-center justify-between">
            <p className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">
              {selectedToken.symbol} ·{" "}
              {isEs
                ? `últimas ${selectedChart?.windowHours ?? 24} horas`
                : `last ${selectedChart?.windowHours ?? 24} hours`}
            </p>
            <button
              type="button"
              onClick={() => setOpenChartSymbol(null)}
              aria-label={isEs ? "Cerrar gráfica" : "Close chart"}
              className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-zinc-300/90 bg-white text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>

          {selectedChart?.loading ? (
            <p className="text-xs text-zinc-600 dark:text-zinc-400">
              {isEs ? "Cargando gráfica..." : "Loading chart..."}
            </p>
          ) : selectedChart?.error ? (
            <p className="text-xs text-red-500 dark:text-red-400">{selectedChart.error}</p>
          ) : sparkline ? (
            <div>
              <svg
                viewBox={`0 0 ${sparkline.width} ${sparkline.height}`}
                className="h-24 w-full"
                role="img"
                aria-label={
                  isEs
                    ? `Gráfica de precio de ${selectedChart?.windowHours ?? 24} horas`
                    : `${selectedChart?.windowHours ?? 24}-hour price chart`
                }
              >
                <defs>
                  <linearGradient id={`token-area-${selectedToken.symbol}`} x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="0%"
                      stopColor={sparkline.up ? "rgba(16, 185, 129, 0.35)" : "rgba(239, 68, 68, 0.35)"}
                    />
                    <stop
                      offset="100%"
                      stopColor={sparkline.up ? "rgba(16, 185, 129, 0.03)" : "rgba(239, 68, 68, 0.03)"}
                    />
                  </linearGradient>
                </defs>
                <path d={sparkline.area} fill={`url(#token-area-${selectedToken.symbol})`} />
                <path
                  d={sparkline.line}
                  fill="none"
                  stroke={sparkline.up ? "#10b981" : "#ef4444"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="mt-1 flex items-center justify-between text-[11px] text-zinc-500 dark:text-zinc-400">
                <span>{formatUsd(sparkline.minPrice, false)}</span>
                <span>{formatUsd(sparkline.maxPrice, false)}</span>
              </div>
              <p className="mt-1 text-[11px] text-zinc-500 dark:text-zinc-400">
                {formatSourceLabel(
                  selectedChart?.source ?? null,
                  isEs,
                  selectedChart?.windowHours ?? 24,
                  selectedChart?.samplingHours ?? 1,
                )}
              </p>
            </div>
          ) : (
            <p className="text-xs text-zinc-600 dark:text-zinc-400">
              {isEs
                ? "Aún no hay suficientes datos históricos en el servidor. La frecuencia depende del token (1h y USDT cada 3h)."
                : "There is not enough historical server data yet. Frequency depends on token (1h and USDT every 3h)."}
            </p>
          )}
        </div>
      ) : null}

      {updatedAt && (
        <p className="mt-3 text-[11px] text-zinc-500 dark:text-zinc-400">
          {isEs ? "Última actualización:" : "Last update:"}{" "}
          {new Date(updatedAt).toLocaleTimeString(locale === "es" ? "es-MX" : "en-US")}
        </p>
      )}
    </div>
  );
}
