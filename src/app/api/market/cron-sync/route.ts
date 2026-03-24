import { NextRequest, NextResponse } from "next/server";

import { updateMarketHistory } from "@/lib/market-history";
import { fetchLatestMarketTokens } from "@/lib/market-tokens";

export const dynamic = "force-dynamic";
export const revalidate = 0;

function isAuthorized(request: NextRequest, expectedSecret: string) {
  const normalize = (value: string) => value.trim().replace(/^['"]|['"]$/g, "");

  const authHeader = request.headers.get("authorization") ?? "";
  const bearerMatch = authHeader.match(/^Bearer\s+(.+)$/i);
  const bearer = bearerMatch ? normalize(bearerMatch[1]) : "";
  const queryTokenRaw = request.nextUrl.searchParams.get("token") ?? "";
  const queryToken = normalize(queryTokenRaw).replace(/ /g, "+");
  const expected = normalize(expectedSecret);

  return bearer === expected || queryToken === expected;
}

export async function GET(request: NextRequest) {
  const apiKey =
    process.env.COINMARKETCAP_API_KEY ||
    process.env.CMC_API_KEY ||
    process.env.NEXT_PUBLIC_COINMARKETCAP_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "CoinMarketCap API key is not configured." },
      { status: 500 },
    );
  }

  const cronSecret = (process.env.MARKET_CRON_SECRET ?? "").trim();
  if (!cronSecret) {
    return NextResponse.json(
      { error: "MARKET_CRON_SECRET is not configured." },
      { status: 500 },
    );
  }

  if (!isAuthorized(request, cronSecret)) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  try {
    const tokens = await fetchLatestMarketTokens(apiKey);
    updateMarketHistory(tokens);

    return NextResponse.json({
      ok: true,
      storedAt: new Date().toISOString(),
      symbols: tokens.map((token) => token.symbol),
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown scheduler error";
    return NextResponse.json(
      { error: "Unable to sync market history.", details: message },
      { status: 503 },
    );
  }
}
