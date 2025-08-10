import { Section } from "@/components/ui/Section";
import { withPageMeta } from "@/lib/seo";
import Link from "next/link";

export const metadata = withPageMeta({ title: "Leistungen" });

export default function Page() {
  const packages = [
    { name: "Launch", price: "ab 1.400 €", features: ["1 Seite", "Basis‑SEO", "Launch in 1–2 Wochen"] },
    { name: "Business", price: "ab 2.500 €", features: ["bis 5 Seiten", "SEO & Tracking vorbereitet", "CMS optional"] },
    { name: "Pro", price: "ab 4.000 €", features: ["> 5 Seiten", "Module & Integrationen", "Content‑Support"] },
  ];
  return (
    <>
      <Section title="Für wen ist das geeignet?" subtitle="Unternehmen, die schnell sichtbare Ergebnisse wollen.">
        <p className="text-sm text-neutral-800 max-w-2xl">
          Ideal für Teams, die ohne Agentur‑Overhead eine moderne Website aufbauen oder erneuern möchten –
          mit Fokus auf Speed, Klarheit und messbare Resultate.
        </p>
      </Section>
      <Section title="Leistungen" subtitle="Drei klare Pakete – flexibel erweiterbar.">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {packages.map((p) => (
            <div key={p.name} className="rounded-xl border p-6">
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p className="mt-1 text-neutral-600">{p.price}</p>
              <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                {p.features.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
      <Section title="Ablauf" subtitle="Kickoff → Umsetzung → Launch">
        <ol className="grid grid-cols-1 gap-6 sm:grid-cols-3 list-decimal pl-6">
          {["Kickoff","Umsetzung","Launch"].map((s, i) => (
            <li key={i} className="rounded-xl border p-4">
              <div className="font-semibold">{s}</div>
              <p className="mt-2 text-sm text-neutral-700">Kurzbeschreibung des Schritts.</p>
            </li>
          ))}
        </ol>
      </Section>
      <Section title="Warum Digitalwerk IT?" subtitle="Werte, die man spürt.">
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 text-sm text-neutral-800">
          <li className="rounded-lg border p-4">Schnelligkeit ohne Qualitätsverlust</li>
          <li className="rounded-lg border p-4">Messbare Ergebnisse und klares Reporting</li>
          <li className="rounded-lg border p-4">Barrierearme Umsetzung und Performance im Fokus</li>
          <li className="rounded-lg border p-4">Partnerschaftliche Zusammenarbeit auf Augenhöhe</li>
        </ul>
      </Section>
      <Section>
        <Link href="/kontakt" className="inline-block text-sm font-medium underline">Projekt starten</Link>
      </Section>
    </>
  );
}


