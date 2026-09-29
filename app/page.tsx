import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/constants";
import { JsonLd } from "@/components/seo/JsonLd";
import { TrustBar } from "@/components/sections/TrustBar";
import { CredentialBadges } from "@/components/sections/CredentialBadges";
import { CTASection } from "@/components/sections/CTASection";
import { ServiceAreaGrid } from "@/components/sections/ServiceAreaGrid";
import { ServiceCard } from "@/components/cards/ServiceCard";

export const metadata: Metadata = {
  title: `Garage Door Repair Valley Stream NY 11580 | One Stop Garage Door | ${BUSINESS.phone}`,
  description:
    "Same-day garage door repair in Valley Stream NY 11580 11581. One Stop Garage Door & Opener serves Five Towns Nassau County. Springs, cables, openers. Free estimate. Call (516) 612-6706.",
  alternates: { canonical: BUSINESS.baseUrl + "/" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "One Stop Garage Door & Opener",
  "@id": `${BUSINESS.baseUrl}/#business`,
  telephone: BUSINESS.phone,
  url: BUSINESS.baseUrl,
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.address.street,
    addressLocality: BUSINESS.address.city,
    addressRegion: BUSINESS.address.state,
    postalCode: BUSINESS.address.zip,
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: BUSINESS.geo.lat,
    longitude: BUSINESS.geo.lng,
  },
  areaServed: [
    { "@type": "City", name: "Valley Stream", addressRegion: "NY", postalCode: "11580" },
    { "@type": "City", name: "Woodmere", addressRegion: "NY", postalCode: "11598" },
    { "@type": "City", name: "Hewlett", addressRegion: "NY", postalCode: "11557" },
    { "@type": "City", name: "Cedarhurst", addressRegion: "NY", postalCode: "11516" },
    { "@type": "City", name: "Lawrence", addressRegion: "NY", postalCode: "11559" },
    { "@type": "City", name: "Inwood", addressRegion: "NY", postalCode: "11096" },
  ],
  priceRange: "$$",
  openingHours: ["Mo-Su 00:00-23:59"],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${BUSINESS.baseUrl}/` },
    { "@type": "ListItem", position: 2, name: "Repair", item: `${BUSINESS.baseUrl}/repair/` },
    { "@type": "ListItem", position: 3, name: "Openers", item: `${BUSINESS.baseUrl}/garage-door-opener/` },
    { "@type": "ListItem", position: 4, name: "Installation", item: `${BUSINESS.baseUrl}/installation/` },
    { "@type": "ListItem", position: 5, name: "FAQ", item: `${BUSINESS.baseUrl}/faq/` },
  ],
};

const PROMISES = [
  {
    icon: "📝",
    title: "Free Written Estimate",
    text: "You get a free written estimate before any work begins.",
  },
  {
    icon: "🛡",
    title: "Full Written Warranty",
    text: "Every repair includes a full written warranty on parts and labor. If anything is not right after we leave, we return at no charge.",
  },
  {
    icon: "💲",
    title: "Upfront Starting Prices",
    text: "Our starting prices are published: torsion spring replacement from $295, broken overhead cable repair from $125.",
  },
  {
    icon: "✅",
    title: "Safety Tested Before We Leave",
    text: "We complete a full system inspection and leave only after a safety test confirms everything is working.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Hero */}
      <section
        className="relative min-h-[80vh] flex items-center overflow-hidden"
        style={{
          backgroundImage: [
            "linear-gradient(to bottom, rgba(10,10,10,0.60) 0%, rgba(10,10,10,0.25) 50%, rgba(10,10,10,0.85) 100%)",
            "url('/images/hero-home.jpg')",
          ].join(", "),
          backgroundSize: "auto, cover",
          backgroundPosition: "center, center",
          backgroundRepeat: "no-repeat, no-repeat",
          backgroundColor: "#111111",
        }}
      >
        {/* Red accent bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-red" />
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-white/70 text-xs font-semibold">
                Valley Stream NY · Nassau County
              </span>
            </div>

            <h1 className="font-display font-black text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase leading-[1.05] mb-3">
              24/7 Same-Day
              <br />
              Garage Door Repair
              <span className="block text-brand-red">Valley Stream, NY</span>
            </h1>
            <div className="w-12 h-1 bg-brand-red my-4" />
            <p className="text-white/80 text-sm sm:text-base max-w-lg mb-7 leading-relaxed">
              One Stop Garage Door &amp; Opener serves Valley Stream NY 11580, 11581 and all Five Towns
              communities. Same-day torsion spring repair, off-track door correction, cable drum replacement,
              and LiftMaster opener installation. Free written estimate — 100% satisfaction guaranteed.
            </p>
            <Link
              href={BUSINESS.phoneHref}
              className="inline-flex items-center gap-3 bg-brand-red text-white font-display font-bold uppercase text-base sm:text-lg tracking-wide px-8 py-5 rounded hover:bg-brand-red-dark transition-colors shadow-xl shadow-brand-red/30"
            >
              📞 CALL {BUSINESS.phone} — FREE ESTIMATE
            </Link>
          </div>
        </div>
      </section>

      <TrustBar />
      <CredentialBadges />

      {/* About / Services */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="eyebrow">Valley Stream &amp; Five Towns — Nassau County</p>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-brand-black uppercase tracking-wide leading-tight mb-1">
            One Stop Garage Door &amp; Opener —<br className="hidden sm:block" />
            Valley Stream&apos;s Local Expert Since 2009
          </h2>
          <div className="brand-divider" />

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 max-w-4xl">
            Valley Stream sits at the heart of Nassau County&apos;s South Shore — a dense, established suburb where
            postwar colonial, cape cod, and split-level homes built in the 1940s, 1950s, and 1960s line the
            residential streets from <strong>W Hawthorne Avenue</strong> and <strong>Fletcher Avenue</strong> through
            to the neighborhoods bordering the <strong>Belt Parkway</strong>. These homes were built in an era when the
            attached garage was the primary entrance to the house, and in 2026, that remains true — which means when the
            garage door fails, the impact is immediate and the need for same-day service is real.
          </p>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 max-w-4xl">
            Valley Stream&apos;s proximity to <strong>Reynolds Channel</strong> and the broader South Shore waterway
            system means salt air is a genuine factor for hardware longevity. Standard galvanized steel lifting cables
            corrode faster here than inland Nassau County communities, and spring coil oxidation accelerates in
            properties closest to the water. One Stop Garage Door &amp; Opener carries{" "}
            <strong>galvanized steel cables</strong> as standard for all Valley Stream installations, and{" "}
            <strong>stainless steel cables</strong> for properties in the waterfront sections of Inwood and Lawrence
            where marine air exposure is highest.
          </p>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8 max-w-4xl">
            As Nassau County&apos;s <strong>Five Towns garage door specialist</strong>, we serve Valley Stream,
            Woodmere, Hewlett, Cedarhurst, Lawrence, and Inwood with the same same-day response and free written
            estimate on every call. A real technician answers at{" "}
            <Link href={BUSINESS.phoneHref} className="font-bold text-brand-black hover:text-brand-red">
              (516) 612-6706
            </Link>{" "}
            — not a call center. We dispatch within 2–4 hours, call 30 minutes before arrival, complete a full system
            inspection, and leave only after a safety test confirms everything is working.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <ServiceCard
              icon="🔴"
              name="Emergency Repair"
              description="Same-day torsion spring repair, broken overhead cable, off-track door correction throughout Valley Stream & Five Towns."
              href="/repair/"
              linkLabel="View Repair"
            />
            <ServiceCard
              icon="⚙️"
              name="Opener Service"
              description="LiftMaster belt drive, gear & sprocket kit repair, MyQ smart WiFi — Valley Stream NY 11580."
              href="/garage-door-opener/"
              linkLabel="View Openers"
            />
            <ServiceCard
              icon="🏠"
              name="New Door Install"
              description="Insulated carriage house, steel, glass & aluminum doors. Free in-home estimate. $250 off."
              href="/installation/"
              linkLabel="View Installation"
            />
            <ServiceCard
              icon="💰"
              name="FAQ & Coupons"
              description="5 active discount codes. Save up to $250 on your next Valley Stream service call."
              href="/faq/"
              linkLabel="View Coupons"
            />
          </div>
        </div>
      </section>

      <ServiceAreaGrid />

      {/* Our Promise */}
      <section className="bg-brand-light py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="eyebrow">Our Promise</p>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-brand-black uppercase tracking-wide mb-1">
            Our Promise to Every Valley Stream &amp; Five Towns Customer
          </h2>
          <div className="brand-divider" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            {PROMISES.map((item) => (
              <div key={item.title} className="bg-white rounded border-t-4 border-brand-red shadow-sm p-6">
                <div className="text-2xl mb-3" aria-hidden="true">
                  {item.icon}
                </div>
                <h3 className="font-display font-bold text-brand-black text-sm uppercase tracking-wide mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/faq/"
              className="inline-block bg-brand-black text-brand-gold font-display font-bold uppercase text-sm tracking-wide px-7 py-3.5 rounded border border-brand-gold hover:bg-brand-gold hover:text-white transition-colors"
            >
              View Full Price List
            </Link>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="eyebrow">Find Us</p>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-brand-black uppercase tracking-wide mb-2">
                Valley Stream &amp; Five Towns Service Map
              </h2>
              <div className="brand-divider" />
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                One Stop Garage Door &amp; Opener serves Valley Stream NY 11580, 11581 and all Five Towns
                communities throughout Nassau County&apos;s South Shore. We dispatch from Valley Stream and reach
                most Five Towns addresses within 2–4 hours.
              </p>
              <div className="bg-brand-light rounded p-5 mb-5 space-y-2.5 text-sm">
                <div>
                  <strong className="text-brand-black">📍 Valley Stream</strong> — W Hawthorne Ave, Valley Stream NY 11580
                </div>
                <div>
                  <strong className="text-brand-black">📞 Phone</strong> —{" "}
                  <Link href={BUSINESS.phoneHref} className="text-brand-red hover:underline font-semibold">
                    (516) 612-6706
                  </Link>
                </div>
                <div>
                  <strong className="text-brand-black">🕐 Hours</strong> — 24/7 including evenings &amp; weekends
                </div>
                <div>
                  <strong className="text-brand-black">🛡 Warranty</strong> — Written warranty on every repair
                </div>
              </div>
              <Link
                href={BUSINESS.phoneHref}
                className="block text-center bg-brand-red text-white font-display font-bold uppercase text-sm tracking-wide px-5 py-3.5 rounded hover:bg-brand-red-dark transition-colors"
              >
                📞 CALL (516) 612-6706
              </Link>
            </div>
            <div>
              <div className="rounded border-2 border-brand-red shadow-lg overflow-hidden">
                <iframe
                  src={BUSINESS.googleMapsEmbed}
                  width="100%"
                  height="380"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="One Stop Garage Door Valley Stream NY Five Towns Service Area"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        heading="Need Garage Door Repair in Valley Stream Today?"
        subtext="One Stop Garage Door & Opener — Five Towns Nassau County — Free Written Estimate"
      />
    </>
  );
}
