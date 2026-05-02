import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/**
 * Long-form reading wrapper. Serif body, ~19px, generous leading, ~672px wide.
 * Used by /writing/[slug] and /work/[slug]. Headings stay in the sans display
 * face so the page feels editorial rather than uniformly serif.
 */
export function Prose({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "text-foreground text-prose font-serif leading-[1.65]",
        "[&_h1]:font-sans [&_h2]:font-sans [&_h3]:font-sans [&_h4]:font-sans",
        "[&_h1]:tracking-tight [&_h2]:tracking-tight [&_h3]:tracking-tight",
        "[&_h1]:text-h1 [&_h1]:mt-12 [&_h1]:mb-4 [&_h1]:font-medium",
        "[&_h2]:text-h2 [&_h2]:mt-12 [&_h2]:mb-3 [&_h2]:font-medium",
        "[&_h3]:text-h3 [&_h3]:mt-10 [&_h3]:mb-2 [&_h3]:font-medium",
        "[&_p]:my-5",
        "[&_a]:text-accent [&_a]:underline [&_a]:decoration-1 [&_a]:underline-offset-[3px] hover:[&_a]:decoration-2",
        "[&_blockquote]:border-border [&_blockquote]:text-muted [&_blockquote]:my-8 [&_blockquote]:border-l-2 [&_blockquote]:pl-6 [&_blockquote]:italic",
        "[&_code]:bg-subtle [&_code]:rounded [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[0.9em]",
        "[&_hr]:border-border [&_hr]:my-10",
        "[&_ol]:my-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_ul]:my-5 [&_ul]:list-disc [&_ul]:pl-6",
        "[&_li]:my-1",
        "[&_figcaption]:text-muted [&_figcaption]:text-meta [&_figcaption]:mt-2 [&_figcaption]:font-sans [&_figure]:my-8",
        className,
      )}
    >
      {children}
    </div>
  );
}
