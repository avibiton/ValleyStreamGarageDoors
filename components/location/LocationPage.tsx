import Link from "next/link";
import type { LocationData } from "@/data/locations";
import { BUSINESS, SERVICE_AREAS } from "@/lib/constants";
import { COUPONS } from "@/data/coupons";
import { PageHero } from "@/components/sections/PageHero";
import { TrustBar } from "@/components/sections/TrustBar";
import { CTASection } from "@/components/sections/CTASection";
import { FAQAccordion } from "@/components/faq/FAQAccordion";
import { PricingTable } from "@/components/ui/PricingTable";
import { PartsTags } from "@/components/ui/PartsTags";
import { WarningBox } from "@/components/ui/WarningBox";
import { HighlightBox } from "@/components/ui/HighlightBox";
import { CouponCard } from "@/components/cards/CouponCard";
import { JsonLd } from "@/components/seo/JsonLd";

interface LocationPageProps {
  location: LocationData;
}

export function LocationPage({ location }: LocationPageProps) {
  const featuredCoupons = COUPONS.filter((c) =>
    ["SPRING10", "NEWDOOR250", "FREE911"].includes(c.code)
  );

  return (
    <>
      <JsonLd data={location.serviceSchema} />
      <JsonLd data={location.faqSchema} />

      <PageHero
        badge={`Same-Day Service in ${location.city}`}
        h1={location.h1}
        subtitle={location.heroSubtitle}
      />

      <TrustBar items={location.trustItems.map((t) => `⚡ ${t}`)} />

      <section className="bg-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="eyebrow">Garage Door Service — {location.city} NY {location.zip}</p>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-brand-black uppercase tracking-wide mb-1 leading-tight">
            One Stop Garage Door &amp; Opener —<br className="hidden sm:block" />
            {location.city} NY Specialists
          </h2>
          <div className="brand-divider" />

          {location.overview.map((para, i) => (
            <p key={i} className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
              {para.includes("(516) 612-6706") ? (
                <>
                  {para.split("(516) 612-6706")[0]}
                  <Link href={BUSINESS.phoneHref} className="font-bold text-brand-black hover:text-brand-red">
                    (516) 612-6706
                  </Link>
                  {para.split("(516) 612-6706")[1]}
                </>
              ) : (
                para
              )}
            </p>
          ))}

          {location.highlightBox && (
            <HighlightBox heading={location.highlightBox.heading}>
              {location.highlightBox.body}
            </HighlightBox>
          )}

          <h3 className="font-display font-black text-xl text-brand-black uppercase tracking-wide mt-8 mb-3">
            Common Garage Door Problems in {location.city} NY
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {location.commonProblems}
          </p>

          <WarningBox text={location.warningBox} />

          <h3 className="font-display font-black text-xl text-brand-black uppercase tracking-wide mt-8 mb-3">
            Spring Replacement — {location.city} NY {location.zip}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {location.springSection}
          </p>

          <h3 className="font-display font-black text-xl text-brand-black uppercase tracking-wide mt-8 mb-3">
            Cable &amp; Off-Track Repair — {location.city} NY
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {location.cableSection}
          </p>

          <h3 className="font-display font-black text-xl text-brand-black uppercase tracking-wide mt-8 mb-3">
            Opener Service — {location.city} NY {location.zip}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {location.openerSection}
          </p>

          <PartsTags tags={location.partTags} />

          <h3 className="font-display font-black text-xl text-brand-black uppercase tracking-wide mt-10 mb-4">
            Pricing — {location.city} NY
          </h3>
          <PricingTable rows={location.pricing} />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            {featuredCoupons.map((c) => (
              <CouponCard key={c.code} coupon={c} />
            ))}
          </div>

          <h3 className="font-display font-black text-xl text-brand-black uppercase tracking-wide mt-12 mb-4">
            FAQ — {location.city} NY Garage Door
          </h3>
          <FAQAccordion items={location.faq} />
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
                    area.city === location.city
                      ? "border-brand-gold bg-brand-gold/10 text-brand-gold"
                      : "border-brand-gold/30 text-white hover:border-brand-gold hover:bg-white/5"
                  }`}
                >
                  <div className="font-display font-bold text-xs uppercase tracking-wide">
                    {area.city}
                  </div>
                  <div className="text-[10px] mt-0.5 opacity-70">{area.zip}</div>
                </Link>
              ) : (
                <div
                  key={area.city}
                  className="block text-center border border-white/10 rounded p-3 text-gray-600"
                >
                  <div className="font-display font-bold text-xs uppercase tracking-wide">
                    {area.city}
                  </div>
                  <div className="text-[10px] mt-0.5">{area.zip}</div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <CTASection
        heading={`Same-Day Garage Door Repair in ${location.city} NY`}
        subtext="One Stop Garage Door & Opener — Five Towns Nassau County — Free Written Estimate"
      />
    </>
  );
}
