import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { baseFontVariables } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Abbas Jaffer",
    template: "%s — Abbas Jaffer",
  },
  description:
    "Sr. Staff Design Researcher working on global payments, fintech, and the people behind them.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-accent="indigo"
      data-serif="newsreader"
      className={baseFontVariables}
    >
      <body className="bg-background text-foreground min-h-screen antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
