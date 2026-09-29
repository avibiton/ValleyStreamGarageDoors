import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Links, canonicals and the sitemap all use trailing slashes (e.g. /repair/).
  trailingSlash: true,
  // Next's built-in /repair -> /repair/ redirect is a 308; the brief requires 301s,
  // so it is disabled here and done in proxy.ts instead.
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
