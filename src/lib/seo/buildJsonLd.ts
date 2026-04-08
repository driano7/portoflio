import type { SeoJsonLdInput } from "@/lib/seo/types";

export function escapeJsonLd(value: string) {
  return value.replace(/</g, "\\u003c");
}

export function serializeJsonLd(value: unknown) {
  return escapeJsonLd(JSON.stringify(value));
}

export function normalizeJsonLdInput(value: SeoJsonLdInput) {
  return Array.isArray(value) ? value : [value];
}

