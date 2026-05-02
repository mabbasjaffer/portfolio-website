import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Newsreader, Source_Serif_4, Fraunces } from "next/font/google";

export const geistSans = GeistSans;
export const geistMono = GeistMono;

// All three serifs are self-hosted at build time by next/font/google.
// Only the default (newsreader) is loaded sitewide via the root layout.
// `sourceSerif` and `fraunces` are imported only by /design-system so the
// comparison page stays the only route that pays for the extra weight.

export const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  axes: ["opsz"],
});

export const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});

export const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

export const baseFontVariables = [
  geistSans.variable,
  geistMono.variable,
  newsreader.variable,
].join(" ");
