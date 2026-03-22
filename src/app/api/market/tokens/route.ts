import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const DEFAULT_SYMBOLS = ["BTC", "ETH", "SOL", "XRP", "USDT"];

type CmcAsset = {
  symbol: string;
  quote?: {
    USD?: {
      price?: number;
      percent_change_24h?: number;
    };
  };
};

type CmcResponse = {
  data?: Record<string, CmcAsset>;
};

export async function GET() {
  const apiKey = process.env.COINMARKETCAP_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "COINMARKETCAP_API_KEY is not configured." },
      { status: 500 },
    );
  }

  const url = new URL("https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest");
  url.searchParams.set("symbol", DEFAULT_SYMBOLS.join(","));
  url.searchParams.set("convert", "USD");

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 9000);

  try {
    const response = await fetch(url.toString(), {
      method: "GET",
      headers: {
        Accept: "application/json",
        "X-CMC_PRO_API_KEY": apiKey,
      },
      cache: "no-store",
      signal: controller.signal,
    });

    if (!response.ok) {
      const bodyText = await response.text();
      return NextResponse.json(
        { error: "CoinMarketCap request failed.", status: response.status, details: bodyText.slice(0, 300) },
        { status: response.status },
      );
    }

    const payload = (await response.json()) as CmcResponse;
    const data = payload.data ?? {};

    const tokens = DEFAULT_SYMBOLS.map((symbol) => {
      const asset = data[symbol];
      const usd = asset?.quote?.USD;
      return {
        symbol,
        priceUsd: typeof usd?.price === "number" ? usd.price : null,
        change24h: typeof usd?.percent_change_24h === "number" ? usd.percent_change_24h : null,
      };
    });

    return NextResponse.json({
      updatedAt: new Date().toISOString(),
      currency: "USD",
      tokens,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown market error";
    return NextResponse.json({ error: "Unable to fetch market data.", details: message }, { status: 503 });
  } finally {
    clearTimeout(timeout);
  }
}
