import type { MetadataRoute } from "next";
import { BUSINESS } from "@/lib/constants";

const base = BUSINESS.baseUrl;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/repair/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/garage-door-opener/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/installation/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/faq/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/valley-stream/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/woodmere/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/cedarhurst/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/hewlett/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/inwood/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/lawrence/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
  ];
}
