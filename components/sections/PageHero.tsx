import Link from "next/link";
import { BUSINESS } from "@/lib/constants";

interface PageHeroProps {
  badge: string;
  h1: string;
  subtitle: string;
  ctaLabel?: string;
  imageSrc?: string;
}

// Garage-door panel texture — horizontal panel lines + vertical section breaks + depth gradient
const PANEL_TEXTURE = [
  "linear-gradient(to bottom, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.25) 45%, rgba(10,10,10,0.75) 100%)",
  "repeating-linear-gradient(0deg, transparent, transparent 79px, rgba(255,255,255,0.045) 79px, rgba(255,255,255,0.045) 80px)",
  "repeating-linear-gradient(90deg, transparent, transparent 239px, rgba(255,255,255,0.025) 239px, rgba(255,255,255,0.025) 240px)",
].join(", ");

export function PageHero({ badge, h1, subtitle, ctaLabel, imageSrc }: PageHeroProps) {
  const bgImage = imageSrc
    ? [
        "linear-gradient(to bottom, rgba(10,10,10,0.60) 0%, rgba(10,10,10,0.35) 45%, rgba(10,10,10,0.80) 100%)",
        `url('${imageSrc}')`,
      ].join(", ")
    : PANEL_TEXTURE;

  return (
    <div
      className="relative text-white overflow-hidden"
      style={{
        backgroundImage: bgImage,
        backgroundSize: imageSrc ? "cover, cover" : "auto, 240px 80px, 240px 80px",
        backgroundPosition: imageSrc ? "center" : "center",
        backgroundRepeat: imageSrc ? "no-repeat" : "repeat",
        backgroundColor: "#111111",
      }}
    >
      {/* Red accent bar at bottom of hero */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-red" />

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 py-20 sm:py-24">
        <div className="inline-flex items-center gap-2 bg-brand-red/20 border border-brand-red/40 rounded-full px-4 py-1.5 mb-5">
          <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
          <span className="font-display font-bold text-xs uppercase tracking-widest text-brand-red">
            {badge}
          </span>
        </div>
        <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-wide leading-tight mb-4 drop-shadow-lg">
          {h1}
        </h1>
        <div className="w-12 h-1 bg-brand-red mx-auto mb-5" />
        <p className="text-white/85 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed drop-shadow">
          {subtitle}
        </p>
        <Link
          href={BUSINESS.phoneHref}
          className="inline-flex items-center gap-2 bg-brand-red text-white font-display font-bold uppercase tracking-wide text-base px-8 py-4 rounded hover:bg-brand-red-dark transition-colors shadow-xl shadow-brand-red/40"
        >
          🚨 {ctaLabel ?? `Call ${BUSINESS.phone} — Free Estimate`}
        </Link>
      </div>
    </div>
  );
}
