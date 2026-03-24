"use client";

import { useState } from "react";
import { ArrowDownRight, ArrowUpRight, X } from "lucide-react";
import { useLocale } from "next-intl";

import type { AppLocale } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { DefiMarketTicker } from "@/components/sections/defi-market-ticker";

export function MarketTickerToggle() {
  const locale = useLocale() as AppLocale;
  const isEs = locale === "es";
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={() => setOpen((value) => !value)}
        className="no-frosted gap-1 border-none bg-transparent px-2 text-zinc-700 hover:bg-zinc-200/70 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white"
        aria-label={isEs ? "Mostrar precios de tokens" : "Show token prices"}
      >
        <span className="inline-flex items-center">
          <ArrowUpRight className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
          <ArrowDownRight className="-ml-1 h-4 w-4 text-red-600 dark:text-red-400" />
        </span>
      </Button>

      {open ? (
        <>
          <button
            type="button"
            aria-label={isEs ? "Cerrar panel de precios" : "Close prices panel"}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[60] bg-black/48 backdrop-blur-[3px]"
          />
          <div className="fixed inset-x-2 top-[calc(env(safe-area-inset-top)+4.6rem)] z-[70] max-h-[calc(100dvh-env(safe-area-inset-top)-5.2rem)] overflow-y-auto rounded-2xl border border-black/10 bg-white p-3 shadow-2xl dark:border-white/10 dark:bg-zinc-950 sm:absolute sm:inset-x-auto sm:right-0 sm:top-[calc(100%+0.55rem)] sm:w-[min(96vw,54rem)] sm:max-h-[min(80dvh,40rem)] sm:p-4">
            <div className="mb-2 flex items-center justify-end">
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label={isEs ? "Cerrar precios" : "Close prices"}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-zinc-300/90 bg-white text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <DefiMarketTicker />
          </div>
        </>
      ) : null}
    </div>
  );
}
