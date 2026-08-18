"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-2">
      {items.map((item, i) => (
        <div key={i} className="border border-gray-200 rounded overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
            className="w-full text-left flex items-center justify-between gap-4 px-5 py-4 bg-white hover:bg-brand-light transition-colors font-display font-bold text-brand-black text-sm uppercase tracking-wide focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-red"
          >
            <span className="flex-1">{item.question}</span>
            <span
              className={`text-brand-red flex-shrink-0 transition-transform duration-200 ${
                openIndex === i ? "rotate-180" : ""
              }`}
              aria-hidden="true"
            >
              ▼
            </span>
          </button>
          {openIndex === i && (
            <div className="px-5 py-4 bg-white border-t border-gray-100">
              <p className="text-gray-600 text-sm leading-relaxed">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
