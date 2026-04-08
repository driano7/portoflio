"use client";

import { LanguageSwitcher } from "@/components/common/language-switcher";
import { MarketTickerToggle } from "@/components/common/market-ticker-toggle";
import { ThemeSwitcher } from "@/components/theme-switcher";

export function BlogControls() {
  return (
    // Reusable header controls stay centralized so locale/theme/market features remain consistent.
    <div className="flex items-center gap-1">
      <MarketTickerToggle />
      <LanguageSwitcher />
      <ThemeSwitcher />
    </div>
  );
}
