import Link from "next/link";
import { BUSINESS } from "@/lib/constants";

interface CTASectionProps {
  heading: string;
  subtext?: string;
}

export function CTASection({ heading, subtext }: CTASectionProps) {
  return (
    <section className="bg-brand-red py-14 px-4 text-center text-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-wide mb-3">
          {heading}
        </h2>
        {subtext && (
          <p className="text-white/80 text-sm sm:text-base mb-6">{subtext}</p>
        )}
        <Link
          href={BUSINESS.phoneHref}
          className="inline-block font-display font-black text-2xl sm:text-3xl text-white border-2 border-white px-8 py-3 rounded hover:bg-white hover:text-brand-red transition-colors mb-4"
        >
          {BUSINESS.phone}
        </Link>
        <div className="flex flex-wrap justify-center gap-3 mt-4">
          <Link
            href={BUSINESS.phoneHref}
            className="inline-flex items-center gap-2 bg-white text-brand-red font-display font-bold uppercase text-sm tracking-wide px-6 py-3 rounded hover:bg-brand-gold hover:text-white transition-colors"
          >
            🚨 Call For Same-Day Service
          </Link>
        </div>
        <p className="text-white/60 text-xs mt-4">
          Free written estimate · Written warranty · Same-day service
        </p>
      </div>
    </section>
  );
}
