"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { BUSINESS } from "@/lib/constants";

type Status = "idle" | "submitting" | "success" | "error";

const FORM_NAME = "service-request";

const inputClass =
  "w-full border border-gray-300 rounded px-4 py-3 text-sm text-brand-black bg-white focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-brand-red";
const labelClass =
  "block font-display font-bold text-brand-black text-xs uppercase tracking-wide mb-1.5";

export function ServiceRequestForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("submitting");
    try {
      const data = new FormData(form);
      const body = new URLSearchParams();
      data.forEach((value, key) => body.append(key, String(value)));
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (!res.ok) throw new Error(`Form submission failed: ${res.status}`);
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="bg-white rounded border-t-4 border-brand-red shadow-sm p-6 text-center"
      >
        <p className="font-display font-bold text-brand-black text-lg uppercase tracking-wide mb-2">
          Thank you — request received
        </p>
        <p className="text-gray-600 text-sm leading-relaxed">
          We&apos;ll call you back as soon as possible. Need help right now? Call{" "}
          <Link href={BUSINESS.phoneHref} className="font-bold text-brand-red hover:underline">
            {BUSINESS.phone}
          </Link>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      name={FORM_NAME}
      method="POST"
      onSubmit={handleSubmit}
      className="bg-white rounded border-t-4 border-brand-red shadow-sm p-6 space-y-4"
    >
      <input type="hidden" name="form-name" value={FORM_NAME} />
      <p className="hidden" aria-hidden="true">
        <label>
          Don&apos;t fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="sr-name" className={labelClass}>
            Name
          </label>
          <input id="sr-name" name="name" type="text" required autoComplete="name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="sr-phone" className={labelClass}>
            Phone
          </label>
          <input id="sr-phone" name="phone" type="tel" required autoComplete="tel" className={inputClass} />
        </div>
      </div>
      <div>
        <label htmlFor="sr-town" className={labelClass}>
          Town / ZIP
        </label>
        <input id="sr-town" name="town" type="text" required className={inputClass} />
      </div>
      <div>
        <label htmlFor="sr-problem" className={labelClass}>
          Describe the problem
        </label>
        <textarea id="sr-problem" name="problem" rows={4} required className={inputClass} />
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm text-brand-red font-semibold">
          Sorry, your request could not be sent. Please call us at{" "}
          <Link href={BUSINESS.phoneHref} className="underline">
            {BUSINESS.phone}
          </Link>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-brand-black text-white font-display font-bold uppercase text-sm tracking-wide px-6 py-3.5 rounded hover:bg-brand-red transition-colors disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send Request"}
      </button>
    </form>
  );
}
