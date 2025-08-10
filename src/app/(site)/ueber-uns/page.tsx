import { Section } from "@/components/ui/Section";
import { withPageMeta } from "@/lib/seo";

export const metadata = withPageMeta({ title: "Über uns" });

export default function Page() {
  return (
    <>
      <Section title="Über uns" subtitle="Vision, Werte, Erfahrung.">
        <div className="prose prose-neutral max-w-none">
          <p>
            Wir sind Digitalwerk IT – fokussiert auf schnelle, messbare Marketing‑Sites
            mit starker UX und Performance. Unser Anspruch: Ergebnisse statt Overhead.
          </p>
        </div>
      </Section>
      <Section title="Unsere Werte">
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 text-sm text-neutral-800">
          <li className="rounded-lg border p-4">Klarheit in Kommunikation und Ergebnissen</li>
          <li className="rounded-lg border p-4">Verantwortung für Qualität und Barrierefreiheit</li>
          <li className="rounded-lg border p-4">Pragmatische, effiziente Arbeitsweise</li>
          <li className="rounded-lg border p-4">Partnerschaftlich und verlässlich</li>
        </ul>
      </Section>
      <Section title="Erfahrung & Spezialisierung">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 text-sm text-neutral-800">
          <div className="rounded-lg border p-4">Web‑Performance & SEO‑Grundlagen</div>
          <div className="rounded-lg border p-4">UX‑Module und skalierbare Komponenten</div>
          <div className="rounded-lg border p-4">Integrationen & Analytics‑Setup</div>
        </div>
      </Section>
      <Section title="Wir arbeiten effizient, weil wir…">
        <ul className="list-disc pl-5 text-sm text-neutral-800">
          <li>klare Prozesse und Checklisten nutzen,</li>
          <li>Templates gezielt einsetzen statt neu zu erfinden,</li>
          <li>und Entscheidungen mit Daten untermauern.</li>
        </ul>
      </Section>
    </>
  );
}


