import Link from "next/link";
import { BUSINESS } from "@/lib/constants";
import { ServiceRequestForm } from "@/components/forms/ServiceRequestForm";

export function ServiceRequestSection() {
  return (
    <section className="bg-brand-light py-16" id="service-request">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <p className="eyebrow">Request Service Online</p>
        <h2 className="font-display font-black text-2xl sm:text-3xl text-brand-black uppercase tracking-wide mb-1">
          Send Us Your Garage Door Problem
        </h2>
        <div className="brand-divider" />
        <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
          Prefer to call?{" "}
          <Link href={BUSINESS.phoneHref} className="font-bold text-brand-red hover:underline">
            {BUSINESS.phone}
          </Link>{" "}
          — or fill out the form below and we&apos;ll call you back.
        </p>
        <ServiceRequestForm />
      </div>
    </section>
  );
}
