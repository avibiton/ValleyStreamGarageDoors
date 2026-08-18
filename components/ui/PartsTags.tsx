interface PartsTagsProps {
  tags: readonly string[];
}

export function PartsTags({ tags }: PartsTagsProps) {
  return (
    <div className="flex flex-wrap gap-2 my-5">
      {tags.map((tag) => (
        <span
          key={tag}
          className="inline-block bg-brand-light border border-gray-300 text-gray-700 text-xs font-semibold px-3 py-1 rounded"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
