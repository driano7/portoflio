import { NextRequest, NextResponse } from "next/server";

import { getMarketChartPoints } from "@/lib/market-history";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const ALLOWED_SYMBOLS = new Set(["BTC", "ETH", "SOL", "XRP", "USDT", "BNB"]);

export async function GET(request: NextRequest) {
  const symbol = request.nextUrl.searchParams.get("symbol")?.toUpperCase() ?? "";
  if (!ALLOWED_SYMBOLS.has(symbol)) {
    return NextResponse.json({ error: "Unsupported symbol." }, { status: 400 });
  }

  const points = getMarketChartPoints(symbol);
  if (points.length < 2) {
    return NextResponse.json(
      {
        error:
          "Not enough stored data yet. Hourly points are collected and a daily cut is generated at 15:00 (America/Mexico_City).",
      },
      { status: 404 },
    );
  }

  return NextResponse.json({
    symbol,
    points,
    updatedAt: new Date().toISOString(),
  });
}
