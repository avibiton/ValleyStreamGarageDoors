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
import { HighlightBox } from "@/components/ui/HighlightBox";
import { CouponCard } from "@/components/cards/CouponCard";

export const metadata: Metadata = {
  title: `Garage Door Installation Valley Stream NY | Clopay Amarr | ${BUSINESS.phone}`,
  description:
    "New garage door installation Valley Stream NY 11580 and Five Towns. Clopay, Amarr, Wayne Dalton insulated steel, carriage house, glass aluminum. $250 off. Free estimate. Call (516) 612-6706.",
  alternates: { canonical: `${BUSINESS.baseUrl}/installation/` },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Garage Door Installation Valley Stream NY",
  provider: {
    "@type": "LocalBusiness",
    name: "One Stop Garage Door & Opener",
    telephone: BUSINESS.phone,
    "@id": `${BUSINESS.baseUrl}/#business`,
  },
  areaServed: { "@type": "City", name: "Valley Stream", addressRegion: "NY", postalCode: "11580" },
  serviceType: "Garage Door Installation",
  description:
    "New garage door installation in Valley Stream NY 11580 and Five Towns. Clopay, Amarr, Wayne Dalton. Free in-home estimate. $250 off.",
  offers: [
    { "@type": "Offer", name: "$250 OFF New Garage Door Installation", description: "Code NEWDOOR250 - Free in-home estimate", validThrough: "2026-12-31" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a new garage door cost in Valley Stream NY?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Single insulated steel doors in Valley Stream start from $650. Double insulated steel from $950. Carriage house style from $1,200. Free in-home estimate. Use code NEWDOOR250 for $250 off. Call (516) 612-6706.",
      },
    },
    {
      "@type": "Question",
      name: "What garage door style is best for Valley Stream NY homes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Carriage house style doors are the most popular choice for Valley Stream and Five Towns colonial, cape, and split-level homes. For attached garages, triple-layer insulated steel with R-12 foam significantly reduces heat loss and noise. Free in-home estimate. Call (516) 612-6706.",
      },
    },
    {
      "@type": "Question",
      name: "Do you install garage doors in all Five Towns NY?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — One Stop Garage Door & Opener installs new garage doors throughout all Five Towns: Valley Stream, Woodmere, Hewlett, Cedarhurst, Lawrence, and Inwood. Most standard sizes installed same day or next day. Use code NEWDOOR250 for $250 off. Call (516) 612-6706.",
      },
    },
  ],
};

const PRICING = [
  { service: "Single Insulated Steel (Standard Size)", price: "From $650", warranty: "Same Day / Next Day" },
  { service: "Double Insulated Steel (Standard Size)", price: "From $950", warranty: "Same Day / Next Day" },
  { service: "Carriage House Composite Overlay", price: "From $1,200", warranty: "1–3 Days" },
  { service: "Glass & Aluminum Contemporary", price: "From $1,800", warranty: "2–4 Weeks" },
  { service: "Custom Size or Style", price: "Call", warranty: "2–4 Weeks" },
  { service: "Free In-Home Estimate", price: "FREE", warranty: "—" },
];

const PARTS = [
  "Insulated Triple-Layer Steel", "Carriage House Style", "Composite Overlay", "Glass & Aluminum",
  "Galvanized Steel Panel", "Bottom Seal", "Side Seal (Astragal)", "Top Seal",
  "Weather Stripping", "Threshold Seal", "Steel Strut", "Center Stile",
];

