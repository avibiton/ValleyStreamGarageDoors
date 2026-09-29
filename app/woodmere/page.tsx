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
  title: `Garage Door Repair Woodmere NY 11598 | One Stop Garage Door | ${BUSINESS.phone}`,
  description:
    "Same-day garage door repair in Woodmere NY 11598. One Stop Garage Door & Opener — springs, cables, openers, new doors. Free written estimate. Call (516) 612-6706.",
  alternates: { canonical: `${BUSINESS.baseUrl}/woodmere/` },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Garage Door Repair Woodmere NY",
  provider: {
    "@type": "LocalBusiness",
    name: "One Stop Garage Door & Opener",
    telephone: BUSINESS.phone,
    "@id": `${BUSINESS.baseUrl}/#business`,
  },
  areaServed: { "@type": "City", name: "Woodmere", addressRegion: "NY", postalCode: "11598" },
  serviceType: "Garage Door Repair",
  description:
    "Same-day garage door repair in Woodmere NY 11598. Springs, cables, openers, new doors. Free written estimate. One Stop Garage Door & Opener.",
  offers: [
    { "@type": "Offer", name: "10% OFF Spring Replacement", description: "Code SPRING10", validThrough: "2026-12-31" },
    { "@type": "Offer", name: "$250 OFF New Door Installation", description: "Code NEWDOOR250", validThrough: "2026-12-31" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who repairs garage doors in Woodmere NY?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "One Stop Garage Door & Opener provides same-day garage door repair throughout Woodmere NY 11598. Call (516) 612-6706 — a real technician answers. We arrive within 2-4 hours, evenings and weekends included.",
      },
    },
    {
      "@type": "Question",
      name: "How much does garage door spring repair cost in Woodmere NY?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Torsion spring replacement in Woodmere starts from $295. Extension spring from $165. Free written estimate. Use code SPRING10 for 10% off. Call (516) 612-6706.",
      },
    },
    {
      "@type": "Question",
      name: "Do you install new garage doors in Woodmere NY?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — One Stop Garage Door & Opener installs Clopay, Amarr, and Wayne Dalton doors throughout Woodmere NY 11598. Carriage-house, insulated steel, full-view glass/aluminum, and custom wood-look panel styles available. Free written estimate. Use code NEWDOOR250 for $250 off. Call (516) 612-6706.",
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
  { service: "New LiftMaster Belt Drive Opener", price: "Call", warranty: "Full Written Warranty" },
  { service: "New Carriage-House Door (Single)", price: "From $875", warranty: "Full Written Warranty" },
  { service: "New Insulated Steel Door (Single)", price: "From $650", warranty: "Full Written Warranty" },
  { service: "Free Written Estimate", price: "FREE", warranty: "—" },
];

const PARTS = [
  "Torsion Spring", "Extension Spring", "High-Cycle Spring 25K", "Lifting Cable",
  "Stainless Steel Cable", "Cable Drum", "Nylon Roller", "Vertical Track", "Track Bracket",
  "Hinge #1–#4", "Bottom Seal", "Safety Sensor", "Belt Drive Opener", "Main Drive Gear",
  "Battery Backup", "MyQ Smart Hub", "Carriage-House Panel",
];

const FAQ = [
  {
    question: "How fast can you respond to a garage door repair in Woodmere NY?",
    answer: "Same-day garage door repair throughout Woodmere NY 11598. Call (516) 612-6706 — dispatch within 2–4 hours, evenings and weekends. A real technician answers, not a call center.",
  },
  {
    question: "How much does garage door spring replacement cost in Woodmere?",
    answer: "Torsion spring replacement from $295. Extension spring from $165. Free written estimate. Use code SPRING10 for 10% off. Call (516) 612-6706.",
  },
  {
    question: "What garage door styles work for Woodmere homes?",
    answer: "Woodmere's mix of colonial, tudor, and ranch-style homes pairs best with carriage-house, raised-panel, and recessed-panel steel doors. We carry Clopay Grand Harbour, Amarr Heritage, and Wayne Dalton 9700 series. Free design consultation included with every new-door estimate. Call (516) 612-6706.",
  },
  {
    question: "Do you carry stainless steel cables for Woodmere waterfront homes?",
    answer: "Yes — for Woodmere homes adjacent to Five Towns Marine Nature Study Area and Lawrence Creek, we carry Marine-Grade 316 stainless steel lifting cables to resist accelerated salt-air corrosion. Ask about an upgrade at (516) 612-6706.",
  },
  {
    question: "Is there a warranty on garage door repairs in Woodmere NY?",
    answer: "Yes — every repair includes a full written warranty on parts and labor. We complete a 22-point safety inspection before leaving every job. If anything is not right after we leave, we return at no charge. Call (516) 612-6706.",
  },
];

