import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/constants";
import { COUPONS } from "@/data/coupons";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/sections/PageHero";
import { TrustBar } from "@/components/sections/TrustBar";
import { CTASection } from "@/components/sections/CTASection";
import { FAQAccordion } from "@/components/faq/FAQAccordion";
import { PricingTable } from "@/components/ui/PricingTable";
import { PartsTags } from "@/components/ui/PartsTags";
import { WarningBox } from "@/components/ui/WarningBox";
import { CouponCard } from "@/components/cards/CouponCard";

export const metadata: Metadata = {
  title: `Garage Door Repair Valley Stream NY | Off-Track Spring Cable | ${BUSINESS.phone}`,
  description:
    "Same-day garage door repair Valley Stream NY 11580. Torsion spring, off-track door, broken overhead cable, cable drum replacement. One Stop Garage Door. Free estimate. Call (516) 612-6706.",
  alternates: { canonical: `${BUSINESS.baseUrl}/repair/` },
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
    "Same-day garage door repair in Valley Stream NY 11580. Torsion spring, off-track door, broken overhead cable, cable drum replacement. Free written estimate.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How fast can you repair an off-track garage door in Valley Stream NY?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Same-day off-track garage door repair throughout Valley Stream NY 11580. Call (516) 612-6706 — One Stop Garage Door & Opener dispatches within 2-4 hours throughout Five Towns. We carry all hardware to reset, realign, and test in a single visit.",
      },
    },
    {
      "@type": "Question",
      name: "How much does spring repair cost in Valley Stream NY?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Torsion spring replacement in Valley Stream starts from $295. Extension spring repair from $165. Free written estimate. Use code SPRING10 for 10% off. Call (516) 612-6706.",
      },
    },
    {
      "@type": "Question",
      name: "Do you repair broken overhead door cables in Valley Stream NY?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we carry galvanized and stainless steel cables and cable drum replacement kits on every truck. Same-day repair throughout Valley Stream NY 11580 and Five Towns. Starting from $125. Call (516) 612-6706.",
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
  { service: "Hinge Replacement (per hinge)", price: "$25", warranty: "Full Written Warranty" },
  { service: "Bottom Seal Replacement", price: "$65", warranty: "Full Written Warranty" },
  { service: "Safety Sensor Repair", price: "$75–$150", warranty: "Auto-Reverse Tested" },
  { service: "22-Point Tune-Up & Inspection", price: "$99", warranty: "Written Safety Report" },
  { service: "Free Written Estimate", price: "FREE", warranty: "—" },
];

const PARTS = [
  "Torsion Spring", "Extension Spring", "Lifting Cable", "Galvanized Cable", "Stainless Steel Cable",
  "Marine-Grade 316 Cable", "Cable Drum", "Drum Bracket", "Bearing Plate", "Nylon Roller", "Roller Stem",
  "Vertical Track", "Horizontal Track", "Track Bracket", "Hinge #1–#4", "Bottom Bracket",
  "Bottom Seal", "Side Seal (Astragal)", "Safety Sensor", "Spring Safety Cable",
];