const FAQ = [
  {
    question: "How much does a new garage door cost in Valley Stream NY?",
    answer: "Single insulated steel from $650. Double insulated steel from $950. Carriage house from $1,200. Glass & aluminum from $1,800. Free in-home estimate. Use code NEWDOOR250 for $250 off. Call (516) 612-6706.",
  },
  {
    question: "Do you install garage doors in all Five Towns NY?",
    answer: "Yes — One Stop Garage Door & Opener installs throughout all Five Towns: Valley Stream, Woodmere, Hewlett, Cedarhurst, Lawrence, and Inwood. Most standard sizes same day or next day. Use code NEWDOOR250 for $250 off. Call (516) 612-6706.",
  },
  {
    question: "What is the best garage door for a waterfront Five Towns home?",
    answer: "For Lawrence and Inwood waterfront properties exposed to Reynolds Channel salt air, we recommend galvanized steel panel construction with stainless steel hardware and Marine-Grade 316 lifting cables. The door itself should be triple-layer insulated steel. Free in-home estimate includes a coastal hardware assessment. Call (516) 612-6706.",
  },
  {
    question: "Do you remove the old door as part of installation in Valley Stream?",
    answer: "Yes — every Five Towns installation includes full removal of the existing door and hardware, inspection of the opening framing, installation of the new door with correctly calibrated spring system, opener reconnection, and a complete safety test. We leave the site clean. Call (516) 612-6706.",
  },
  {
    question: "How long does garage door installation take in Valley Stream?",
    answer: "Most standard-size residential installations in Valley Stream and Five Towns are completed in a single day. Custom sizes or glass & aluminum doors have a 2–4 week manufacturer lead time. Free in-home estimate includes measurement and scheduling. Call (516) 612-6706.",
  },
];

const newDoorCoupon = COUPONS.find((c) => c.code === "NEWDOOR250")!;

