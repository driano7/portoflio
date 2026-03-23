import { NextResponse } from "next/server";
import { updateMarketHistory } from "@/lib/market-history";
import { fetchLatestMarketTokens } from "@/lib/market-tokens";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  const apiKey =
    process.env.COINMARKETCAP_API_KEY ||
    process.env.CMC_API_KEY ||
    process.env.NEXT_PUBLIC_COINMARKETCAP_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "CoinMarketCap API key is not configured. Set COINMARKETCAP_API_KEY (or CMC_API_KEY) in your runtime environment.",
      },
      { status: 500 },
    );
  }

  try {
    const tokens = await fetchLatestMarketTokens(apiKey);

    updateMarketHistory(tokens);

    return NextResponse.json({
      updatedAt: new Date().toISOString(),
      currency: "USD",
      tokens,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown market error";
    return NextResponse.json({ error: "Unable to fetch market data.", details: message }, { status: 503 });
  }
}
