import { NextRequest, NextResponse } from "next/server";

import type { ChartPoint } from "@/lib/market-history";
import { getMarketChartPoints } from "@/lib/market-history";
import { fetchLatestMarketTokens } from "@/lib/market-tokens";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const ALLOWED_SYMBOLS = new Set(["BTC", "ETH", "SOL", "XRP", "USDT", "BNB"]);

function buildEstimated24hPoints(currentPrice: number, change24h: number, now = new Date()): ChartPoint[] {
  const denominator = 1 + change24h / 100;
  const safeDenominator = Number.isFinite(denominator) && Math.abs(denominator) > 1e-6 ? denominator : 1;
  const startPrice = currentPrice / safeDenominator;
  const endPrice = currentPrice;
  const points: ChartPoint[] = [];

  for (let i = 0; i < 24; i += 1) {
    const weight = i / 23;
    const priceUsd = startPrice + (endPrice - startPrice) * weight;
    const time = new Date(now.getTime() - (23 - i) * 60 * 60 * 1000).toISOString();
    points.push({
      time,
      priceUsd: Number(priceUsd.toFixed(8)),
    });
  }

  return points;
}

export async function GET(request: NextRequest) {
  const symbol = request.nextUrl.searchParams.get("symbol")?.toUpperCase() ?? "";
  if (!ALLOWED_SYMBOLS.has(symbol)) {
    return NextResponse.json({ error: "Unsupported symbol." }, { status: 400 });
  }

  const points = getMarketChartPoints(symbol);
  if (points.length >= 2) {
    return NextResponse.json({
      symbol,
      points,
      source: "stored_history",
      updatedAt: new Date().toISOString(),
    });
  }

  const apiKey =
    process.env.COINMARKETCAP_API_KEY ||
    process.env.CMC_API_KEY ||
    process.env.NEXT_PUBLIC_COINMARKETCAP_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "Not enough stored data yet. Hourly points are collected and a daily cut is generated at 15:00 (America/Mexico_City).",
      },
      { status: 404 },
    );
  }

  try {
    const latest = await fetchLatestMarketTokens(apiKey);
    const token = latest.find((item) => item.symbol.toUpperCase() === symbol);

    if (typeof token?.priceUsd === "number" && typeof token?.change24h === "number") {
      return NextResponse.json({
        symbol,
        points: buildEstimated24hPoints(token.priceUsd, token.change24h),
        source: "estimated_from_24h_change",
        warning:
          "Using estimated 24h curve (from current price and 24h variation) while stored hourly history is still insufficient.",
        updatedAt: new Date().toISOString(),
      });
    }
  } catch {
    // Keep fallback behavior below when estimation cannot be generated.
  }

  return NextResponse.json(
    {
      error:
        "Not enough stored data yet. Hourly points are collected and a daily cut is generated at 15:00 (America/Mexico_City).",
    },
    { status: 404 },
  );
}
