import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Prose } from "@/components/ui/prose";
import { Section } from "./_components/Section";
import { Swatch } from "./_components/Swatch";
import { AccentPicker } from "./_components/AccentPicker";

export const metadata: Metadata = {
  title: "Design system",
  robots: { index: false, follow: false },
};

const PROSE_SAMPLE = `Most teams treat research as a service desk. They ship a brief, you ship findings, everyone moves on. The good ones treat it as a question — a continuous practice of staying close enough to the people on the other end of the product to know when the team is wrong before they ship.`;

export default function DesignSystemPage() {
  return (
    <Container as="main" className="py-16">
      <header className="mb-12">
        <p className="text-muted text-meta font-mono tracking-wider uppercase">
          Internal · not indexed
        </p>
        <h1 className="text-display mt-2 font-medium tracking-tight">
          Design system
        </h1>
        <p className="text-muted text-small mt-4 max-w-prose">
          A live preview of every design token. Use the picker to compare the
          three accent options and three serif candidates. The choices write to
          <code className="bg-subtle mx-1 rounded px-1 font-mono text-[0.85em]">
            data-accent
          </code>
          and
          <code className="bg-subtle mx-1 rounded px-1 font-mono text-[0.85em]">
            data-serif
          </code>
          on <code className="font-mono">&lt;html&gt;</code>; once you pick, I
          set them as defaults in <code className="font-mono">layout.tsx</code>.
        </p>
      </header>

      <AccentPicker />

      <Section
        id="colors"
        title="Colors"
        caption="Paper white background, near-black ink, a single warm muted accent. Avoid neon, gradients, and shadows."
      >
        <h3 className="text-meta text-muted mb-4 font-mono tracking-wider uppercase">
          Neutrals
        </h3>
        <div className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <Swatch
            name="background"
            cssVar="--color-background"
            hexLight="#FAFAF9"
            hexDark="#0E0E10"
          />
          <Swatch
            name="foreground"
            cssVar="--color-foreground"
            hexLight="#0F0F0F"
            hexDark="#EDEDED"
          />
          <Swatch
            name="muted"
            cssVar="--color-muted"
            hexLight="#6B7280"
            hexDark="#A1A1AA"
          />
          <Swatch
            name="border"
            cssVar="--color-border"
            hexLight="#E7E5E4"
            hexDark="#27272A"
          />
        </div>

        <h3 className="text-meta text-muted mb-4 font-mono tracking-wider uppercase">
          Active accent
        </h3>
        <div className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <Swatch
            name="accent"
            cssVar="--color-accent"
            hexLight="—"
            hexDark="—"
            textOn="dark"
          />
          <Swatch
            name="accent-soft"
            cssVar="--color-accent-soft"
            hexLight="—"
            hexDark="—"
          />
        </div>

        <h3 className="text-meta text-muted mb-4 font-mono tracking-wider uppercase">
          All accent options
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <Swatch
            name="indigo"
            cssVar="--color-accent-indigo"
            hexLight="#3D3DBC"
            hexDark="#A0A6FF"
          />
          <Swatch
            name="orange"
            cssVar="--color-accent-orange"
            hexLight="#B5400D"
            hexDark="#F08A4B"
          />
          <Swatch
            name="forest"
            cssVar="--color-accent-forest"
            hexLight="#1E5631"
            hexDark="#7CC68A"
          />
        </div>
      </Section>

      <Section
        id="typography"
        title="Typography"
        caption="Geist Sans for UI and headings, Geist Mono for metadata, the chosen serif for long-form. Sparingly mono — dates, tags, stats."
      >
        <div className="space-y-6">
          <TypeRow
            token="display"
            name="display"
            className="text-display"
            sample="The headline of the home page"
          />
          <TypeRow
            token="h1"
            name="h1"
            className="text-h1"
            sample="An article title or section opener"
          />
          <TypeRow
            token="h2"
            name="h2"
            className="text-h2"
            sample="Sub-section header"
          />
          <TypeRow
            token="h3"
            name="h3"
            className="text-h3"
            sample="Tertiary header"
          />
          <TypeRow
            token="body"
            name="body (sans)"
            className="text-body"
            sample={PROSE_SAMPLE}
          />
          <TypeRow
            token="prose"
            name="prose (serif)"
            className="text-prose font-serif"
            sample={PROSE_SAMPLE}
          />
          <TypeRow
            token="small"
            name="small"
            className="text-small"
            sample="Metadata, helper text, captions."
          />
          <TypeRow
            token="meta"
            name="meta (mono)"
            className="text-meta font-mono"
            sample="2026 · 7 min read · research"
          />
        </div>

        <div className="mt-16">
          <h3 className="text-meta text-muted mb-4 font-mono tracking-wider uppercase">
            Serif comparison (live)
          </h3>
          <p className="text-muted text-small mb-6 max-w-prose">
            Same paragraph below — switch the serif in the picker above to see
            it re-rendered. Look at how each handles long-form reading, italics,
            and the {`em-dashes`}.
          </p>
          <Prose>
            <p>
              Most teams treat research as a service desk. They ship a brief,
              you ship findings, everyone moves on. The <em>good</em> ones treat
              it as a question — a continuous practice of staying close enough
              to the people on the other end of the product to know when the
              team is wrong before they ship.
            </p>
            <p>
              In Karachi, my first interviews were not about apps at all. They
              were about how a tea-stall owner reasoned about a 200-rupee note
              that he wasn&rsquo;t sure was real. That&rsquo;s the texture of
              global payments — and you don&rsquo;t hear it in a Figma file.
            </p>
          </Prose>
        </div>
      </Section>

      <Section
        id="components"
        title="Components"
        caption="The smallest set we'll use everywhere. shadcn primitives (Dialog, Popover) install on demand."
      >
        <h3 className="text-meta text-muted mb-4 font-mono tracking-wider uppercase">
          Buttons
        </h3>
        <div className="mb-10 flex flex-wrap items-center gap-3">
          <Button variant="primary">Read my writing</Button>
          <Button variant="secondary">Get in touch</Button>
          <Button variant="ghost">Skip</Button>
          <Button variant="primary" size="sm">
            Small
          </Button>
          <Button variant="secondary" size="sm">
            Small
          </Button>
        </div>

        <h3 className="text-meta text-muted mb-4 font-mono tracking-wider uppercase">
          Inline link
        </h3>
        <p className="text-body mb-10 max-w-prose">
          A regular paragraph with{" "}
          <a
            href="#"
            className="text-accent underline decoration-1 underline-offset-[3px] hover:decoration-2"
          >
            an inline link
          </a>{" "}
          that uses the active accent.
        </p>

        <h3 className="text-meta text-muted mb-4 font-mono tracking-wider uppercase">
          Container widths
        </h3>
        <div className="mb-4 space-y-3">
          <div className="border-border bg-subtle text-muted text-meta rounded border border-dashed py-3 text-center font-mono">
            content · 1200px max
          </div>
          <div className="border-border bg-subtle text-muted text-meta mx-auto max-w-[var(--width-prose)] rounded border border-dashed py-3 text-center font-mono">
            prose · 672px max
          </div>
        </div>
      </Section>

      <Section
        id="spacing"
        title="Spacing"
        caption="4px base. Tailwind's default scale. Vertical rhythm is owned by sections — no ad-hoc margins."
      >
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            ["1", "4px"],
            ["2", "8px"],
            ["4", "16px"],
            ["6", "24px"],
            ["8", "32px"],
            ["12", "48px"],
            ["16", "64px"],
            ["24", "96px"],
          ].map(([token, px]) => (
            <div key={token} className="border-border rounded border p-3">
              <div className="bg-foreground mb-2 h-1" style={{ width: px }} />
              <div className="text-meta font-mono">
                <span className="text-foreground">space-{token}</span>
                <span className="text-muted ml-2">{px}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="motion"
        title="Motion"
        caption="Restraint. <250ms. Page transitions, theme toggle, hero reveal — that's it."
      >
        <ul className="text-body text-muted max-w-prose space-y-2">
          <li>
            <span className="text-foreground">Easing:</span>{" "}
            <code className="bg-subtle font-mono text-[0.9em]">
              var(--ease-quiet)
            </code>{" "}
            — cubic-bezier(0.2, 0.8, 0.2, 1)
          </li>
          <li>
            <span className="text-foreground">Duration:</span> 150ms (UI), 220ms
            (page transitions)
          </li>
          <li>
            <span className="text-foreground">Reduced motion:</span> globally
            short-circuited via{" "}
            <code className="bg-subtle font-mono text-[0.9em]">
              prefers-reduced-motion
            </code>
          </li>
          <li>
            <span className="text-foreground">No:</span> parallax, scroll-jack,
            decorative loops, lifting card hovers, glassmorphism.
          </li>
        </ul>
      </Section>
    </Container>
  );
}

function TypeRow({
  token,
  name,
  sample,
  className,
}: {
  token: string;
  name: string;
  sample: string;
  className: string;
}) {
  return (
    <div className="border-border grid grid-cols-[180px_1fr] items-baseline gap-6 border-t pt-4">
      <div className="text-meta font-mono">
        <div className="text-foreground">{name}</div>
        <div className="text-muted">--text-{token}</div>
      </div>
      <div className={`${className} leading-snug`}>{sample}</div>
    </div>
  );
}
