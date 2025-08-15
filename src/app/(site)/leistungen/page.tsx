import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { withPageMeta } from "@/lib/seo";
import { PageHero } from "@/components/shared/PageHero";
import Link from "next/link";

export const metadata = withPageMeta({ title: "Leistungen" });

export default function Page() {
  const services = [
    {
      title: "Webdesign & Entwicklung",
      points: [
        "Moderne, benutzerfreundliche & maßgeschneiderte Websites",
        "Mobile-optimiertes Responsive Design",
        "Schnelle Ladezeiten & SEO‑Basisoptimierung",
        "Integration von Kontaktformularen, Buchungssystemen oder Shops",
      ],
    },
    {
      title: "Cloud- & Hosting‑Lösungen",
      points: [
        "Einrichtung und Konfiguration von Webhosting (keine laufende Administration)",
        "Domainregistrierung & E‑Mail‑Einrichtung",
        "Migration bestehender Websites auf neue Server",
        "Cloud‑Setup (z. B. AWS) für Webprojekte inkl. Übergabe",
      ],
    },
    {
      title: "Automatisierung & KI‑Integration",
      points: [
        "Wiederkehrende Aufgaben automatisieren – mehr Zeit fürs Kerngeschäft",
        "Chatbots & KI‑Assistenten in Websites integrieren",
        "Datenanbindungen & Schnittstellen (APIs)",
      ],
    },
    {
      title: "Optimierung & Relaunch bestehender Websites",
      points: [
        "Design‑Updates sowie technische & visuelle Modernisierung",
        "Performance‑Optimierung",
        "Verbesserung der Nutzerführung (UX)",
      ],
    },
  ];
  const packages = [
    { name: "Launch", price: "ab 1.400 €", features: ["1 Seite", "Basis‑SEO", "Launch in 2-3 Wochen"] },
    { name: "Business", price: "ab 2.500 €", features: ["bis 5 Seiten", "SEO & Tracking vorbereitet", "Content‑Einpflege (einmalig)"] },
    { name: "Pro", price: "ab 4.000 €", features: ["> 5 Seiten", "Module & Integrationen", "Content‑Integration"] },
  ];
  return (
    <>
      <PageHero title="Leistungen" subtitle="Pakete, Ablauf und Werte – klar strukturiert." bgImageSrc="/images/leistungen/code-laptop.jpg" />
      <Section title="Für wen ist das geeignet?" subtitle="Für Unternehmer, Selbstständige und kleine Teams, die ohne lange Abstimmungswege eine moderne Website möchten – schnell, klar und messbar.">
        <></>
      </Section>
      <Section title="Leistungsbereiche" subtitle="Was wir konkret für dein Projekt umsetzen" className="bg-neutral-50">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {services.map((s) => (
            <Card key={s.title} className="h-full">
              <h3 className="text-lg font-semibold text-neutral-900">{s.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                {s.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="text-neutral-400">•</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>
      <Section title="Pakete" subtitle="Drei klare Pakete – flexibel erweiterbar.">
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
          {["Kickoff","Umsetzung","Launch"].map((s, i) => {
            const desc = {
              Kickoff: "Ziele festlegen, Inhalte und Designideen besprechen.",
              Umsetzung: "Design & Technik entwickeln, Inhalte einpflegen, testen.",
              Launch: "Website live schalten, Übergabe & kurze Einführung.",
            } as const;
            return (
              <li key={i} className="rounded-xl border p-4">
                <div className="font-semibold">{s}</div>
                <p className="mt-2 text-sm text-neutral-700">{desc[s as keyof typeof desc]}</p>
              </li>
            );
          })}
        </ol>
      </Section>
      <Section title="Warum Digitalwerk IT?" subtitle="Werte, die man spürt.">
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 text-sm text-neutral-800">
          <li className="rounded-lg border p-4">Schnelle Umsetzung, ohne Kompromisse bei Qualität</li>
          <li className="rounded-lg border p-4">Messbare Ergebnisse & transparente Kommunikation</li>
          <li className="rounded-lg border p-4">Barrierearm, performant und zukunftssicher</li>
          <li className="rounded-lg border p-4">Direkte Zusammenarbeit – ohne Agentur-Overhead</li>
        </ul>
      </Section>
      <Section>
        <Link href="/kontakt" className="inline-block text-sm font-medium underline">Projekt starten</Link>
      </Section>
    </>
  );
}


