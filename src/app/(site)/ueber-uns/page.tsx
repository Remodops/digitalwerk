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
      <Section title="Was uns besonders macht" className="bg-neutral-50">
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
      <Section title="So läuft die Zusammenarbeit mit Digitalwerk" className="bg-neutral-50">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Card className="p-5">
            <div className="mb-2">
              <span aria-hidden className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 dark:bg-neutral-800">⏱️</span>
            </div>
            <p className="text-neutral-800 text-sm">
              Keine endlosen Agenturprozesse: Ihre Website steht in wenigen Wochen. 
            </p>
            <p className="text-neutral-800 text-sm mt-2">
              Wöchentliche Abstimmungen (z. B. via Zoom) stellen sicher, dass jedes Detail Schritt für Schritt in die richtige Richtung geht – bis es 100 % zu Ihrem Unternehmen passt.
            </p>
          </Card>
          <Card className="p-5">
            <div className="mb-2">
              <span aria-hidden className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-50 dark:bg-neutral-800">💬</span>
            </div>
            <p className="text-neutral-800 text-sm">
              Keine anonyme Fließbandarbeit: Bei Digitalwerk haben Sie direkten Kontakt.
            </p>
            <p className="text-neutral-800 text-sm mt-2">
              Ich nehme mir die Zeit, Ihre Wünsche wirklich zu verstehen und individuell umzusetzen. Das bedeutet: klare Kommunikation, schnelle Reaktion und Lösungen, die exakt auf Sie zugeschnitten sind – nicht auf den Standard einer Großagentur.
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


