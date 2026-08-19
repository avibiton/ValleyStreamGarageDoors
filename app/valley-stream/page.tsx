import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS, SERVICE_AREAS } from "@/lib/constants";
import { COUPONS } from "@/data/coupons";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/sections/PageHero";
import { TrustBar } from "@/components/sections/TrustBar";
import { CTASection } from "@/components/sections/CTASection";
import { FAQAccordion } from "@/components/faq/FAQAccordion";
import { PricingTable } from "@/components/ui/PricingTable";
import { PartsTags } from "@/components/ui/PartsTags";
import { WarningBox } from "@/components/ui/WarningBox";
import { HighlightBox } from "@/components/ui/HighlightBox";
import { CouponCard } from "@/components/cards/CouponCard";

export const metadata: Metadata = {
  title: `Garage Door Repair Valley Stream NY 11580 | One Stop Garage Door | ${BUSINESS.phone}`,
  description:
    "Same-day garage door repair in Valley Stream NY 11580 11581. One Stop Garage Door & Opener — springs, cables, openers, new doors. Free estimate. Call (516) 612-6706.",
  alternates: { canonical: `${BUSINESS.baseUrl}/valley-stream/` },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Garage Door Repair Valley Stream NY",
  provider: {
    "@type": "LocalBusiness",
    name: "One Stop Garage Door & Opener",
    telephone: BUSINESS.phone,
    "@id": `${BUSINESS.baseUrl}/#business`,
  },
  areaServed: { "@type": "City", name: "Valley Stream", addressRegion: "NY", postalCode: "11580" },
  serviceType: "Garage Door Repair",
  description:
    "Same-day garage door repair in Valley Stream NY 11580 11581. Springs, cables, openers, new doors. Free written estimate. One Stop Garage Door & Opener.",
  offers: [
    { "@type": "Offer", name: "10% OFF Spring Replacement", description: "Code SPRING10", validThrough: "2026-12-31" },
    { "@type": "Offer", name: "FREE Service Call With Repair", description: "Code FREE911", validThrough: "2026-12-31" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who repairs garage doors in Valley Stream NY?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "One Stop Garage Door & Opener provides same-day garage door repair throughout Valley Stream NY 11580, 11581. Call (516) 612-6706 — a real technician answers. We arrive within 2-4 hours, evenings and weekends included.",
      },
    },
    {
      "@type": "Question",
      name: "How much does spring repair cost in Valley Stream NY?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Torsion spring replacement in Valley Stream starts from $295. Extension spring from $165. Free written estimate. Use code SPRING10 for 10% off. Call (516) 612-6706.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer same-day service in Valley Stream NY?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — One Stop Garage Door & Opener provides same-day service throughout Valley Stream NY 11580, 11581 and all Five Towns, evenings and weekends included. Free written estimate. Written warranty on every repair. Call (516) 612-6706.",
      },
    },
  ],
};

const PRICING = [
  { service: "Torsion Spring Replacement", price: "$295", warranty: "Full Written Warranty" },
  { service: "Extension Spring (Pair + Safety Cables)", price: "$165", warranty: "Full Written Warranty" },
  { service: "Broken Overhead Cable Repair", price: "$125", warranty: "Full Written Warranty" },
  { service: "Cable Drum Replacement", price: "$145", warranty: "Full Written Warranty" },
  { service: "Off-Track Garage Door Repair", price: "$85", warranty: "Full Written Warranty" },
  { service: "Nylon Roller Upgrade (per roller)", price: "$35", warranty: "Full Written Warranty" },
  { service: "Safety Sensor Repair", price: "$75–$150", warranty: "Auto-Reverse Tested" },
  { service: "New LiftMaster Opener", price: "Call", warranty: "Full Written Warranty" },
  { service: "New Door Installation (Single)", price: "From $650", warranty: "Full Written Warranty" },
  { service: "Free Written Estimate", price: "FREE", warranty: "—" },
];

const PARTS = [
  "Torsion Spring", "Extension Spring", "High-Cycle Spring 25K", "Lifting Cable",
  "Galvanized Cable", "Cable Drum", "Nylon Roller", "Vertical Track", "Track Bracket",
  "Hinge #1–#4", "Bottom Seal", "Safety Sensor", "Belt Drive Opener", "Main Drive Gear",
  "Battery Backup", "MyQ Smart Hub",
];

