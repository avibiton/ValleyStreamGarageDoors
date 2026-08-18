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
import { CouponCard } from "@/components/cards/CouponCard";

export const metadata: Metadata = {
  title: `Garage Door FAQ & Coupons Valley Stream NY | Save $250 | ${BUSINESS.phone}`,
  description:
    "Garage door coupons and FAQ for Valley Stream NY and Five Towns. Save 10% on springs, $250 off new door, $99 off opener. One Stop Garage Door & Opener. Call (516) 612-6706.",
  alternates: { canonical: `${BUSINESS.baseUrl}/faq/` },
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
        text: "One Stop Garage Door & Opener provides same-day repair throughout Valley Stream NY 11580, 11581 and all Five Towns - Woodmere, Hewlett, Cedarhurst, Lawrence, and Inwood. Call (516) 612-6706 any time - a real technician answers. We arrive within 2-4 hours, evenings and weekends included.",
      },
    },
    {
      "@type": "Question",
      name: "How much does torsion spring repair cost in Valley Stream NY?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Torsion spring replacement in Valley Stream starts from $295. Extension spring repair from $165. High-cycle spring upgrade from $380. Free written estimate. Use code SPRING10 for 10% off. Call (516) 612-6706.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a new garage door cost in Valley Stream NY?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Single insulated steel from $650. Double from $950. Carriage house from $1,200. Glass & aluminum from $1,800. Free in-home estimate. Use code NEWDOOR250 for $250 off. Call (516) 612-6706.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work evenings and weekends in Valley Stream NY?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes - One Stop Garage Door & Opener is available evenings, weekends, and holidays throughout Valley Stream NY and all Five Towns at no extra charge. Call (516) 612-6706 any time.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a warranty on garage door repairs in Valley Stream NY?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes - every repair includes a full written warranty on parts and labor. We complete a 22-point safety test before leaving every job. If anything is not right after we leave, we return at no charge. Call (516) 612-6706.",
      },
    },
  ],
};

const PRICING = [
  { service: "Torsion Spring Replacement", price: "$295", warranty: "SPRING10 — 10% off" },
  { service: "Extension Spring (Pair + Safety Cables)", price: "$165", warranty: "SPRING10 — 10% off" },
  { service: "High-Cycle Spring (25,000 cycles)", price: "$380", warranty: "SPRING10 — 10% off" },
  { service: "Broken Overhead Cable Repair", price: "$125", warranty: "FREE911 — free service call" },
  { service: "Cable Drum Replacement", price: "$145", warranty: "FREE911 — free service call" },
  { service: "Off-Track Garage Door Repair", price: "$85", warranty: "FREE911 — free service call" },
  { service: "Nylon Roller Upgrade", price: "$35/roller", warranty: "FREE911 — free service call" },
  { service: "Gear & Sprocket Kit Replacement", price: "$130", warranty: "FREE911 — free service call" },
  { service: "Safety Sensor Repair", price: "$75–$150", warranty: "FREE911 — free service call" },
  { service: "New LiftMaster Opener Install", price: "Call", warranty: "OPENER99 — $99 off" },
  { service: "New Door Installation (Single)", price: "From $650", warranty: "NEWDOOR250 — $250 off" },
  { service: "New Door Installation (Double)", price: "From $950", warranty: "NEWDOOR250 — $250 off" },
  { service: "22-Point Annual Tune-Up", price: "$99", warranty: "TUNEUP20 — $20 off" },
  { service: "Free Written Estimate", price: "FREE", warranty: "Always included" },
];

