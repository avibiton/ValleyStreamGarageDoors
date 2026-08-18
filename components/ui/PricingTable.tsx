interface PricingRow {
  service: string;
  price: string;
  warranty: string;
}

interface PricingTableProps {
  rows: PricingRow[];
  thirdCol?: string;
}

export function PricingTable({ rows, thirdCol = "Warranty" }: PricingTableProps) {
  return (
    <div className="overflow-x-auto rounded border border-gray-200">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-brand-black text-white">
            <th className="text-left px-4 py-3 font-display font-bold uppercase tracking-wide text-xs">
              Service
            </th>
            <th className="text-left px-4 py-3 font-display font-bold uppercase tracking-wide text-xs">
              Starting Price
            </th>
            <th className="text-left px-4 py-3 font-display font-bold uppercase tracking-wide text-xs">
              {thirdCol}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={i % 2 === 0 ? "bg-white" : "bg-brand-light"}
            >
              <td className="px-4 py-3 text-gray-700">{row.service}</td>
              <td className="px-4 py-3 font-bold text-brand-black">{row.price}</td>
              <td className="px-4 py-3 text-gray-500">{row.warranty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
