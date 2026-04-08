"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme()
  const [burstKey, setBurstKey] = React.useState(0)

  const handleToggleTheme = () => {
    const nextTheme = resolvedTheme === "light" ? "dark" : "light"
    const applyTheme = () => setTheme(nextTheme)

    // Reusable motion boundary: keep this UX treatment in the shared shell, not in page-level content.
    if (
      typeof document !== "undefined" &&
      typeof window !== "undefined" &&
      "startViewTransition" in document &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      ;(document as Document & {
        startViewTransition: (cb: () => void) => { finished: Promise<void> };
      }).startViewTransition(() => {
        applyTheme()
      })
    } else {
      applyTheme()
    }

    setBurstKey((key) => key + 1)
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleToggleTheme}
      className="no-frosted group relative overflow-hidden rounded-full border border-violet-400/35 bg-zinc-900/60 px-3 text-zinc-100 transition-transform duration-200 hover:scale-105 hover:border-violet-300/60 active:scale-95 dark:bg-zinc-950/70"
      aria-label="Toggle theme"
    >
      <span className="pointer-events-none absolute inset-0 theme-toggle-gradient" aria-hidden />
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden />
      <span key={burstKey} className="pointer-events-none absolute inset-0 theme-burst" aria-hidden />

      <span className="relative inline-flex items-center gap-2">
        {resolvedTheme === "light" ? (
          <span className="inline-flex theme-icon-in">
            <Sun className="h-[1.1rem] w-[1.1rem] text-violet-400" />
          </span>
        ) : (
          <span className="inline-flex theme-icon-in">
            <Moon className="h-[1.1rem] w-[1.1rem] text-violet-300" />
          </span>
        )}
      </span>
    </Button>
  )
}
