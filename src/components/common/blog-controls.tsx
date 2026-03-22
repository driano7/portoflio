"use client";

import { LanguageSwitcher } from "@/components/common/language-switcher";
import { ThemeSwitcher } from "@/components/theme-switcher";

export function BlogControls() {
  return (
    <div className="flex items-center gap-1">
      <LanguageSwitcher />
      <ThemeSwitcher />
    </div>
  );
}
