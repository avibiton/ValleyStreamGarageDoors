import Link from "next/link";
import { SERVICE_AREAS } from "@/lib/constants";

export function ServiceAreaGrid() {
  return (
    <section className="bg-brand-black py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="eyebrow-gold text-center">Five Towns Service Area</p>
        <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-wide text-center mb-2">
          Serving Valley Stream &amp; All Five Towns
        </h2>
        <div className="brand-divider-gold mx-auto mb-8" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {SERVICE_AREAS.map((area) =>
            area.href ? (
              <Link
                key={area.city}
                href={area.href}
                className="block text-center bg-brand-black border border-brand-gold/30 rounded p-4 text-white hover:border-brand-gold hover:bg-white/5 transition-all group"
              >
                <div className="font-display font-bold text-sm uppercase tracking-wide group-hover:text-brand-gold transition-colors">
                  {area.city}
                </div>
                <div className="text-brand-gold/70 text-xs mt-0.5">{area.zip}</div>
              </Link>
            ) : (
              <div
                key={area.city}
                className="block text-center bg-brand-black/50 border border-white/10 rounded p-4 text-gray-500"
              >
                <div className="font-display font-bold text-sm uppercase tracking-wide">
                  {area.city}
                </div>
                <div className="text-xs mt-0.5">{area.zip}</div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
