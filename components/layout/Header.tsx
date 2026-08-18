import Link from "next/link";
import { NAV_LINKS, BUSINESS } from "@/lib/constants";
import { MobileNav } from "./MobileNav";
import { NavLink } from "./NavLink";

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-brand-black shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 relative">
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-display font-black text-lg sm:text-xl text-white uppercase tracking-wide">
            One Stop <span className="text-brand-red">Garage Door</span>
          </span>
          <span className="text-brand-gold text-[10px] sm:text-xs font-semibold tracking-wide">
            Valley Stream &amp; Five Towns · Nassau County NY
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}
          <Link
            href={BUSINESS.phoneHref}
            className="ml-2 flex items-center gap-1.5 bg-brand-red text-white font-display font-bold uppercase text-sm tracking-wide px-4 py-2 rounded hover:bg-brand-red-dark transition-colors"
          >
            📞 Call Now
          </Link>
        </nav>

        <MobileNav />
      </div>
    </header>
  );
}
