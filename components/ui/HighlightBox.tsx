interface HighlightBoxProps {
  heading?: string;
  children: React.ReactNode;
}

export function HighlightBox({ heading, children }: HighlightBoxProps) {
  return (
    <div className="bg-brand-light border-l-4 border-brand-red rounded-r p-5 my-6">
      {heading && (
        <p className="font-bold text-brand-black text-sm mb-1">{heading}</p>
      )}
      <div className="text-gray-700 text-sm leading-relaxed">{children}</div>
    </div>
  );
}
