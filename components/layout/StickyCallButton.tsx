import Link from "next/link";
import { BUSINESS } from "@/lib/constants";

interface StickyCallButtonProps {
  label?: string;
  sublabel?: string;
}

export function StickyCallButton({
  label = "Free Estimate",
  sublabel = "Call 24/7",
}: StickyCallButtonProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="bg-brand-black border-t border-brand-red/30 px-4 py-2.5 flex items-center justify-between gap-4">
        <div className="flex flex-col leading-tight">
          <span className="text-brand-gold text-xs font-semibold">{label}</span>
          <strong className="text-white text-xs">{sublabel}</strong>
        </div>
        <Link
          href={BUSINESS.phoneHref}
          className="flex items-center gap-2 bg-brand-red text-white font-display font-bold uppercase text-sm tracking-wide px-5 py-2.5 rounded hover:bg-brand-red-dark transition-colors whitespace-nowrap"
        >
          📞 CALL NOW
        </Link>
      </div>
    </div>
  );
}
