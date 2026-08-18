import type { Review } from "@/data/reviews";

export function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="bg-white rounded border-t-4 border-brand-red shadow-sm p-6">
      <div className="text-amber-400 text-base mb-3">★★★★★</div>
      <p className="text-gray-600 text-sm leading-relaxed italic mb-4">
        &ldquo;{review.text}&rdquo;
      </p>
      <div className="text-gray-400 text-xs font-bold uppercase tracking-wide">
        {review.author} &mdash; {review.location}
      </div>
    </div>
  );
}
