export const DEFAULT_SYMBOLS = ["BTC", "ETH", "SOL", "XRP", "USDT", "BNB"] as const;

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

export type MarketToken = {
  symbol: string;
  priceUsd: number | null;
  change24h: number | null;
  hasChartData?: boolean;
};

export async function fetchLatestMarketTokens(apiKey: string): Promise<MarketToken[]> {
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
      throw new Error(`CoinMarketCap request failed (${response.status}): ${bodyText.slice(0, 300)}`);
    }

    const payload = (await response.json()) as CmcResponse;
    const data = payload.data ?? {};

    return DEFAULT_SYMBOLS.map((symbol) => {
      const asset = data[symbol];
      const usd = asset?.quote?.USD;
      return {
        symbol,
        priceUsd: typeof usd?.price === "number" ? usd.price : null,
        change24h: typeof usd?.percent_change_24h === "number" ? usd.percent_change_24h : null,
      };
    });
  } finally {
    clearTimeout(timeout);
  }
}
