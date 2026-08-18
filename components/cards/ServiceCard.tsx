import Link from "next/link";

interface ServiceCardProps {
  icon: string;
  name: string;
  description: string;
  href: string;
  linkLabel: string;
}

export function ServiceCard({ icon, name, description, href, linkLabel }: ServiceCardProps) {
  return (
    <div className="bg-white border border-gray-200 border-t-4 border-t-brand-red rounded p-6 text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
      <span className="text-3xl mb-3 block">{icon}</span>
      <div className="font-display font-bold text-brand-black text-base uppercase tracking-wide mb-2">
        {name}
      </div>
      <p className="text-gray-500 text-sm leading-relaxed mb-4">{description}</p>
      <Link
        href={href}
        className="text-brand-red font-bold text-xs uppercase tracking-wide hover:underline"
      >
        {linkLabel} →
      </Link>
    </div>
  );
}
