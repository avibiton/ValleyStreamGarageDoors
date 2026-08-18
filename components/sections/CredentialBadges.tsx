const BADGES = [
  "✅ Nassau County HIC Licensed & Insured",
  "⭐ LiftMaster Authorized Dealer",
  "🔧 15+ Years Experience",
  "📞 24/7 Emergency Service",
  "📝 Free Written Estimate",
  "🛡 Written Warranty Every Job",
];

export function CredentialBadges() {
  return (
    <div className="bg-brand-black py-4 border-b border-brand-gold/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
          {BADGES.map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center gap-1.5 bg-brand-black text-brand-gold border border-brand-gold/40 px-3 py-1.5 rounded text-[11px] font-bold tracking-wide uppercase"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
