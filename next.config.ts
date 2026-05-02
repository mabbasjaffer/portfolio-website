import type { NextConfig } from "next";

// Static export when building on Cloudflare Pages. CF_PAGES is set in the
// Pages build environment. We'll switch to @opennextjs/cloudflare (Workers)
// in step 7 when we add middleware for password-protected case studies.
const isCloudflarePages = process.env.CF_PAGES === "1";

const nextConfig: NextConfig = {
  ...(isCloudflarePages && {
    output: "export",
    images: { unoptimized: true },
    trailingSlash: true,
  }),
};

export default nextConfig;
