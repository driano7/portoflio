"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Blocks, FolderGit2, Home, UserRound } from "lucide-react";
import { useTranslations } from "next-intl";

import { BlogControls } from "@/components/common/blog-controls";
import { cn } from "@/lib/utils";

type SiteHeaderProps = {
  className?: string;
};

type NavItem = {
  href: string;
  labelKey: "home" | "about" | "web3" | "projects";
  icon: typeof Home;
};

const navItems: NavItem[] = [
  { href: "/", labelKey: "home", icon: Home },
  { href: "/about", labelKey: "about", icon: UserRound },
  { href: "/web3", labelKey: "web3", icon: Blocks },
  { href: "/projects", labelKey: "projects", icon: FolderGit2 },
];

export function SiteHeader({ className }: SiteHeaderProps) {
  const pathname = usePathname();
  const t = useTranslations("nav");
  const isHome = pathname === "/";
  const navLabel = (labelKey: NavItem["labelKey"], mobile: boolean) => {
    if (labelKey !== "web3") return t(labelKey);
    return mobile ? t("web3Mobile") : t("web3Desktop");
  };

  return (
    <div className={cn("pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-4 sm:px-6", className)}>
      <header
        className={cn(
          "pointer-events-auto relative flex w-full max-w-6xl items-center justify-between gap-3 rounded-3xl border px-3 py-2 shadow-2xl backdrop-blur-md sm:justify-end",
          "border-black/5 bg-white/80 text-zinc-900 dark:border-white/10 dark:bg-black/60 dark:text-zinc-100",
        )}
      >
        <nav className="hidden items-center justify-center gap-1 sm:absolute sm:left-1/2 sm:flex sm:-translate-x-1/2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                prefetch
                className={cn(
                  "inline-flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-medium transition-colors",
                  active
                    ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                    : "text-zinc-600 hover:bg-zinc-200/70 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white",
                )}
              >
                <Icon className="h-4 w-4" />
                <span>{navLabel(item.labelKey, false)}</span>
              </Link>
            );
          })}
        </nav>

        <Link
          href="/"
          prefetch
          aria-label={t("home")}
          className="inline-flex items-center gap-1.5 truncate rounded-xl px-2 py-1 text-sm font-semibold tracking-tight transition-opacity hover:opacity-90 sm:hidden"
        >
          {!isHome ? <Home className="h-3.5 w-3.5 text-zinc-500 dark:text-zinc-400" /> : null}
          <span className="bg-gradient-to-b from-foreground to-zinc-500 bg-clip-text text-transparent">
            <span className="underline decoration-zinc-500/70 underline-offset-4">Donovan Riaño</span>
          </span>
        </Link>

        <div className="flex shrink-0 items-center gap-1">
          <BlogControls />
        </div>
      </header>
    </div>
  );
}