const FAQ = [
  {
    question: "How fast can you repair an off-track garage door in Valley Stream?",
    answer: "Same-day off-track garage door repair throughout Valley Stream NY 11580 and all Five Towns. Call (516) 612-6706 — dispatch within 2–4 hours. Written warranty on every repair.",
  },
  {
    question: "How much does torsion spring repair cost in Valley Stream NY?",
    answer: "Torsion spring replacement from $295. Extension spring from $165. Free written estimate. Use code SPRING10 for 10% off. Call (516) 612-6706.",
  },
  {
    question: "Do you carry stainless steel cables for waterfront Five Towns homes?",
    answer: "Yes — for Lawrence and Inwood waterfront properties exposed to Reynolds Channel salt air, we carry Marine-Grade 316 stainless steel cables. Galvanized steel is standard for all Valley Stream installations. Ask about upgrades at (516) 612-6706.",
  },
  {
    question: "Do you repair garage doors on weekends in Valley Stream NY?",
    answer: "Yes — One Stop Garage Door & Opener is available evenings, weekends, and holidays throughout Valley Stream and Five Towns at no extra charge. Call (516) 612-6706 any time.",
  },
  {
    question: "Is there a warranty on garage door repairs in Valley Stream NY?",
    answer: "Yes — every repair includes a full written warranty on parts and labor. We complete a 22-point safety test before leaving every job. If anything is not right after we leave, we return at no charge. Call (516) 612-6706.",
  },
];

const coupons = COUPONS.filter((c) => ["SPRING10", "NEWDOOR250", "FREE911"].includes(c.code));

