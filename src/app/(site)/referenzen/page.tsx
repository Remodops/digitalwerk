import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { withPageMeta } from "@/lib/seo";

export const metadata = withPageMeta({ title: "Referenzen" });

const cases = [
  { slug: "case-1", title: "Case 1", problem: "Unklare Positionierung", solution: "Neue Landingpage", result: "+32% Leads" },
  { slug: "case-2", title: "Case 2", problem: "Langsame Seite", solution: "Performance‑Optimierung", result: "LCP < 2s" },
  { slug: "case-3", title: "Case 3", problem: "Niedrige Conversion", solution: "Struktur & CTA", result: "+21% CR" },
];

export default function Page() {
  return (
    <Section title="Referenzen" subtitle="Problem → Lösung → Ergebnis.">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {cases.map((c) => (
          <Link key={c.slug} href={`/referenzen/${c.slug}`} className="rounded-xl border p-6 hover:bg-neutral-50">
            <h3 className="text-lg font-semibold">{c.title}</h3>
            <p className="mt-2 text-sm text-neutral-700">Problem: {c.problem}</p>
            <p className="text-sm text-neutral-700">Lösung: {c.solution}</p>
            <p className="text-sm text-neutral-700">Ergebnis: {c.result}</p>
          </Link>
        ))}
      </div>
    </Section>
  );
}


