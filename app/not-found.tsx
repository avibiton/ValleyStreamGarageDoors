import Link from "next/link";
import { BUSINESS } from "@/lib/constants";

export default function NotFound() {
  return (
    <section className="bg-brand-dark min-h-[60vh] flex items-center justify-center py-20 px-4">
      <div className="text-center max-w-xl">
        <p className="eyebrow mb-2">404 — Page Not Found</p>
        <h1 className="font-display font-black text-4xl sm:text-5xl text-white uppercase tracking-wide mb-4">
          This Page Doesn&apos;t Exist
        </h1>
        <div className="brand-divider mx-auto mb-6" />
        <p className="text-gray-400 text-sm sm:text-base mb-8">
          The page you&apos;re looking for has moved or doesn&apos;t exist. If your garage door is the emergency,
          call us directly — a real technician answers.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href={BUSINESS.phoneHref}
            className="inline-block bg-brand-red text-white font-display font-bold uppercase tracking-wider text-sm px-6 py-3 rounded hover:bg-brand-red-dark transition-colors"
          >
            Call {BUSINESS.phone}
          </Link>
          <Link
            href="/"
            className="inline-block border border-brand-gold text-brand-gold font-display font-bold uppercase tracking-wider text-sm px-6 py-3 rounded hover:bg-brand-gold hover:text-brand-black transition-colors"
          >
            Back to Homepage
          </Link>
        </div>
        <nav className="mt-10">
          <p className="text-gray-500 text-xs uppercase tracking-wider font-display font-bold mb-3">Quick Links</p>
          <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs">
            {[
              { href: "/repair/", label: "Garage Door Repair" },
              { href: "/garage-door-opener/", label: "Opener Service" },
              { href: "/installation/", label: "New Door Installation" },
              { href: "/faq/", label: "FAQ & Coupons" },
              { href: "/valley-stream/", label: "Valley Stream" },
              { href: "/woodmere/", label: "Woodmere" },
              { href: "/cedarhurst/", label: "Cedarhurst" },
              { href: "/hewlett/", label: "Hewlett" },
              { href: "/inwood/", label: "Inwood" },
              { href: "/lawrence/", label: "Lawrence" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="text-gray-400 hover:text-brand-gold transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
