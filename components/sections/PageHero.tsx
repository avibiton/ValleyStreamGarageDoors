import Link from "next/link";
import { BUSINESS } from "@/lib/constants";

interface PageHeroProps {
  badge: string;
  h1: string;
  subtitle: string;
  ctaLabel?: string;
}

export function PageHero({ badge, h1, subtitle, ctaLabel }: PageHeroProps) {
  return (
    <div className="bg-brand-dark text-white py-14 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-brand-red/20 border border-brand-red/40 rounded-full px-4 py-1.5 mb-5">
          <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
          <span className="font-display font-bold text-xs uppercase tracking-widest text-brand-red">
            {badge}
          </span>
        </div>
        <h1 className="font-display font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-wide leading-tight mb-4">
          {h1}
        </h1>
        <p className="text-white/80 text-sm sm:text-base max-w-2xl mx-auto mb-7 leading-relaxed">
          {subtitle}
        </p>
        <Link
          href={BUSINESS.phoneHref}
          className="inline-flex items-center gap-2 bg-brand-red text-white font-display font-bold uppercase tracking-wide text-base px-8 py-4 rounded hover:bg-brand-red-dark transition-colors shadow-lg shadow-brand-red/30"
        >
          🚨 {ctaLabel ?? `Call ${BUSINESS.phone} — Free Estimate`}
        </Link>
      </div>
    </div>
  );
}