export default function InstallationPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      <PageHero
        badge="$250 Off New Door"
        h1="Garage Door Installation in Valley Stream, NY — $250 Off"
        subtitle="Clopay, Amarr & Wayne Dalton insulated steel, carriage house, and glass & aluminum garage door installation throughout Valley Stream NY 11580 and all Five Towns. Free in-home estimate."
        ctaLabel={`Call ${BUSINESS.phone} — $250 Off New Door`}
      />

      <TrustBar
        items={[
          "📝 Free In-Home Estimate",
          "🏠 Clopay · Amarr · Wayne Dalton",
          "⚡ Most Installs Same/Next Day",
          "🛡 Written Warranty",
        ]}
      />

      <section className="bg-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="eyebrow">New Door Installation — Valley Stream &amp; Five Towns NY</p>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-brand-black uppercase tracking-wide mb-1">
            Garage Door Installation in Valley Stream, NY
          </h2>
          <div className="brand-divider" />

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
            Valley Stream and Five Towns homeowners replace garage doors for reasons shaped by the South Shore
            environment itself. The salt air from <strong>Reynolds Channel</strong> and{" "}
            <strong>Jamaica Bay</strong> that reaches Valley Stream&apos;s residential streets between{" "}
            <strong>Rockaway Avenue</strong> and the <strong>Belt Parkway</strong> creates a corrosion pattern on
            original steel panels that simply does not exist in inland Nassau County communities. By the time a Valley
            Stream door has been running for 15–20 years, the bottom section is typically showing rust along the fold
            lines where water pools, the hardware has corroded significantly, and the galvanized coating on the
            original steel panels has failed in multiple locations. Replacement in this environment is not just
            aesthetic — it is often the structurally correct decision and recognizes that the garage door is the
            largest visible surface on the front facade. Both are valid, and One Stop Garage Door &amp; Opener handles
            both with a free in-home estimate and written warranty on every installation throughout Valley Stream,
            Woodmere, Hewlett, Cedarhurst, Lawrence, and Inwood.
          </p>

          <HighlightBox heading="$250 Off New Garage Door Installation:">
            Use code <strong>NEWDOOR250</strong> on your next Valley Stream or Five Towns installation. Free
            in-home estimate with no obligation. Call{" "}
            <Link href={BUSINESS.phoneHref} className="font-bold text-brand-red hover:underline">
              (516) 612-6706
            </Link>
            .
          </HighlightBox>

          <h3 className="font-display font-black text-xl text-brand-black uppercase tracking-wide mt-8 mb-3">
            Carriage House Style — Most Popular in Valley Stream &amp; Five Towns
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Valley Stream&apos;s colonial, cape cod, and split-level homes — and the similar housing stock throughout
            Woodmere, Hewlett, and Cedarhurst — are beautifully complemented by a{" "}
            <strong>carriage house garage door</strong> with deep wood-grain steel embossing and optional period
            decorative hardware in oil-rubbed bronze or black iron. Composite overlay carriage house doors are
            virtually indistinguishable from real wood at any viewing distance, without the painting, sealing, and
            maintenance that real timber requires. Available from Clopay, Amarr, and Wayne Dalton in dozens of panel
            designs and color options to match any Five Towns home exterior.
          </p>

          <h3 className="font-display font-black text-xl text-brand-black uppercase tracking-wide mt-8 mb-3">
            Insulated Triple-Layer Steel — Critical for Five Towns Attached Garages
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            For Valley Stream and Five Towns attached garages — where the door shares a wall with the kitchen, family
            room, or bedroom — an <strong>insulated triple-layer steel door with R-12 polyurethane foam</strong> is
            the practical choice. The South Shore climate creates temperature extremes: Nassau County winters drop
            garage temperatures well below freezing, and the shared wall between an uninsulated garage and the main
            living area is a major heat loss point. An insulated door measurably reduces that heat transfer and
            substantially lowers noise from the garage. Most Five Towns homeowners who upgrade to insulated doors notice
            the difference in the adjacent room immediately. For Lawrence and Inwood waterfront properties, we use{" "}
            <strong>galvanized steel panel construction</strong> to resist the salt air corrosion from Reynolds Channel
            that shortens the life of standard steel.
          </p>

          <h3 className="font-display font-black text-xl text-brand-black uppercase tracking-wide mt-8 mb-3">
            Glass &amp; Aluminum — Contemporary Five Towns Renovations
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Renovated Valley Stream and Lawrence properties with a contemporary aesthetic increasingly request{" "}
            <strong>full-view aluminum and glass doors</strong>. The anodized aluminum frame is inherently
            corrosion-resistant — ideal for Five Towns&apos; salt air proximity to Reynolds Channel and the Atlantic —
            and full-view tempered glass panels fill the garage with natural light. Available in clear, frosted, or
            privacy glass with silver or matte black frame finishes. No painting required and naturally resistant to
            the coastal environment throughout Five Towns.
          </p>

          <h3 className="font-display font-black text-xl text-brand-black uppercase tracking-wide mt-8 mb-3">
            Brands We Install Throughout Five Towns
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-3">
            One Stop Garage Door &amp; Opener works with all major manufacturers to find the right door for every
            Five Towns home and budget.
          </p>
          <ul className="mb-5 text-gray-600 text-sm leading-relaxed space-y-2 ml-5 list-disc">
            <li><strong>Clopay</strong> — America&apos;s most recognized brand, available in every style from budget steel to premium custom wood</li>
            <li><strong>Amarr</strong> — Wide residential and commercial range, strong warranty program, excellent South Shore corrosion options</li>
            <li><strong>Wayne Dalton</strong> — Known for TorqueMaster spring system, great residential value for Five Towns homes</li>
          </ul>

          <PartsTags tags={PARTS} />

          <h3 className="font-display font-black text-xl text-brand-black uppercase tracking-wide mt-10 mb-4">
            Installation Pricing — Valley Stream &amp; Five Towns
          </h3>
          <PricingTable rows={PRICING} thirdCol="Lead Time" />

          <div className="mt-8 max-w-sm">
            <CouponCard coupon={newDoorCoupon} />
          </div>

          <h3 className="font-display font-black text-xl text-brand-black uppercase tracking-wide mt-12 mb-4">
            FAQ — Installation Valley Stream NY
          </h3>
          <FAQAccordion items={FAQ} />
        </div>
      </section>

      <CTASection
        heading="New Garage Door Installation in Valley Stream & Five Towns"
        subtext="$250 off any new door · Free in-home estimate · Written warranty · Clopay · Amarr · Wayne Dalton"
      />
    </>
  );
}
