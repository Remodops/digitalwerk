import { Section } from "@/components/ui/Section";
import { withPageMeta } from "@/lib/seo";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { Card } from "@/components/ui/Card";

export const metadata = withPageMeta({ title: "Über uns", description: "Mission, Werte und Kompetenz – persönlich und greifbar." });

export default function Page() {
  return (
    <>
      <PageHero title="Mehr als Websites: Ihr Partner für digitale Klarheit & Wachstum" subtitle="Mission, Werte und Kompetenz – persönlich und greifbar." bgImageSrc="/images/ueber-uns/background.png" bgImageAlt="Team- und Kompetenzhintergrund" />
      <Section title="Mission / Leitbild">
        <p className="text-sm text-neutral-800 max-w-2xl">
          Wir entwickeln Websites, die Vertrauen schaffen und messbar zum Wachstum beitragen – transparent, effizient und ohne unnötige Komplexität.
        </p>
      </Section>
      <Section title="Was uns besonders macht (USP)" className="bg-neutral-50">
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 text-sm text-neutral-800">
          <li className="rounded-lg border p-4 bg-white">Planbare Ergebnisse durch klare Prozesse</li>
          <li className="rounded-lg border p-4 bg-white">Transparente Ergebnisse durch präzises Tracking</li>
          <li className="rounded-lg border p-4 bg-white">Schnelle, zugängliche Websites mit Top-Performance</li>
          <li className="rounded-lg border p-4 bg-white">Ihr persönlicher Ansprechpartner – ohne Umwege</li>
        </ul>
      </Section>
      <Section title="Erfahrung & Kompetenzbereiche" className="bg-neutral-50">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 text-sm text-neutral-800">
          <div className="rounded-lg border p-4 bg-white">Schnelle Ladezeiten und SEO‑Basis für bessere Sichtbarkeit</div>
          <div className="rounded-lg border p-4 bg-white">Flexibles Design, das mit Ihrem Unternehmen wächst</div>
          <div className="rounded-lg border p-4 bg-white">Nahtlose Anbindungen & Tracking für datenbasierte Entscheidungen</div>
        </div>
      </Section>
      <Section title="Wie wir arbeiten">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Card className="p-5">
            <p className="text-neutral-800 text-sm">
              Keine monatelangen Agenturprozesse: Ihre Website steht in wenigen Wochen. Wöchentliche Abstimmungen (z. B. via Zoom) sorgen dafür, dass alles Schritt für Schritt in die richtige Richtung geht – bis es 100 % zu Ihrem Unternehmen passt.
            </p>
          </Card>
          <Card className="p-5">
            <p className="text-neutral-800 text-sm">
              Bei Digitalwerk IT gibt es keine anonyme Fließbandarbeit. Ich nehme mir die Zeit, Ihre Wünsche wirklich zu verstehen und individuell umzusetzen. Das bedeutet: direkte Kommunikation, schnelle Reaktion und Lösungen, die auf Sie zugeschnitten sind – nicht auf den Standard einer Großagentur.
            </p>
          </Card>
        </div>
      </Section>
      <Section>
        <div className="flex flex-wrap items-center gap-3">
          <Link href="/kontakt" className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2">Projekt anfragen</Link>
          <Link href="/leistungen" className="inline-flex items-center justify-center rounded-lg bg-white text-black border border-neutral-300 px-5 py-2.5 text-sm font-semibold hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2">Leistungen ansehen</Link>
        </div>
      </Section>
    </>
  );
}


