import type { ReactNode } from "react";

export function Section({
  id,
  title,
  caption,
  children,
}: {
  id: string;
  title: string;
  caption?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="border-border border-t py-16">
      <header className="mb-10 flex items-baseline justify-between gap-6">
        <h2 className="text-h2 font-medium tracking-tight">{title}</h2>
        <a
          href={`#${id}`}
          className="text-muted text-meta font-mono tracking-wider uppercase"
        >
          §{id}
        </a>
      </header>
      {caption ? (
        <p className="text-muted text-small -mt-6 mb-10 max-w-prose">
          {caption}
        </p>
      ) : null}
      {children}
    </section>
  );
}
