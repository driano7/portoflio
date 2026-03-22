import { cookies, headers } from "next/headers";
import { getLocale } from "next-intl/server";

import type { AppLocale } from "@/i18n/routing";

const validLocales: AppLocale[] = ["es", "en"];

export async function resolveAppLocale(): Promise<AppLocale> {
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get("NEXT_LOCALE")?.value;

  if (cookieLocale && validLocales.includes(cookieLocale as AppLocale)) {
    return cookieLocale as AppLocale;
  }

  const intlLocale = await getLocale();
  if (validLocales.includes(intlLocale as AppLocale)) {
    return intlLocale as AppLocale;
  }

  const requestHeaders = await headers();
  const acceptLanguage = requestHeaders.get("accept-language")?.toLowerCase().trim() ?? "";
  if (acceptLanguage.length > 0) {
    const languageTags = acceptLanguage
      .split(",")
      .map((entry) => entry.split(";")[0]?.trim())
      .filter(Boolean) as string[];

    if (languageTags.some((tag) => tag.startsWith("es"))) {
      return "es";
    }

    if (languageTags.some((tag) => tag !== "*")) {
      return "en";
    }
  }

  return "es";
}
