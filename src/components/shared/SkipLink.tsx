import Link from "next/link";
import { SKIP_TARGET_ID } from "@/lib/a11y";

export function SkipLink() {
  return (
    <Link
      href={`#${SKIP_TARGET_ID}`}
      className="sr-only focus:not-sr-only fixed left-4 top-4 z-[100] rounded bg-black px-3 py-2 text-white"
    >
      Zum Inhalt springen
    </Link>
  );
}


