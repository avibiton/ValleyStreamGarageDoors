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
import { CouponCard } from "@/components/cards/CouponCard";

export const metadata: Metadata = {
  title: `Garage Door Opener Repair Valley Stream NY | LiftMaster MyQ | ${BUSINESS.phone}`,
  description:
    "Garage door opener repair and installation Valley Stream NY 11580. LiftMaster belt drive, MyQ smart WiFi, gear sprocket repair, battery backup. One Stop Garage Door. Free estimate. Call (516) 612-6706.",
  alternates: { canonical: `${BUSINESS.baseUrl}/garage-door-opener/` },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Garage Door Opener Repair Installation Valley Stream NY",
  provider: {
    "@type": "LocalBusiness",
    name: "One Stop Garage Door & Opener",
    telephone: BUSINESS.phone,
    "@id": `${BUSINESS.baseUrl}/#business`,
  },
  areaServed: { "@type": "City", name: "Valley Stream", addressRegion: "NY", postalCode: "11580" },
  serviceType: "Garage Door Opener Installation and Repair",
  description:
    "LiftMaster and Genie garage door opener repair and installation in Valley Stream NY 11580 and Five Towns. Belt drive, wall-mount, MyQ smart WiFi, battery backup. Free estimate.",
  offers: [
    { "@type": "Offer", name: "$99 OFF New Opener Installation", description: "Code OPENER99 - LiftMaster or Genie", validThrough: "2026-12-31" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who installs LiftMaster openers in Valley Stream NY?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "One Stop Garage Door & Opener is an authorized LiftMaster and Genie dealer serving Valley Stream NY 11580 and all Five Towns. We install belt drive, wall-mount, and smart openers with MyQ throughout Nassau County. Use code OPENER99 for $99 off. Call (516) 612-6706.",
      },
    },
    {
      "@type": "Question",
      name: "My opener motor runs but the door won't move in Valley Stream - what's wrong?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Almost certainly a stripped main drive gear — the nylon gear inside the opener head. We carry Gear & Sprocket Kits for every major brand on every truck. Same-day repair throughout Valley Stream NY and Five Towns. Starting from $130. Call (516) 612-6706.",
      },
    },
    {
      "@type": "Question",
      name: "Do you install battery backup openers in Valley Stream NY?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — battery backup is strongly recommended for Valley Stream and Five Towns due to South Shore storms and power outages. The LiftMaster 87504 includes integrated battery backup. We install and add battery backup throughout Nassau County. Call (516) 612-6706.",
      },
    },
  ],
};

const PRICING = [
  { service: "Gear & Sprocket Kit Replacement", price: "$130", warranty: "Full Written Warranty" },
  { service: "Safety Sensor Repair / Replace", price: "$75–$150", warranty: "Auto-Reverse Tested" },
  { service: "Remote / Keypad Programming", price: "$45", warranty: "Full Test Included" },
  { service: "Logic Board Replacement", price: "$85", warranty: "Full Written Warranty" },
  { service: "Battery Backup Add-On", price: "$195", warranty: "Full Written Warranty" },
  { service: "LiftMaster Belt Drive Install (87504)", price: "Call", warranty: "Full Written Warranty" },
  { service: "LiftMaster Wall-Mount Install (8500W)", price: "Call", warranty: "Full Written Warranty" },
  { service: "Free Written Estimate", price: "FREE", warranty: "—" },
];

const PARTS = [
  "Belt Drive Opener", "Wall-Mount Jackshaft", "Chain Drive Opener", "Main Drive Gear",
  "Gear & Sprocket Kit", "Logic Board", "Safety Sensor", "Sensor Bracket", "Battery Backup",
  "MyQ Smart Hub", "Remote Control", "Wireless Keypad", "HomeLink", "Trolley", "Rail",
  "Wall Button", "LED Opener Bulb",
];

const FAQ = [
  {
    question: "My opener runs but the door won't move — what's the cost to fix?",
    answer: "Almost certainly a stripped main drive gear. Starting from $130. We carry Gear & Sprocket Kits for every major brand. Same-day repair throughout Valley Stream & Five Towns. Call (516) 612-6706.",
  },
  {
    question: "Which LiftMaster opener is best for a Valley Stream attached garage?",
    answer: "The LiftMaster 87504 belt drive — significantly quieter than chain drive, with integrated battery backup and MyQ. For homes with lower ceiling clearance common in Five Towns postwar capes, the LiftMaster 8500W wall-mount is the solution. Use code OPENER99 for $99 off. Call (516) 612-6706.",
  },
  {
    question: "Why does my garage door reverse before closing in Valley Stream NY?",
    answer: "Almost always a misaligned or dirty photo-eye safety sensor. We realign and test sensors same day throughout Valley Stream & Five Towns. Starting from $75. Call (516) 612-6706.",
  },
  {
    question: "Do you install battery backup openers in Valley Stream NY?",
    answer: "Yes — battery backup is strongly recommended for Valley Stream and Five Towns due to South Shore storm season. The LiftMaster 87504 includes it built-in. Add-on available for most existing openers starting from $195. Call (516) 612-6706.",
  },
  {
    question: "Do you install Genie openers in Valley Stream NY?",
    answer: "Yes — One Stop Garage Door & Opener installs and services all major brands including Genie SilentMax belt drive throughout Valley Stream and Five Towns. Use code OPENER99 for $99 off any new installation. Call (516) 612-6706.",
  },
];

const openerCoupon = COUPONS.find((c) => c.code === "OPENER99")!;

