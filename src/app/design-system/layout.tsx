import { notFound } from "next/navigation";
import { sourceSerif, fraunces } from "@/lib/fonts";

/**
 * /design-system is a development-only preview route.
 * In production it 404s unless `SHOW_DESIGN_SYSTEM=true` is set.
 *
 * The two extra serif candidates (Source Serif 4, Fraunces) are imported
 * here — only this route bundle pays for their weight. Newsreader is loaded
 * sitewide as the default.
 */
export default function DesignSystemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isProd = process.env.NODE_ENV === "production";
  const allow = process.env.SHOW_DESIGN_SYSTEM === "true";
  if (isProd && !allow) {
    notFound();
  }

  return (
    <div className={`${sourceSerif.variable} ${fraunces.variable}`}>
      {children}
    </div>
  );
}
