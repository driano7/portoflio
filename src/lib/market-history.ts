import fs from "node:fs";
import path from "node:path";

export type MarketTokenSnapshot = {
  symbol: string;
  priceUsd: number | null;
};

export type ChartPoint = {
  time: string;
  priceUsd: number;
};

type MarketHistoryFile = {
  version: 2;
  dailySnapshotDate: string | null;
  hourlyBySymbol: Record<string, ChartPoint[]>;
  dailySnapshotBySymbol: Record<string, ChartPoint[]>;
};

const HOURLY_KEEP = 72;
const CHART_KEEP = 24;
const MARKET_TIME_ZONE = "America/Mexico_City";
const DAILY_CUTOFF_HOUR = 15;

function createEmptyHistory(): MarketHistoryFile {
  return {
    version: 2,
    dailySnapshotDate: null,
    hourlyBySymbol: {},
    dailySnapshotBySymbol: {},
  };
}

function ensureParentDir(filePath: string) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function getStoragePath() {
  const preferred = path.join(process.cwd(), "data", "market-history.txt");
  try {
    ensureParentDir(preferred);
    fs.accessSync(path.dirname(preferred), fs.constants.W_OK);
    return preferred;
  } catch {
    return path.join("/tmp", "market-history.txt");
  }
}

function sanitizePoint(raw: unknown): ChartPoint | null {
  if (!raw || typeof raw !== "object") return null;
  const point = raw as Partial<ChartPoint>;
  if (typeof point.time !== "string") return null;
  if (typeof point.priceUsd !== "number" || !Number.isFinite(point.priceUsd)) return null;
  return { time: point.time, priceUsd: point.priceUsd };
}

function sanitizeSeries(raw: unknown, limit: number): ChartPoint[] {
  if (!Array.isArray(raw)) return [];
  return raw
    .map(sanitizePoint)
    .filter((item): item is ChartPoint => item !== null)
    .sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime())
    .slice(-limit);
}

function sanitizeMap(raw: unknown, limit: number): Record<string, ChartPoint[]> {
  if (!raw || typeof raw !== "object") return {};
  const out: Record<string, ChartPoint[]> = {};

  for (const [symbol, value] of Object.entries(raw as Record<string, unknown>)) {
    const cleaned = sanitizeSeries(value, limit);
    if (cleaned.length > 0) {
      out[symbol] = cleaned;
    }
  }

  return out;
}

function readHistory(): MarketHistoryFile {
  const storagePath = getStoragePath();
  try {
    if (!fs.existsSync(storagePath)) return createEmptyHistory();
    const raw = fs.readFileSync(storagePath, "utf8");
    const parsed = JSON.parse(raw) as Partial<MarketHistoryFile> & { version?: number };
    const hourlyBySymbol = sanitizeMap(parsed.hourlyBySymbol, HOURLY_KEEP);

    if (parsed.version !== 2) {
      return {
        version: 2,
        dailySnapshotDate: null,
        hourlyBySymbol,
        dailySnapshotBySymbol: {},
      };
    }

    return {
      version: 2,
      dailySnapshotDate:
        typeof parsed.dailySnapshotDate === "string" ? parsed.dailySnapshotDate : null,
      hourlyBySymbol,
      dailySnapshotBySymbol: sanitizeMap(parsed.dailySnapshotBySymbol, CHART_KEEP),
    };
  } catch {
    return createEmptyHistory();
  }
}

function writeHistory(history: MarketHistoryFile) {
  const storagePath = getStoragePath();
  ensureParentDir(storagePath);
  fs.writeFileSync(storagePath, JSON.stringify(history), "utf8");
}

function toHourBucket(date: Date) {
  const hour = new Date(date);
  hour.setMinutes(0, 0, 0);
  return hour.toISOString();
}

function toDateKey(date: Date) {
  return date.toISOString().slice(0, 10);
}

function toLocalParts(date: Date) {
  const formatter = new Intl.DateTimeFormat("en-CA", {
    timeZone: MARKET_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    hourCycle: "h23",
  });
  const parts = formatter.formatToParts(date);

  const year = Number(parts.find((part) => part.type === "year")?.value ?? "0");
  const month = Number(parts.find((part) => part.type === "month")?.value ?? "0");
  const day = Number(parts.find((part) => part.type === "day")?.value ?? "0");
  const hour = Number(parts.find((part) => part.type === "hour")?.value ?? "0");

  return { year, month, day, hour };
}

function formatDateKey(year: number, month: number, day: number) {
  const mm = String(month).padStart(2, "0");
  const dd = String(day).padStart(2, "0");
  return `${year}-${mm}-${dd}`;
}

function shiftDateKey(dateKey: string, deltaDays: number) {
  const [year, month, day] = dateKey.split("-").map((value) => Number(value));
  const base = new Date(Date.UTC(year, month - 1, day));
  base.setUTCDate(base.getUTCDate() + deltaDays);
  return toDateKey(base);
}

function getTodayKeyInMarketTime(date: Date) {
  const local = toLocalParts(date);
  return formatDateKey(local.year, local.month, local.day);
}

function getCycleDateKey(date: Date) {
  const local = toLocalParts(date);
  const todayKey = formatDateKey(local.year, local.month, local.day);
  if (local.hour < DAILY_CUTOFF_HOUR) {
    return shiftDateKey(todayKey, -1);
  }
  return todayKey;
}

export function updateMarketHistory(tokens: MarketTokenSnapshot[], now = new Date()) {
  const history = readHistory();
  const dayKey = history.dailySnapshotDate ? getCycleDateKey(now) : getTodayKeyInMarketTime(now);
  const hourKey = toHourBucket(now);

  if (history.dailySnapshotDate !== dayKey) {
    const snapshot: Record<string, ChartPoint[]> = {};
    for (const [symbol, series] of Object.entries(history.hourlyBySymbol)) {
      snapshot[symbol] = series.slice(-CHART_KEEP);
    }
    history.dailySnapshotBySymbol = snapshot;
    history.dailySnapshotDate = dayKey;
  }

  for (const token of tokens) {
    if (typeof token.priceUsd !== "number" || !Number.isFinite(token.priceUsd)) continue;
    const symbol = token.symbol.toUpperCase();
    const series = [...(history.hourlyBySymbol[symbol] ?? [])];
    const last = series[series.length - 1];

    if (last?.time === hourKey) {
      last.priceUsd = token.priceUsd;
    } else {
      series.push({ time: hourKey, priceUsd: token.priceUsd });
    }

    history.hourlyBySymbol[symbol] = series.slice(-HOURLY_KEEP);
  }

  writeHistory(history);
}

export function getMarketChartPoints(symbol: string, now = new Date()): ChartPoint[] {
  const history = readHistory();
  const normalized = symbol.toUpperCase();
  const dayKey = getCycleDateKey(now);

  const snapshot =
    history.dailySnapshotDate === dayKey
      ? history.dailySnapshotBySymbol[normalized] ?? []
      : [];
  if (snapshot.length >= 2) return snapshot.slice(-CHART_KEEP);

  return (history.hourlyBySymbol[normalized] ?? []).slice(-CHART_KEEP);
}
