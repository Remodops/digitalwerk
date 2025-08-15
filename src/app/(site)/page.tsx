import { Hero } from "@/components/shared/Hero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { cases } from "@/data/cases";
import { HighlightCases } from "@/components/home/HighlightCases";
import { withPageMeta } from "@/lib/seo";

export const dynamic = "force-static";
export const metadata = withPageMeta({
  title: "Digitalwerk",
  description: "Go‑Live in 2–3 Wochen: messbar mehr Anfragen ohne Agentur‑Overhead. Klare Prozesse, saubere Technik, starke Ergebnisse.",
});

export default function Page() {
  return (
    <>
      <Hero />
      <Section title="Warum Digitalwerk?" subtitle="Was Sie konkret davon haben – die 3 Säulen unseres Angebots." className="pt-10">
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3 text-sm text-neutral-800">
          <li className="rounded-lg border p-4">
            <div className="font-medium">Schnell zum Ergebnis</div>
            <p className="mt-1 text-neutral-700">Go‑Live in 2–3 Wochen – mehr Anfragen ohne Agentur‑Overhead.</p>
          </li>
          <li className="rounded-lg border p-4">
            <div className="font-medium">Messbar mehr Wirkung</div>
            <p className="mt-1 text-neutral-700">Von Ladezeit bis Conversion – Kennzahlen transparent nachvollziehbar.</p>
          </li>
          <li className="rounded-lg border p-4">
            <div className="font-medium">Direkte Zusammenarbeit</div>
            <p className="mt-1 text-neutral-700">Ein Ansprechpartner, klare Prozesse – Sie sparen Zeit und Nerven.</p>
          </li>
        </ul>
      </Section>
      <Section title="Leistungsteaser" subtitle="Kurzüberblick – Details auf der Leistungsseite." className="pt-6">
        <Container className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[{name:"Kickstart",desc:"Für kleine, fokussierte Projekte."},{name:"Wachstum",desc:"Mehr Seiten, mehr Funktionen, mehr Leads."},{name:"Individuell",desc:"Maßgeschneiderte Lösungen für komplexe Anforderungen."}].map((p) => (
            <div key={p.name} className="rounded-xl border p-6">
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p className="mt-2 text-sm text-neutral-700">{p.desc}</p>
              <Link href="/leistungen" className="mt-4 inline-block text-sm font-medium underline">Details ansehen</Link>
            </div>
          ))}
        </Container>
      </Section>
      <Section className="pt-2" title="Bereit für den nächsten Schritt?" subtitle="20 Minuten Call – Ziel, Umfang, Festpreis.">
        <div className="flex flex-wrap items-center gap-3">
          <Link href="/kontakt" className="inline-flex items-center justify-center rounded-lg bg-black px-5 py-2.5 text-sm font-semibold text-white hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">Kostenloses Erstgespräch</Link>
          <Link href="/referenzen" className="inline-flex items-center justify-center rounded-lg border border-neutral-300 bg-white px-5 py-2.5 text-sm font-semibold text-black hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2">Projekte ansehen</Link>
        </div>
      </Section>
      <Section title="Referenzen‑Highlight" subtitle="Einblick in Ergebnisse.">
        <Container>
          <HighlightCases items={cases.slice(-2).reverse()} />
        </Container>
      </Section>
      {/* Vertrauen-Sektion entfernt */}
      <Section title="Lass uns deine Website live bringen." subtitle="20 Minuten Call – Ziel, Umfang, Festpreis.">
        <div className="flex flex-wrap items-center gap-3">
          <Link href="/kontakt" className="inline-flex items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800">Projekt anfragen</Link>
          <Link href="/referenzen" className="inline-flex items-center justify-center rounded-md border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-black hover:bg-neutral-50">Referenzen ansehen</Link>
        </div>
      </Section>
    </>
  );
}


