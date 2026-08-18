interface TrustBarProps {
  items?: string[];
}

const DEFAULT_ITEMS = [
  "📞 Real Technician Answers",
  "⚡ Same-Day Dispatch",
  "📝 Free Written Estimate",
  "🛡 Written Warranty",
  "⭐ 5.0 · 187 Reviews",
];

export function TrustBar({ items = DEFAULT_ITEMS }: TrustBarProps) {
  return (
    <div className="bg-brand-red text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2.5 flex flex-wrap justify-center gap-x-6 gap-y-1">
        {items.map((item) => (
          <span key={item} className="text-xs sm:text-sm font-semibold tracking-wide">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
