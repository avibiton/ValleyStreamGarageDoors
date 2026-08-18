"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  label: string;
}

export function NavLink({ href, label }: NavLinkProps) {
  const pathname = usePathname();
  const isActive =
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={`font-display font-bold uppercase text-sm tracking-wide px-3 py-2 rounded transition-colors ${
        isActive
          ? "text-brand-red"
          : "text-white hover:text-brand-gold"
      }`}
    >
      {label}
    </Link>
  );
}