export default function ValleyStreamPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      <PageHero
        badge="Same-Day Service in Valley Stream"
        h1="Garage Door Repair in Valley Stream, NY — Same Day"
        subtitle="One Stop Garage Door & Opener provides same-day torsion spring repair, off-track correction, cable drum replacement, and LiftMaster opener installation throughout Valley Stream NY (11580, 11581) and all Five Towns Nassau County."
        imageSrc="/images/hero-valley-stream.jpg"
      />

      <TrustBar
        items={[
          "⚡ Same-Day in Valley Stream",
          "📞 Real Technician Answers",
          "📝 Free Written Estimate",
          "🛡 Written Warranty",
        ]}
      />

      <section className="bg-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="eyebrow">Garage Door Service — Valley Stream NY 11580 11581</p>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-brand-black uppercase tracking-wide mb-1 leading-tight">
            One Stop Garage Door &amp; Opener —<br className="hidden sm:block" />
            Valley Stream NY Specialists
          </h2>
          <div className="brand-divider" />

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
            Valley Stream sits at the heart of Nassau County&apos;s South Shore — a dense, established suburb where
            postwar colonial, cape cod, and split-level homes built in the 1940s, 1950s, and 1960s line the
            residential streets from <strong>W Hawthorne Avenue</strong> and <strong>Fletcher Avenue</strong> through
            to the neighborhoods bordering the <strong>Belt Parkway</strong>. These homes were built in an era when
            the attached garage was the primary entrance to the house, and in 2026, that remains true — which means
            when the garage door fails, the impact is immediate and the need for same-day service is real.
          </p>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
            Valley Stream&apos;s proximity to <strong>Reynolds Channel</strong> and the broader South Shore waterway
            system means salt air is a genuine factor for hardware longevity. Standard galvanized steel lifting cables
            corrode faster here than inland Nassau County communities, and spring coil oxidation accelerates in
            properties closest to the water. One Stop Garage Door &amp; Opener carries{" "}
            <strong>galvanized steel cables</strong> as standard for all Valley Stream installations, and{" "}
            <strong>stainless steel cables</strong> for properties in the waterfront sections of Inwood and Lawrence
            where marine air exposure is highest.
          </p>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-5">
            As Nassau County&apos;s <strong>Five Towns garage door specialist</strong>, we serve Valley Stream,
            Woodmere, Hewlett, Cedarhurst, Lawrence, and Inwood with the same same-day response and free written
            estimate on every call. A real technician answers at{" "}
            <Link href={BUSINESS.phoneHref} className="font-bold text-brand-black hover:text-brand-red">
              (516) 612-6706
            </Link>{" "}
            — not a call center. We dispatch within 2–4 hours, call 30 minutes before arrival, complete a full system
            inspection, and leave only after a safety test confirms everything is working.
          </p>

          <HighlightBox heading="Valley Stream's Postwar Housing Stock:">
            The colonials, cape cods, and split-levels built throughout Valley Stream in the 1940s–1960s have garage
            hardware that in many cases has never been fully replaced. Springs, cables, drums, and rollers on these
            systems are approaching or past end-of-life simultaneously. One Stop Garage Door & Opener completes a full
            22-point inspection on every Valley Stream service call — not just the component that failed today.
          </HighlightBox>

          <h3 className="font-display font-black text-xl text-brand-black uppercase tracking-wide mt-8 mb-3">
            Common Garage Door Problems in Valley Stream NY
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            The most frequent repair calls from Valley Stream involve <strong>torsion spring failures</strong> on
            postwar colonials that have been running on original springs for decades, and{" "}
            <strong>cable failures</strong> accelerated by salt air from Reynolds Channel. Off-track doors are common
            where worn roller stems have developed play over years of heavy cycling. Safety sensor misalignment is
            frequent on older opener systems throughout the 11580 and 11581 ZIP codes.
          </p>

          <WarningBox text="STOP USING YOUR DOOR IF: You heard a loud bang, the door hangs unevenly, the opener motor runs without lifting the door, or the door is visibly off its track. Do not force an unbalanced door." />

          <h3 className="font-display font-black text-xl text-brand-black uppercase tracking-wide mt-8 mb-3">
            Spring Replacement — Valley Stream NY 11580
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Torsion spring replacement is the most common emergency repair call from Valley Stream. A spring cycling
            since the 1960s that has never been replaced is operating on a wire cross-section significantly reduced by
            decades of salt-air oxidation. Starting from $295 for torsion springs, $165 for extension springs with
            safety cables. Use code SPRING10 for 10% off.
          </p>

          <h3 className="font-display font-black text-xl text-brand-black uppercase tracking-wide mt-8 mb-3">
            Cable &amp; Off-Track Repair — Valley Stream NY
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Broken overhead cables and off-track doors are treated as structural emergencies in Valley Stream. We carry
            complete cable drum replacement kits and galvanized lifting cables on every truck. For properties closer to
            the South Shore waterways, stainless steel cables are available. Off-track repair requires full assessment
            of both tracks, all brackets, the cable drum, every hinge and roller before resetting — not just pushing
            the door back on track. Starting from $125 for cable repair, $85 for off-track correction.
          </p>

          <h3 className="font-display font-black text-xl text-brand-black uppercase tracking-wide mt-8 mb-3">
            Opener Service — Valley Stream NY 11580
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            For Valley Stream attached garages, the <strong>LiftMaster 87504 belt drive</strong> with integrated
            battery backup and MyQ smart WiFi is the right upgrade from any chain drive. Battery backup is strongly
            recommended throughout Five Towns given South Shore storm patterns. Gear and sprocket kit replacement —
            the most common opener repair — is stocked on every Valley Stream service truck. Code OPENER99 for $99 off
            a new opener.
          </p>

          <PartsTags tags={PARTS} />

          <h3 className="font-display font-black text-xl text-brand-black uppercase tracking-wide mt-10 mb-4">
            Pricing — Valley Stream NY
          </h3>
          <PricingTable rows={PRICING} />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            {coupons.map((c) => (
              <CouponCard key={c.code} coupon={c} />
            ))}
          </div>

          <h3 className="font-display font-black text-xl text-brand-black uppercase tracking-wide mt-12 mb-4">
            FAQ — Valley Stream NY Garage Door
          </h3>
          <FAQAccordion items={FAQ} />
        </div>
      </section>

      <section className="bg-brand-black py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="eyebrow-gold text-center">Also Serving</p>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-wide text-center mb-2">
            Five Towns Nassau County Service Area
          </h2>
          <div className="brand-divider-gold mx-auto mb-8" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {SERVICE_AREAS.map((area) =>
              area.href ? (
                <Link
                  key={area.city}
                  href={area.href}
                  className={`block text-center border rounded p-3 transition-all ${
                    area.city === "Valley Stream"
                      ? "border-brand-gold bg-brand-gold/10 text-brand-gold"
                      : "border-brand-gold/30 text-white hover:border-brand-gold hover:bg-white/5"
                  }`}
                >
                  <div className="font-display font-bold text-xs uppercase tracking-wide">{area.city}</div>
                  <div className="text-[10px] mt-0.5 opacity-70">{area.zip}</div>
                </Link>
              ) : (
                <div
                  key={area.city}
                  className="block text-center border border-white/10 rounded p-3 text-gray-600"
                >
                  <div className="font-display font-bold text-xs uppercase tracking-wide">{area.city}</div>
                  <div className="text-[10px] mt-0.5">{area.zip}</div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <CTASection
        heading="Same-Day Garage Door Repair in Valley Stream NY"
        subtext="One Stop Garage Door & Opener — Five Towns Nassau County — Free Written Estimate"
      />
    </>
  );
}
