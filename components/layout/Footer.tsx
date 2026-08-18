import Link from "next/link";
import { BUSINESS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-brand-black text-gray-400 pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10">
          <div>
            <h4 className="text-white font-display font-bold text-base uppercase tracking-wide mb-3">
              One Stop Garage Door &amp; Opener
            </h4>
            <p className="text-sm leading-relaxed mb-4">
              Professional garage door repair, spring replacement, opener installation &amp; new doors throughout Valley Stream NY and all Five Towns, Nassau County.
            </p>
            <Link
              href={BUSINESS.phoneHref}
              className="inline-block text-brand-gold font-display font-bold text-lg hover:text-white transition-colors"
            >
              📞 {BUSINESS.phone}
            </Link>
          </div>

          <div>
            <h4 className="text-white font-display font-bold text-base uppercase tracking-wide mb-3">
              Services
            </h4>
            <ul className="space-y-1.5 text-sm">
              <li><Link href="/repair/" className="hover:text-white transition-colors">Garage Door Repair</Link></li>
              <li><Link href="/garage-door-opener/" className="hover:text-white transition-colors">Opener Service</Link></li>
              <li><Link href="/installation/" className="hover:text-white transition-colors">New Door Install</Link></li>
              <li><Link href="/faq/" className="hover:text-white transition-colors">FAQ &amp; Coupons</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-bold text-base uppercase tracking-wide mb-3">
              Five Towns
            </h4>
            <ul className="space-y-1.5 text-sm">
              <li><Link href="/valley-stream/" className="hover:text-white transition-colors">Valley Stream</Link></li>
              <li><Link href="/woodmere/" className="hover:text-white transition-colors">Woodmere</Link></li>
              <li><Link href="/hewlett/" className="hover:text-white transition-colors">Hewlett</Link></li>
              <li><Link href="/cedarhurst/" className="hover:text-white transition-colors">Cedarhurst</Link></li>
              <li><Link href="/lawrence/" className="hover:text-white transition-colors">Lawrence</Link></li>
              <li><Link href="/inwood/" className="hover:text-white transition-colors">Inwood</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-xs text-gray-600 text-center space-y-1">
          <p>
            © 2026 One Stop Garage Door &amp; Opener · Since {BUSINESS.since} · Nassau County HIC Licensed &amp; Insured · LiftMaster Authorized Dealer · {BUSINESS.domain} · (516) 612-6706
          </p>
          <p>
            W Hawthorne Ave, Valley Stream NY 11580 · Serving Long Island NY and Five Towns Nassau County · Valley Stream 11580 11581 · Woodmere 11598 · Hewlett 11557 · Cedarhurst 11516 · Lawrence 11559 · Inwood 11096
          </p>
        </div>
      </div>
    </footer>
  );
}
