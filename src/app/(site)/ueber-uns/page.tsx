import { Section } from "@/components/ui/Section";
import { withPageMeta } from "@/lib/seo";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";

export const metadata = withPageMeta({ title: "Über uns" });

export default function Page() {
  return (
    <>
      <PageHero title="Über uns" subtitle="Mission, Werte und Kompetenz – klar und greifbar." bgImageSrc="/images/ueber-uns/background.png" />
      <Section title="Mission / Leitbild">
        <p className="text-sm text-neutral-800 max-w-2xl">
          Wir schaffen Websites, die Vertrauen aufbauen und Wachstum ermöglichen – ohne unnötigen Overhead.
        </p>
      </Section>
      <Section title="Was uns besonders macht (USP)">
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 text-sm text-neutral-800">
          <li className="rounded-lg border p-4">Schnelle Umsetzung mit klaren Prozessen</li>
          <li className="rounded-lg border p-4">Messbare Ergebnisse und sauberes Tracking</li>
          <li className="rounded-lg border p-4">Barrierearme, performante Umsetzung</li>
          <li className="rounded-lg border p-4">Partnerschaftliche, persönliche Betreuung</li>
        </ul>
      </Section>
      <Section title="Erfahrung & Kompetenzbereiche">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 text-sm text-neutral-800">
          <div className="rounded-lg border p-4">Web‑Performance & SEO‑Grundlagen</div>
          <div className="rounded-lg border p-4">UX‑Module und skalierbare Komponenten</div>
          <div className="rounded-lg border p-4">Integrationen & Analytics‑Setup</div>
        </div>
      </Section>
      <Section>
        <div className="flex flex-wrap items-center gap-3">
          <Link className="underline" href="/leistungen">Leistungen ansehen</Link>
          <Link className="text-neutral-600 underline" href="/kontakt">Projekt anfragen</Link>
        </div>
      </Section>
    </>
  );
}


