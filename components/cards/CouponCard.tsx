import Link from "next/link";
import { BUSINESS } from "@/lib/constants";
import type { Coupon } from "@/data/coupons";

export function CouponCard({ coupon }: { coupon: Coupon }) {
  return (
    <div className="border-2 border-dashed border-brand-gold rounded-lg overflow-hidden bg-white">
      <div className="bg-brand-black px-5 py-5 text-center">
        <div className="font-display font-black text-3xl text-brand-gold leading-none">
          {coupon.amount}
        </div>
        <div className="text-white font-display font-bold text-base uppercase tracking-wide mt-1">
          {coupon.service}
        </div>
        {coupon.subtitle && (
          <div className="text-brand-gold/60 text-xs mt-1">{coupon.subtitle}</div>
        )}
      </div>
      <div className="bg-white px-5 py-4 text-center">
        <div className="bg-brand-light border border-gray-200 rounded px-4 py-2 mb-3">
          <span className="font-display font-black text-brand-black text-xl tracking-widest">
            {coupon.code}
          </span>
        </div>
        <Link
          href={BUSINESS.phoneHref}
          className="block bg-brand-red text-white font-display font-bold uppercase text-sm tracking-wide px-4 py-2.5 rounded hover:bg-brand-red-dark transition-colors mb-2"
        >
          Call {BUSINESS.phone}
        </Link>
        <p className="text-gray-400 text-[10px] leading-snug">{coupon.fine}</p>
      </div>
    </div>
  );
}
