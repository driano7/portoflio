"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Blocks, FolderGit2, Home, UserRound } from "lucide-react";
import { useTranslations } from "next-intl";

import { cn } from "@/lib/utils";

type MobileNavItem = {
  href: string;
  labelKey: "home" | "about" | "web3" | "projects";
  icon: typeof Home;
};

const mobileNavItems: MobileNavItem[] = [
  { href: "/", labelKey: "home", icon: Home },
  { href: "/about", labelKey: "about", icon: UserRound },
  { href: "/web3", labelKey: "web3", icon: Blocks },
  { href: "/projects", labelKey: "projects", icon: FolderGit2 },
];

export function MobileDocNav() {
  const pathname = usePathname();
  const t = useTranslations("nav");

  const navLabel = (labelKey: MobileNavItem["labelKey"]) => {
    if (labelKey !== "web3") return t(labelKey);
    return t("web3Mobile");
  };

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-[70] px-4 sm:hidden">
      <nav
        className={cn(
          "pointer-events-auto relative mx-auto flex w-full max-w-md items-center justify-between gap-2 rounded-[2rem] border px-3 py-3 shadow-2xl backdrop-blur-xl",
          "border-zinc-300/40 bg-zinc-100/70 dark:border-white/10 dark:bg-zinc-900/55",
        )}
      >
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[2rem] theme-toggle-gradient opacity-45"
        />
        {mobileNavItems.map((item) => {
          const Icon = item.icon;
          const active = item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);

          return (
            <Link
              key={`dock-${item.href}`}
              href={item.href}
              prefetch
              className="relative flex flex-1 flex-col items-center justify-center gap-1.5"
              aria-label={navLabel(item.labelKey)}
            >
              <span
                className={cn(
                  "inline-flex h-14 w-14 items-center justify-center rounded-2xl border transition-colors",
                  active
                    ? "border-violet-400/50 bg-violet-500/20 text-zinc-950 dark:text-white"
                    : "border-zinc-300/60 bg-zinc-800/90 text-zinc-100 dark:border-zinc-700/60 dark:bg-zinc-800/90",
                )}
              >
                <Icon className="h-6 w-6" />
              </span>
              <span
                className={cn(
                  "text-[10px] font-medium leading-none",
                  active ? "text-violet-700 dark:text-violet-300" : "text-zinc-600 dark:text-zinc-400",
                )}
              >
                {navLabel(item.labelKey)}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

