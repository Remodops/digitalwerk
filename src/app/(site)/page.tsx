import { Hero } from "@/components/shared/Hero";
import { Section } from "@/components/ui/Section";
import { PricingTable } from "@/components/shared/PricingTable";
import { Container } from "@/components/ui/Container";
import Link from "next/link";

export const dynamic = "force-static";

export default function Page() {
  return (
    <>
      <Hero />
      <Section title="Kernleistungen" subtitle="Schnell, klar, messbar.">
        <PricingTable />
      </Section>
      <Section title="Referenzen" subtitle="Beispiele echter Projekte.">
        <Container className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="rounded-lg border p-4">Case {String(i + 1).padStart(2, "0")}</div>
          ))}
        </Container>
      </Section>
      <Section title="Bereit für Ergebnisse?">
        <div className="flex flex-wrap items-center gap-3">
          <Link className="underline" href="/kontakt">Projekt anfragen</Link>
          <Link className="text-neutral-600 underline" href="/referenzen">Mehr Referenzen</Link>
        </div>
      </Section>
    </>
  );
}


