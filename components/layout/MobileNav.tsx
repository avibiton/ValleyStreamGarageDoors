"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, BUSINESS } from "@/lib/constants";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <button
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen(!open)}
        className="md:hidden flex flex-col gap-1.5 p-2 rounded focus:outline-none focus:ring-2 focus:ring-brand-red"
      >
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-200 ${open ? "rotate-45 translate-y-2" : ""}`}
        />
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-200 ${open ? "opacity-0" : ""}`}
        />
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`}
        />
      </button>

      {open && (
        <nav
          id="mobile-nav"
          className="md:hidden absolute top-full left-0 right-0 bg-brand-black border-t border-brand-red/30 z-50"
        >
          <ul className="flex flex-col py-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block px-6 py-3 font-display font-bold uppercase tracking-wide text-sm transition-colors ${
                    pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))
                      ? "text-brand-red"
                      : "text-white hover:text-brand-gold"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="px-4 py-3">
              <Link
                href={BUSINESS.phoneHref}
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 bg-brand-red text-white font-display font-bold uppercase tracking-wide text-sm px-5 py-3 rounded hover:bg-brand-red-dark transition-colors"
              >
                📞 Call {BUSINESS.phone}
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}