export default function OpenerPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      <PageHero
        badge="LiftMaster Authorized Dealer"
        h1="Garage Door Opener Repair & Installation in Valley Stream, NY"
        subtitle="LiftMaster belt drive, Genie smart opener, MyQ WiFi setup, gear & sprocket kit repair, and battery backup installation throughout Valley Stream NY 11580 and all Five Towns."
        ctaLabel={`Call ${BUSINESS.phone} — $99 Off New Opener`}
        imageSrc="/images/hero-opener.jpg"
      />

      <TrustBar
        items={[
          "⚡ Same-Day Opener Repair",
          "📞 LiftMaster Authorized",
          "📱 MyQ Smart Setup",
          "🛡 Written Warranty",
        ]}
      />

      <section className="bg-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="eyebrow">Opener Service — Valley Stream &amp; Five Towns NY</p>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-brand-black uppercase tracking-wide mb-1">
            Garage Door Opener Service in Valley Stream, NY
          </h2>
          <div className="brand-divider" />

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-5">
            The most common opener call we receive from Valley Stream and Five Towns homeowners follows the same
            pattern: the motor hums normally, the light comes on, but the door stays completely still. In virtually
            every case, this is a stripped <strong>main drive gear</strong> — the nylon gear inside the opener head
            that transfers power from the motor shaft to the drive mechanism. When it wears through, the motor runs
            freely but the <strong>trolley</strong> doesn&apos;t engage along the <strong>rail</strong>. One Stop
            Garage Door &amp; Opener stocks <strong>Gear &amp; Sprocket Kits</strong> for LiftMaster, Genie,
            Chamberlain, and Craftsman on every truck and replaces them same day throughout Valley Stream NY 11580 and
            all Five Towns.
          </p>

          <h3 className="font-display font-black text-xl text-brand-black uppercase tracking-wide mt-8 mb-3">
            LiftMaster Belt Drive — Best for Valley Stream Attached Garages
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            For Valley Stream and Five Towns attached garages — where the door sits below a bedroom or beside the
            kitchen — the <strong>LiftMaster 87504 belt drive opener</strong> is the right choice. The
            steel-reinforced belt produces no metal-on-metal contact and no chain rattle, dramatically quieter than any
            chain drive. It includes <strong>integrated battery backup</strong> — essential for Valley Stream&apos;s
            South Shore storm season when nor&apos;easters and summer Atlantic storms knock out power throughout Nassau
            County — and <strong>MyQ smart WiFi connectivity</strong> built in from the factory. Monitor your Valley
            Stream garage door remotely, receive open/close alerts, and grant temporary access codes for deliveries
            from anywhere in the world.
          </p>

          <h3 className="font-display font-black text-xl text-brand-black uppercase tracking-wide mt-8 mb-3">
            LiftMaster Wall-Mount — For Low-Ceiling Five Towns Homes
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Original cape cods and postwar homes throughout Valley Stream and Hewlett frequently have lower garage
            ceiling heights that won&apos;t accommodate a standard overhead rail opener. The{" "}
            <strong>LiftMaster 8500W wall-mount opener</strong> mounts directly on the wall beside the door — no
            overhead rail required. It is the quietest opener we install, includes battery backup, a built-in deadbolt
            lock that physically secures the door during power outages, and full MyQ smart connectivity. Perfect for
            Five Towns homes with finished overhead storage or limited headroom.
          </p>

          <h3 className="font-display font-black text-xl text-brand-black uppercase tracking-wide mt-8 mb-3">
            Battery Backup — Critical for South Shore Nassau County
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Valley Stream and the Five Towns sit directly in the path of South Shore weather systems that regularly
            cause power outages across Nassau County. A garage door without battery backup becomes manually operated
            during outages — which means fumbling with the emergency release cord in the dark during a storm. We
            install battery backup on every new opener throughout Valley Stream, and offer battery backup as an add-on
            upgrade to most existing compatible LiftMaster and Genie openers. This is not optional on the South Shore
            — it is a practical necessity for Five Towns homeowners.
          </p>

          <h3 className="font-display font-black text-xl text-brand-black uppercase tracking-wide mt-8 mb-3">
            Safety Sensor Repair — Door Reverses Before Closing
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            When a garage door in Valley Stream reverses immediately before closing, or won&apos;t close while the
            opener light flashes, the cause is almost always a misaligned or dirty{" "}
            <strong>photo-eye safety sensor</strong>. These sensors project a beam 4–6 inches above the floor — if
            the beam is interrupted or misaligned, the opener reverses as a safety measure. Required by federal law
            since 1993. One Stop Garage Door &amp; Opener realigns, cleans, and tests sensors same day throughout
            Valley Stream and Five Towns — and carries complete replacement sensor kits for physically damaged units.
            Starting from $75.
          </p>

          <PartsTags tags={PARTS} />

          <h3 className="font-display font-black text-xl text-brand-black uppercase tracking-wide mt-10 mb-4">
            Opener Pricing — Valley Stream &amp; Five Towns
          </h3>
          <PricingTable rows={PRICING} thirdCol="Warranty" />

          <div className="mt-8 max-w-sm">
            <CouponCard coupon={openerCoupon} />
          </div>

          <h3 className="font-display font-black text-xl text-brand-black uppercase tracking-wide mt-12 mb-4">
            FAQ — Opener Service Valley Stream NY
          </h3>
          <FAQAccordion items={FAQ} />
        </div>
      </section>

      <CTASection
        heading="Opener Service in Valley Stream & Five Towns NY"
        subtext="$99 off new LiftMaster or Genie · Same-day service · Free written estimate"
      />
    </>
  );
}
