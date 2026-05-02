"use client";

import { useEffect, useState } from "react";

const ACCENTS = [
  { id: "indigo", label: "Deep indigo", hex: "#3D3DBC" },
  { id: "orange", label: "Burnt orange", hex: "#B5400D" },
  { id: "forest", label: "Forest green", hex: "#1E5631" },
] as const;

const SERIFS = [
  { id: "newsreader", label: "Newsreader" },
  { id: "source", label: "Source Serif 4" },
  { id: "fraunces", label: "Fraunces" },
] as const;

export function AccentPicker() {
  const [accent, setAccent] = useState<string>("indigo");
  const [serif, setSerif] = useState<string>("newsreader");

  useEffect(() => {
    document.documentElement.dataset.accent = accent;
  }, [accent]);

  useEffect(() => {
    document.documentElement.dataset.serif = serif;
  }, [serif]);

  return (
    <div className="border-border bg-background/80 sticky top-4 z-10 mb-8 flex flex-wrap items-center gap-x-6 gap-y-2 rounded-md border px-4 py-3 backdrop-blur">
      <fieldset className="flex items-center gap-3">
        <legend className="text-muted text-meta font-mono tracking-wider uppercase">
          accent
        </legend>
        <div className="flex items-center gap-2" role="radiogroup">
          {ACCENTS.map((a) => (
            <button
              key={a.id}
              type="button"
              role="radio"
              aria-checked={accent === a.id}
              onClick={() => setAccent(a.id)}
              className="border-border text-meta aria-checked:border-foreground flex items-center gap-1.5 rounded-md border px-2 py-1 transition-colors"
            >
              <span
                className="size-3 rounded-full"
                style={{ background: a.hex }}
                aria-hidden
              />
              <span>{a.label}</span>
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="flex items-center gap-3">
        <legend className="text-muted text-meta font-mono tracking-wider uppercase">
          serif
        </legend>
        <div className="flex items-center gap-2" role="radiogroup">
          {SERIFS.map((s) => (
            <button
              key={s.id}
              type="button"
              role="radio"
              aria-checked={serif === s.id}
              onClick={() => setSerif(s.id)}
              className="border-border text-meta aria-checked:border-foreground rounded-md border px-2 py-1 transition-colors"
            >
              {s.label}
            </button>
          ))}
        </div>
      </fieldset>
    </div>
  );
}