const coupons = COUPONS.filter((c) => ["SPRING10", "NEWDOOR250", "TUNEUP20"].includes(c.code));

export default function WoodmerePage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      <PageHero
        badge="Same-Day Service in Woodmere"
        h1="Garage Door Repair in Woodmere, NY — Same Day"
        subtitle="One Stop Garage Door & Opener serves Woodmere NY 11598 with same-day spring repair, cable replacement, off-track correction, and LiftMaster opener installation. Free written estimate. Real technician. Written warranty."
        imageSrc="/images/hero-woodmere.jpg"
      />

      <TrustBar
        items={[
          "⚡ Same-Day in Woodmere",
          "📞 Real Technician Answers",
          "📝 Free Written Estimate",
          "🛡 Written Warranty",
        ]}
      />

      <section className="bg-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="eyebrow">Garage Door Service — Woodmere NY 11598</p>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-brand-black uppercase tracking-wide mb-1 leading-tight">
            One Stop Garage Door &amp; Opener —<br className="hidden sm:block" />
            Woodmere NY Specialists
          </h2>
          <div className="brand-divider" />

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
            Woodmere is one of the most distinctive residential communities in Nassau County&apos;s Five Towns — a
            hamlet of approximately 17,000 residents in the Town of Hempstead, bordered by the{" "}
            <strong>Atlantic Ocean waterways</strong> to the south and <strong>Cedarhurst</strong> and{" "}
            <strong>Lawrence</strong> to the east and west. The housing stock ranges from large traditional colonials
            and tudors on tree-lined streets north of Broadway to mid-century ranch and split-level homes closer to
            the South Shore waterways. Many of these homes were built in the 1950s and 1960s with attached garages
            designed for the era&apos;s standard 8×7 door — a dimension still common throughout Woodmere today.
          </p>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
            Woodmere&apos;s proximity to the <strong>Five Towns Marine Nature Study Area</strong> and{" "}
            <strong>Lawrence Creek</strong> means salt air and moisture are persistent factors for garage hardware.
            Spring coil oxidation, cable corrosion, and bottom seal deterioration happen faster in Woodmere than in
            inland Nassau County communities. One Stop Garage Door &amp; Opener stocks{" "}
            <strong>galvanized steel lifting cables</strong> as standard for all Woodmere installations, and carries
            Marine-Grade <strong>316 stainless steel cables</strong> for properties with direct waterway exposure
            — the same corrosion-resistant specification used for Lawrence and Inwood waterfront installations.
          </p>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-5">
            One Stop Garage Door &amp; Opener provides same-day service throughout Woodmere and all Five Towns — no
            extra charge for evenings, weekends, or holidays. Call{" "}
            <Link href={BUSINESS.phoneHref} className="font-bold text-brand-black hover:text-brand-red">
              (516) 612-6706
            </Link>{" "}
            and a real technician answers. We dispatch within 2–4 hours, call 30 minutes before arrival, complete a
            full 22-point system inspection, and leave only after a safety test confirms every function is operating
            correctly.
          </p>

          <HighlightBox heading="Woodmere Curb Appeal — New Door Installation:">
            Woodmere&apos;s traditional colonial and tudor architecture benefits significantly from a carriage-house or
            raised-panel garage door upgrade. One Stop Garage Door & Opener carries Clopay Grand Harbour, Amarr
            Heritage, and Wayne Dalton 9700 series — all available with natural-wood-look composite overlays that hold
            up to Five Towns salt air. Use code NEWDOOR250 for $250 off. Free design consultation with every estimate.
          </HighlightBox>

          <h3 className="font-display font-black text-xl text-brand-black uppercase tracking-wide mt-8 mb-3">
            Common Garage Door Problems in Woodmere NY
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            The most frequent repair calls from Woodmere involve <strong>torsion spring failures</strong> on
            1950s–1970s homes with original or first-replacement springs, <strong>cable corrosion</strong> from
            South Shore salt air, and <strong>bottom seal deterioration</strong> on doors facing the prevailing
            ocean-side winds. Off-track doors are common where nylon rollers have degraded over high cycle counts
            and track brackets have loosened from decades of vibration. Safety sensor misalignment is frequent on
            older opener systems where bracket mounting screws have worked loose over years of use.
          </p>

          <WarningBox text="STOP USING YOUR DOOR IF: You heard a loud bang, the door hangs unevenly, the opener motor runs without lifting the door, or the door is visibly off its track. Do not force an unbalanced door — call (516) 612-6706 for same-day service." />

          <h3 className="font-display font-black text-xl text-brand-black uppercase tracking-wide mt-8 mb-3">
            Spring Replacement — Woodmere NY 11598
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Torsion spring replacement is the single most common emergency call from Woodmere. When the loud bang
            sounds at 7 AM, the spring coil has unwound from a failure that was accumulating for months. Every One
            Stop Garage Door &amp; Opener truck carries <strong>high-cycle 25,000-cycle spring sets</strong> — four
            times the lifespan of builder-grade springs — as well as standard 10,000-cycle springs for budget-conscious
            repairs. Starting from $295 for torsion springs, $165 for extension springs with safety cables. Use code
            SPRING10 for 10% off.
          </p>

          <h3 className="font-display font-black text-xl text-brand-black uppercase tracking-wide mt-8 mb-3">
            Cable &amp; Off-Track Repair — Woodmere NY
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Cable failures in Woodmere frequently result from accelerated corrosion on South Shore waterway-adjacent
            properties. When a cable snaps, the door cannot travel safely on its tracks and often shifts off-track on
            the affected side. We carry complete galvanized cable drum kits — cable, drum, and bracket hardware — on
            every truck servicing Woodmere. Off-track repair includes full track assessment, bracket re-tensioning, and
            roller replacement before resetting. Starting from $125 for cable repair, $85 for off-track correction.
          </p>

          <h3 className="font-display font-black text-xl text-brand-black uppercase tracking-wide mt-8 mb-3">
            New Door Installation — Woodmere NY
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            For Woodmere&apos;s traditional architecture, we recommend the{" "}
            <strong>Clopay Grand Harbour</strong> carriage-house series or <strong>Amarr Heritage</strong> raised-panel
            doors — both are available in prefinished steel with composite wood-look overlays that resist Five Towns
            salt air without maintenance. Full-view glass and aluminum contemporary doors are available for modern
            ranch and split-level styles. New doors include professional installation, disposal of the old door, and
            a full opener compatibility check. Use code NEWDOOR250 for $250 off a new door.
          </p>

          <h3 className="font-display font-black text-xl text-brand-black uppercase tracking-wide mt-8 mb-3">
            Opener Service — Woodmere NY 11598
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            For Woodmere attached garages, the <strong>LiftMaster 87504 belt drive</strong> with MyQ smart WiFi and
            integrated battery backup is the standard recommendation. Battery backup is strongly recommended given Five
            Towns storm patterns — ocean-side communities lose power more frequently than inland Nassau County. Gear
            and sprocket kit replacement, the most common opener repair, is stocked on every Woodmere service truck.
            Code OPENER99 for $99 off a new opener.
          </p>

          <PartsTags tags={PARTS} />

          <h3 className="font-display font-black text-xl text-brand-black uppercase tracking-wide mt-10 mb-4">
            Pricing — Woodmere NY
          </h3>
          <PricingTable rows={PRICING} />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            {coupons.map((c) => (
              <CouponCard key={c.code} coupon={c} />
            ))}
          </div>

          <h3 className="font-display font-black text-xl text-brand-black uppercase tracking-wide mt-12 mb-4">
            FAQ — Woodmere NY Garage Door
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
                    area.city === "Woodmere"
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
        heading="Same-Day Garage Door Repair in Woodmere NY"
        subtext="One Stop Garage Door & Opener — Five Towns Nassau County — Free Written Estimate"
      />
    </>
  );
}
