import { cookies } from "next/headers";
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

  return "es";
}

