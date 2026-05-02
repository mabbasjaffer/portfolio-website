"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function Home() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch: resolvedTheme is undefined during SSR.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col justify-center px-6 py-24">
      <div className="space-y-6">
        <p className="text-muted font-mono text-xs tracking-wider uppercase">
          Scaffold check · step 1 of 11
        </p>
        <h1 className="text-4xl font-medium tracking-tight">abbasjaffer.com</h1>
        <p className="text-muted max-w-prose text-base leading-relaxed">
          Next.js, TypeScript, Tailwind v4, Geist sans/mono, and dark mode are
          wired up. The real homepage gets built in step 4.
        </p>

        <div className="flex items-center gap-3 pt-2">
          <button
            type="button"
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            className="border-border hover:bg-foreground/5 inline-flex items-center gap-2 rounded-md border px-3 py-1.5 font-mono text-xs transition-colors"
            aria-label="Toggle theme"
          >
            {mounted && resolvedTheme === "dark" ? (
              <Sun className="size-3.5" aria-hidden />
            ) : (
              <Moon className="size-3.5" aria-hidden />
            )}
            <span>{mounted ? `theme: ${theme}` : "theme: …"}</span>
          </button>
        </div>

        <dl className="grid grid-cols-2 gap-x-6 gap-y-2 pt-8 font-mono text-xs">
          <dt className="text-muted">framework</dt>
          <dd>Next.js (App Router)</dd>
          <dt className="text-muted">styling</dt>
          <dd>Tailwind v4</dd>
          <dt className="text-muted">fonts</dt>
          <dd>Geist Sans / Geist Mono</dd>
          <dt className="text-muted">theme</dt>
          <dd>next-themes (system default)</dd>
        </dl>
      </div>
    </main>
  );
}
