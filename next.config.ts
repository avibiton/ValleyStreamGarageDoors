import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // All internal links, canonicals and the sitemap use trailing slashes (e.g. /repair/),
  // so serve those URLs directly instead of 308-redirecting them to /repair.
  trailingSlash: true,
};

export default nextConfig;
