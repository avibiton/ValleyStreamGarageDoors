import Link from "next/link";
import { BUSINESS } from "@/lib/constants";

interface TopBarProps {
  message?: string;
}

export function TopBar({ message }: TopBarProps) {
  return (
    <div className="bg-brand-dark text-white text-center text-xs sm:text-sm py-2 px-4 border-b border-brand-gold/20">
      <span className="font-semibold">
        ⚡ {message ?? "24/7 Same-Day Service"}&nbsp;&nbsp;·&nbsp;&nbsp;Valley Stream &amp; Five Towns Nassau County&nbsp;&nbsp;·&nbsp;&nbsp;
      </span>
      <Link
        href={BUSINESS.phoneHref}
        className="text-brand-gold font-bold hover:underline"
      >
        Call {BUSINESS.phone}
      </Link>
    </div>
  );
}
