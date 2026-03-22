"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Blocks, FileText, FolderGit2, Home, UserRound } from "lucide-react";
import { useTranslations } from "next-intl";

import { BlogControls } from "@/components/common/blog-controls";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
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
  const [mobileOpen, setMobileOpen] = useState(false);
  const navLabel = (labelKey: NavItem["labelKey"], mobile: boolean) => {
    if (labelKey !== "web3") return t(labelKey);
    return mobile ? t("web3Mobile") : t("web3Desktop");
  };
  const navSubtitle = (item: NavItem) => {
    if (item.href === "/") return "/home";
    return item.href;
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
          className="truncate rounded-xl px-2 py-1 text-sm font-semibold tracking-tight transition-opacity hover:opacity-90 sm:hidden"
        >
          <span className="bg-gradient-to-b from-foreground to-zinc-500 bg-clip-text text-transparent">
            Donovan Riaño
          </span>
        </Link>

        <div className="flex shrink-0 items-center gap-1">
          <BlogControls />
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "sm:hidden h-9 w-9 rounded-xl border shadow-sm backdrop-blur-md",
                  "border-zinc-300/70 bg-white/75 text-zinc-700 hover:bg-white dark:border-zinc-700/70 dark:bg-zinc-900/65 dark:text-zinc-200 dark:hover:bg-zinc-800/80",
                )}
                aria-label="Open docs navigation"
              >
                <FileText className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full max-w-full border-none bg-black/95 p-0 text-zinc-100 backdrop-blur-xl dark:bg-zinc-950/95"
            >
              <div className="flex h-full flex-col px-4 pt-14">
                <div className="mb-5 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.22em] text-zinc-400">Docs</p>
                  <p className="mt-1 text-sm font-medium text-zinc-100">{t("brand")}</p>
                </div>
                <nav className="grid grid-cols-2 gap-3">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    const active = item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);

                    return (
                      <Link
                        key={`mobile-${item.href}`}
                        href={item.href}
                        prefetch
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          "flex flex-col items-center justify-center gap-1.5 rounded-2xl border px-4 py-4 transition-colors",
                          active
                            ? "border-violet-400/50 bg-violet-500/15 text-white"
                            : "border-zinc-800 bg-zinc-900/40 text-zinc-300 hover:border-zinc-700 hover:text-white",
                        )}
                      >
                        <Icon className="h-5 w-5" />
                        <span className="text-sm font-medium">{navLabel(item.labelKey, true)}</span>
                        <span className="text-[11px] text-zinc-500">{navSubtitle(item)}</span>
                      </Link>
                    );
                  })}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </div>
  );
}
