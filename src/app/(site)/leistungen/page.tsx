import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { withPageMeta } from "@/lib/seo";
import { PageHero } from "@/components/shared/PageHero";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata = withPageMeta({ title: "Leistungen", description: "Klare Leistungen, transparente Preise, schnelle Umsetzung. Von der modernen Website bis zur sicheren Cloud‑Lösung – alles ohne Agentur‑Overhead." });

export default function Page() {
  const services = [
    {
      title: "Webdesign & Entwicklung",
      icon: "🌐",
      description:
        "Maßgeschneiderte Websites, die modern aussehen, auf allen Geräten perfekt laufen und schnell gefunden werden.",
    },
    {
      title: "Cloud- & Hosting‑Lösungen",
      icon: "☁️",
      description:
        "Sichere und skalierbare Infrastruktur – von Domain & Mail bis zum Cloud‑Setup. Fix & fertig übergeben.",
    },
    {
      title: "Automatisierung & KI‑Integration",
      icon: "🤖",
      description:
        "Wiederkehrende Aufgaben automatisieren – mit Chatbots, KI‑Assistenten und smarten Schnittstellen.",
    },
    {
      title: "Optimierung & Relaunch",
      icon: "🚀",
      description:
        "Ihre Website wirkt veraltet? Wir bringen sie technisch, visuell und in Sachen Performance auf den neuesten Stand.",
    },
  ];
  const packages = [
    {
      name: "Launch",
      price: "ab 1.500 €",
      features: [
        "Perfekt für den Start – eine Seite, optimiert für Google & mobil. Fertigstellung i. d. R. in 2–3 Wochen.",
      ],
    },
    {
      name: "Business",
      price: "ab 2.500 €",
      features: [
        "Bis zu 5 Seiten, inkl. SEO‑Grundlage & Content‑Einpflege. Ideal für Selbstständige & kleine Unternehmen.",
      ],
    },
    {
      name: "Pro",
      price: "ab 4.000 €",
      features: [
        "Für wachsende Unternehmen – mehr als 5 Seiten, individuelle Module und tiefe Integrationen.",
      ],
    },
  ];
  return (
    <>
      <PageHero title="Leistungen" subtitle="Klare Leistungen, transparente Preise, schnelle Umsetzung. Von der modernen Website bis zur sicheren Cloud‑Lösung – alles ohne Agentur‑Overhead." bgImageSrc="/images/leistungen/code-laptop.jpg" bgImageAlt="Laptop mit Code auf dem Bildschirm" />
      <Section title="Für wen ist das geeignet?" subtitle="Ideal für Selbstständige, Unternehmer und kleine Teams, die schnell eine professionelle Website möchten – ohne lange Abstimmungen, ohne versteckte Kosten.">
        <div className="mt-2">
          <Link href="/kontakt"><Button variant="accent" className="mt-2">Projekt starten</Button></Link>
        </div>
      </Section>
      <Section title="Leistungsbereiche" subtitle="Was wir konkret für dein Projekt umsetzen" className="bg-neutral-50">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {services.map((s) => (
            <Card key={s.title} className="h-full">
              <div className="flex items-center gap-2">
                <span aria-hidden className="text-xl">{s.icon}</span>
                <h3 className="text-lg font-semibold text-neutral-900">{s.title}</h3>
              </div>
              <p className="mt-3 text-sm text-neutral-700">{s.description}</p>
              <div className="mt-4">
                <Link href="/kontakt" className="text-sm font-medium underline">→ Projekt starten</Link>
              </div>
            </Card>
          ))}
        </div>
      </Section>
      <Section title="Pakete" subtitle="Drei klare Pakete – flexibel erweiterbar.">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {packages.map((p) => (
            <div key={p.name} className="rounded-xl border bg-neutral-50 p-6 shadow-sm">
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p className="mt-1 text-neutral-600">{p.price}</p>
              <div className="mt-4 space-y-2 text-sm text-neutral-700">
                {p.features.map((f) => (
                  <p key={f}>{f}</p>
                ))}
              </div>
              <div className="mt-4">
                <Link href="/kontakt"><Button variant="accent" className="w-full">Projekt starten</Button></Link>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-neutral-600">Individuelle Projekte kalkuliere ich flexibel nach Umfang – die Pakete dienen zur Orientierung.</p>
      </Section>
      <Section title="Ablauf" subtitle="Kickoff → Umsetzung → Launch">
        <ol className="grid grid-cols-1 gap-6 sm:grid-cols-3 list-decimal pl-6">
          {["Kickoff","Umsetzung","Launch"].map((s, i) => {
            const desc = {
              Kickoff: "Ziele, Inhalte & Designideen festlegen.",
              Umsetzung: "Website entwickeln, Inhalte einpflegen, Technik testen.",
              Launch: "Live‑Schaltung, Übergabe & kurze Einführung.",
            } as const;
            return (
              <li key={i} className="rounded-xl border p-4">
                <div className="font-semibold">{s}</div>
                <p className="mt-2 text-sm text-neutral-700">{desc[s as keyof typeof desc]}</p>
              </li>
            );
          })}
        </ol>
        <div className="mt-4">
          <Link href="/kontakt"><Button variant="accent">Projekt starten</Button></Link>
        </div>
      </Section>
      <Section title="Warum Digitalwerk IT?" subtitle="Werte, die man spürt.">
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 text-sm text-neutral-800">
          <li className="rounded-lg border p-4">Schnelle Umsetzung – ohne Abstriche bei Qualität</li>
          <li className="rounded-lg border p-4">Messbare Ergebnisse & klare Kommunikation</li>
          <li className="rounded-lg border p-4">Zukunftssichere, performante Websites</li>
          <li className="rounded-lg border p-4">Direkte Zusammenarbeit – ohne Agentur‑Overhead</li>
        </ul>
      </Section>
      <Section>
        <Link href="/kontakt"><Button variant="accent">Projekt starten</Button></Link>
      </Section>
    </>
  );
}