const FAQ = [
  {
    question: "Who repairs garage doors in Valley Stream NY?",
    answer: "One Stop Garage Door & Opener provides same-day repair throughout Valley Stream NY 11580, 11581 and all Five Towns. A real technician answers every call — not a call center. We arrive within 2–4 hours, evenings and weekends included at no extra charge.",
  },
  {
    question: "How much does torsion spring repair cost in Valley Stream NY?",
    answer: "Torsion spring replacement in Valley Stream starts from $295. Extension spring (pair + safety cables) from $165. High-cycle upgrade from $380. Free written estimate. Use code SPRING10 for 10% off. Call (516) 612-6706.",
  },
  {
    question: "How much does a new garage door cost in Valley Stream NY?",
    answer: "Single insulated steel from $650. Double from $950. Carriage house from $1,200. Glass & aluminum from $1,800. Free in-home estimate with no obligation. Use code NEWDOOR250 for $250 off. Call (516) 612-6706.",
  },
  {
    question: "Do you work evenings and weekends in Valley Stream and Five Towns?",
    answer: "Yes — One Stop Garage Door & Opener is available evenings, weekends, and holidays throughout Valley Stream NY and all Five Towns at no extra charge. A broken spring at 7am or a door that won't close at 10pm gets the same fast response. Call (516) 612-6706 any time.",
  },
  {
    question: "Is there a warranty on garage door repairs in Valley Stream NY?",
    answer: "Yes — every repair includes a full written warranty on parts and labor. We complete a 22-point safety test before leaving every job — auto-reverse check, sensor alignment, spring balance, and full operation cycle. If anything isn't right after we leave, we return at no charge. Call (516) 612-6706.",
  },
  {
    question: "Do you serve all Five Towns with same-day garage door repair?",
    answer: "Yes — One Stop Garage Door & Opener provides same-day service throughout all Five Towns: Valley Stream 11580/11581, Woodmere 11598, Hewlett 11557, Cedarhurst 11516, Lawrence 11559, and Inwood 11096. We also serve East Rockaway, Malverne, Lynbrook, and surrounding Nassau County communities. Call (516) 612-6706.",
  },
];

export default function FAQPage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      <PageHero
        badge="5 Active Discount Codes"
        h1="Garage Door Coupons & FAQ — Valley Stream & Five Towns, NY"
        subtitle="5 active discount codes for Valley Stream NY 11580 and all Five Towns. Save 10% on springs, $250 off a new door, $99 off a new opener, $20 off tune-up, and free service call with any repair."
        ctaLabel={`Call ${BUSINESS.phone} to Redeem`}
      />

      <TrustBar
        items={[
          "💰 5 Active Coupons",
          "📝 Free Written Estimate",
          "🛡 Written Warranty",
          "⚡ Same-Day Service",
        ]}
      />

      <section className="bg-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="eyebrow">Special Offers — Valley Stream &amp; Five Towns NY</p>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-brand-black uppercase tracking-wide mb-1">
            One Stop Garage Door Coupons &amp; Discount Codes
          </h2>
          <div className="brand-divider" />

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
            All coupons apply to services throughout Valley Stream NY 11580, 11581, Woodmere 11598, Hewlett 11557,
            Cedarhurst 11516, Lawrence 11559, and Inwood 11096. Call{" "}
            <Link href={BUSINESS.phoneHref} className="text-brand-red font-bold hover:underline">
              (516) 612-6706
            </Link>{" "}
            and mention the code to redeem.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {COUPONS.map((coupon) => (
              <CouponCard key={coupon.code} coupon={coupon} />
            ))}
          </div>

          <h3 className="font-display font-black text-xl text-brand-black uppercase tracking-wide mt-10 mb-4">
            Pricing Guide — Valley Stream &amp; Five Towns
          </h3>
          <PricingTable rows={PRICING} thirdCol="Coupon Available" />

          <h3 className="font-display font-black text-xl text-brand-black uppercase tracking-wide mt-12 mb-4">
            Frequently Asked Questions — Valley Stream &amp; Five Towns NY
          </h3>
          <FAQAccordion items={FAQ} />
        </div>
      </section>

      <CTASection
        heading="Call One Stop Garage Door & Opener Today"
        subtext="Valley Stream & Five Towns Nassau County · Mention any coupon code when you call"
      />
    </>
  );
}
