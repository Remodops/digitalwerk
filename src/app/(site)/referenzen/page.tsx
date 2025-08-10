import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
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
    <>
    <PageHero title="Referenzen" subtitle="Problem → Lösung → Ergebnis – echte Resultate." bgImageSrc="/images/referenzen/case-placeholder.jpg" />
    <Section title="Cases" subtitle="Ausgewählte Projekte im Überblick.">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {cases.map((c) => (
          <div key={c.slug} className="rounded-xl border overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/window.svg" alt={`${c.title} Vorschau`} className="h-32 w-full object-cover" />
            <div className="p-6">
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-neutral-700">Problem: {c.problem}</p>
              <p className="text-sm text-neutral-700">Lösung: {c.solution}</p>
              <p className="text-sm text-neutral-700">Ergebnis: {c.result}</p>
              <blockquote className="mt-3 border-l-2 pl-3 text-sm text-neutral-700">„Kurzes Kunden‑Zitat als Testimonial.“</blockquote>
              <Link href={`/referenzen/${c.slug}`} className="mt-4 inline-block text-sm font-medium underline">Zum Case</Link>
            </div>
          </div>
        ))}
      </div>
    </Section>
    </>
  );
}