const FAQ = [
  {
    question: "How fast can you fix an off-track garage door in Valley Stream?",
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

const coupons = COUPONS.filter((c) => ["SPRING10", "FREE911"].includes(c.code));

export default function RepairPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      <PageHero
        badge="Same-Day Emergency Service"
        h1="Garage Door Repair in Valley Stream, NY — Same Day"
        subtitle="Broken torsion spring, off-track door, broken overhead cable, cable drum replacement — One Stop Garage Door & Opener fixes it same day throughout Valley Stream NY 11580, 11581 and all Five Towns."
        imageSrc="/images/hero-repair.jpg"
      />

      <TrustBar
        items={[
          "⚡ Same-Day Dispatch",
          "📞 Real Technician Answers",
          "📝 Free Written Estimate",
          "🛡 Written Warranty",
        ]}
      />

      <section className="bg-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="eyebrow">Emergency Repair — Valley Stream NY 11580 11581</p>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-brand-black uppercase tracking-wide mb-1">
            Garage Door Repair Valley Stream NY — What We Fix Every Day
          </h2>
          <div className="brand-divider" />

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-5">
            Valley Stream&apos;s postwar housing stock — the colonials, cape cods, and split-levels on residential
            streets from <strong>Rockaway Avenue</strong> to <strong>Fletcher Avenue</strong> and through the
            neighborhoods flanking the <strong>Belt Parkway</strong> — gives us a wide range of garage systems to work
            on daily. The salt air from <strong>Reynolds Channel</strong> accelerates hardware wear throughout Valley
            Stream and all Five Towns, particularly in properties closer to the waterfront communities of Lawrence and
            Inwood. Same-day garage door repair in Valley Stream NY 11580 and 11581 is available 24 hours a day —
            call{" "}
            <Link href={BUSINESS.phoneHref} className="font-bold text-brand-black hover:text-brand-red">
              (516) 612-6706
            </Link>
            .
          </p>

          <WarningBox text="STOP USING YOUR DOOR IF: You heard a loud bang, the door hangs unevenly, the opener motor runs without lifting the door, or the door is visibly off its track. Do not force an unbalanced door." />

          <h3 className="font-display font-black text-xl text-brand-black uppercase tracking-wide mt-8 mb-3">
            Broken Torsion Spring — Same-Day Repair Valley Stream NY
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            The loud bang at 6am was your <strong>torsion spring</strong> snapping under tension. Wound tightly above
            the door opening along the <strong>torsion shaft</strong>, this spring stores the counterbalancing force
            that makes a 200–400 pound door feel weightless. When it breaks, the door becomes dangerous deadweight the
            opener was never designed to lift. <strong>Do not operate the door or the opener.</strong> Call{" "}
            <Link href={BUSINESS.phoneHref} className="text-brand-red font-bold hover:underline">
              (516) 612-6706
            </Link>{" "}
            for same-day torsion spring repair throughout Valley Stream and Five Towns. Starting from $295. Use code
            SPRING10 for 10% off.
          </p>

          <h3 className="font-display font-black text-xl text-brand-black uppercase tracking-wide mt-8 mb-3">
            Broken Overhead Door Cable — Cable Drum Replacement Valley Stream
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            A <strong>broken overhead door cable</strong> causes one side of the door to drop suddenly while the other
            holds position, leaving the door at a dangerous angle that pulls rollers off the{" "}
            <strong>vertical track</strong>. The <strong>cable drum</strong> controls how the{" "}
            <strong>lifting cable</strong> winds — when a drum wears or the cable frays near the drum bracket, the snap
            happens fast. We carry complete <strong>cable drum replacement</strong> kits and galvanized lifting cables —
            stainless steel for Lawrence and Inwood waterfront properties. Starting from $125. Code FREE911 for free
            service call.
          </p>

          <h3 className="font-display font-black text-xl text-brand-black uppercase tracking-wide mt-8 mb-3">
            Off-Track Garage Door Repair — Valley Stream NY
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            An <strong>off-track garage door</strong> in Valley Stream is always a structural emergency. Whether caused
            by a snapped cable, vehicle impact, or a worn <strong>roller stem</strong> that allowed the roller to pop
            out of the <strong>vertical track</strong>, an off-track door cannot be safely forced back. We assess the
            full system — both tracks, all <strong>track brackets</strong>, the cable drum, every hinge and roller —
            before resetting. A door put back on track without identifying the root cause will come off again.
            Starting from $85.
          </p>

          <h3 className="font-display font-black text-xl text-brand-black uppercase tracking-wide mt-8 mb-3">
            Cable, Roller &amp; Hardware Repair — Five Towns
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Valley Stream&apos;s salt air environment from Reynolds Channel accelerates wear on{" "}
            <strong>metal rollers</strong>. We upgrade to <strong>sealed nylon ball-bearing rollers</strong> that run
            quietly and last 3–4 times longer in the South Shore coastal environment.{" "}
            <strong>Hinge replacement</strong> is frequent in Valley Stream — particularly{" "}
            <strong>hinge #2</strong> and <strong>#3</strong> which bear the greatest stress. For waterfront Five Towns
            properties, galvanized cables are minimum — Marine-Grade 316 stainless steel cables are the right choice
            for Lawrence and Inwood. Bottom seal replacement is critical for South Shore homes exposed to storm surge
            and heavy rain.
          </p>

          <PartsTags tags={PARTS} />

          <h3 className="font-display font-black text-xl text-brand-black uppercase tracking-wide mt-10 mb-4">
            Repair Pricing — Valley Stream NY
          </h3>
          <PricingTable rows={PRICING} />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8 max-w-xl">
            {coupons.map((c) => (
              <CouponCard key={c.code} coupon={c} />
            ))}
          </div>

          <h3 className="font-display font-black text-xl text-brand-black uppercase tracking-wide mt-12 mb-4">
            FAQ — Repair Valley Stream NY
          </h3>
          <FAQAccordion items={FAQ} />
        </div>
      </section>

      <CTASection
        heading="Same-Day Repair in Valley Stream & Five Towns"
        subtext="One Stop Garage Door & Opener — Free Written Estimate — Written Warranty"
      />
    </>
  );
}
