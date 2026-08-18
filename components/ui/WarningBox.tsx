import Link from "next/link";
import { BUSINESS } from "@/lib/constants";

interface WarningBoxProps {
  text: string;
}

export function WarningBox({ text }: WarningBoxProps) {
  return (
    <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r p-4 my-6">
      <p className="text-amber-900 text-sm leading-relaxed">
        ⚠️ <strong>STOP USING YOUR DOOR IF:</strong>{" "}
        {text.replace(/Call \(516\) 612-6706/g, "")}{" "}
        Call{" "}
        <Link
          href={BUSINESS.phoneHref}
          className="text-amber-700 font-bold underline hover:no-underline"
        >
          {BUSINESS.phone}
        </Link>{" "}
        — same-day emergency service.
      </p>
    </div>
  );
}
