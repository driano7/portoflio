"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { useLocale } from "next-intl";

import type { AppLocale } from "@/i18n/routing";

type MarketToken = {
  symbol: string;
  priceUsd: number | null;
  change24h: number | null;
};

type MarketResponse = {
  updatedAt?: string;
  tokens?: MarketToken[];
  error?: string;
};

const REFRESH_INTERVAL_MS = 5 * 60 * 1000;

function formatUsd(value: number | null) {
  if (value === null) return "--";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: value >= 1 ? 2 : 6,
  }).format(value);
}

function formatPercent(value: number | null) {
  if (value === null) return "--";
  const formatted = Math.abs(value).toFixed(2);
  return `${value >= 0 ? "+" : "-"}${formatted}%`;
}

export function DefiMarketTicker() {
  const locale = useLocale() as AppLocale;
  const isEs = locale === "es";
  const [tokens, setTokens] = useState<MarketToken[]>([]);
  const [updatedAt, setUpdatedAt] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

  return (
    <div className="rounded-2xl border border-violet-300/35 bg-white/80 p-4 dark:border-violet-500/25 dark:bg-zinc-900/70">
      <div className="mb-3">
        <div>
          <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            {isEs ? "Snapshot DeFi en tiempo real" : "Real-time DeFi snapshot"}
          </p>
          <p className="text-xs text-zinc-600 dark:text-zinc-400">{subtitle}</p>
        </div>
      </div>

      {loading ? (
        <p className="text-sm text-zinc-600 dark:text-zinc-400">{isEs ? "Cargando mercado..." : "Loading market..."}</p>
      ) : error ? (
        <p className="text-sm text-red-500 dark:text-red-400">
          {isEs ? "No se pudo cargar el mercado:" : "Unable to load market:"} {error}
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
          {tokens.map((token) => {
            const up = (token.change24h ?? 0) >= 0;
            return (
              <div
                key={token.symbol}
                className="rounded-xl border border-zinc-300/80 bg-white/70 px-3 py-2 dark:border-zinc-700 dark:bg-zinc-950/50"
              >
                <p className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">{token.symbol}</p>
                <p className="mt-1 text-sm font-bold text-zinc-900 dark:text-zinc-100">{formatUsd(token.priceUsd)}</p>
                <p className={`mt-1 inline-flex items-center gap-1 text-xs font-medium ${up ? "text-emerald-600 dark:text-emerald-400" : "text-red-600 dark:text-red-400"}`}>
                  {up ? <ArrowUpRight className="h-3.5 w-3.5" /> : <ArrowDownRight className="h-3.5 w-3.5" />}
                  {formatPercent(token.change24h)}
                </p>
              </div>
            );
          })}
        </div>
      )}

      {updatedAt && (
        <p className="mt-3 text-[11px] text-zinc-500 dark:text-zinc-400">
          {isEs ? "Última actualización:" : "Last update:"}{" "}
          {new Date(updatedAt).toLocaleTimeString(locale === "es" ? "es-MX" : "en-US")}
        </p>
      )}
    </div>
  );
}
