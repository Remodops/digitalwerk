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
      icon: "🚀",
      price: "ab 1.500 €",
      features: [
        "Perfekt für den Start – eine Seite, optimiert für Google & mobil. Fertigstellung i. d. R. in 2–3 Wochen.",
      ],
    },
    {
      name: "Business",
      icon: "💼",
      price: "ab 2.500 €",
      features: [
        "Bis zu 5 Seiten, inkl. SEO‑Grundlage & Content‑Einpflege. Ideal für Selbstständige & kleine Unternehmen.",
      ],
    },
    {
      name: "Pro",
      icon: "🧩",
      price: "ab 4.000 €",
      features: [
        "Für wachsende Unternehmen – mehr als 5 Seiten, individuelle Module und tiefe Integrationen.",
      ],
    },
  ];
  const carePackages = [
    {
      name: "Basic",
      priceMonthly: "50 €/Monat",
      features: [
        "Hosting + SSL",
        "Backups & Updates",
        "Kein Support enthalten; Änderungen separat 100 €/h",
      ],
    },
    {
      name: "Business",
      priceMonthly: "100 €/Monat",
      features: [
        "Alles aus Basic",
        "Kleine Änderungen (bis 1 h/Monat)",
        "Monitoring & Performance‑Optimierung",
      ],
    },
    {
      name: "Premium",
      priceMonthly: "200 €/Monat",
      features: [
        "Alles aus Business",
        "Änderungen, Contentpflege & kleinere Designanpassungen (bis 4 h/Monat)",
        "Prioritätssupport",
      ],
    },
  ];
  return (
    <>
      <PageHero title="Leistungen" subtitle="Klare Leistungen, transparente Preise, schnelle Umsetzung. Von der modernen Website bis zur sicheren Cloud‑Lösung – alles ohne Agentur‑Overhead." bgImageSrc="/images/leistungen/code-laptop.jpg" bgImageAlt="Laptop mit Code auf dem Bildschirm" />
      <Section title="Für wen ist das geeignet?" subtitle="Ideal für Selbstständige, Unternehmer und kleine Teams, die schnell eine professionelle Website möchten – ohne lange Abstimmungen, ohne versteckte Kosten." className="py-6 sm:py-8">
        <div className="mt-2">
          <Link href="/kontakt"><Button variant="accent" className="mt-2">Projekt starten</Button></Link>
        </div>
        <div className="mt-4">
          <Link href="#preise"><Button variant="secondary" className="inline-flex items-center gap-2">
            <span aria-hidden>↓</span>
            <span>Zu den Preisen</span>
          </Button></Link>
        </div>
      </Section>
      <Section title="Leistungsbereiche" subtitle="Was wir konkret für dein Projekt umsetzen" className="bg-neutral-50 py-6 sm:py-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {services.map((s, i) => {
            const iconBg = ["bg-emerald-50", "bg-sky-50", "bg-violet-50", "bg-amber-50"][i % 4];
            const cardAltBg = i % 2 === 1 ? "bg-neutral-50" : "";
            return (
              <Card key={s.title} className={`h-full p-5 ${cardAltBg}`}>
                <div className="flex items-center gap-3">
                  <span aria-hidden className={`flex h-8 w-8 items-center justify-center rounded-full ${iconBg}`}>{s.icon}</span>
                  <h3 className="text-lg font-semibold text-neutral-900">{s.title}</h3>
                </div>
                <p className="mt-3 text-sm text-neutral-700">{s.description}</p>
                <div className="mt-3">
                  <Link href="/kontakt" className="text-sm font-medium underline">→ Projekt starten</Link>
                </div>
              </Card>
            );
          })}
        </div>
      </Section>
      <Section id="preise" title="Pakete" subtitle="Drei klare Pakete – flexibel erweiterbar." className="py-6 sm:py-8">
        <p className="text-sm text-neutral-700 mb-3">Transparente Preise – flexibel erweiterbar, ohne versteckte Kosten.</p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {packages.map((p) => (
            <div key={p.name} className="rounded-xl border bg-neutral-50 p-5 shadow-sm flex h-full flex-col">
              <div className="flex items-center gap-2">
                <span aria-hidden className="text-xl">{p.icon}</span>
                <h3 className="text-lg font-semibold">{p.name}</h3>
              </div>
              <p className="mt-1 text-neutral-600">{p.price}</p>
              <div className="mt-3 space-y-2 text-sm text-neutral-700">
                {p.features.map((f) => (
                  <p key={f}>{f}</p>
                ))}
              </div>
              <div className="mt-auto pt-3">
                <Link href="/kontakt"><Button variant="accent" className="w-full">Paket wählen</Button></Link>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-neutral-600">Individuelle Projekte kalkuliere ich flexibel nach Umfang – die Pakete dienen zur Orientierung.</p>
      </Section>
      <Section title="Optionale Pakete" className="py-6 sm:py-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {carePackages.map((p) => (
            <div key={p.name} className="rounded-xl border bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p className="mt-1 text-neutral-600">{p.priceMonthly}</p>
              <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2"><span className="text-neutral-400">•</span><span>{f}</span></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
      
      <Section title="Ablauf" subtitle="Kickoff → Entwurf/Feedback → Umsetzung → Test/Feinschliff → Launch" className="py-6 sm:py-8">
        <div>
          <ol className="grid grid-cols-1 gap-y-4 sm:grid-cols-5 sm:gap-0">
            {[{ key: "Kickoff", icon: "🤝" }, { key: "Entwurf / Feedback", icon: "📝" }, { key: "Umsetzung", icon: "💻" }, { key: "Test / Feinschliff", icon: "🧪" }, { key: "Launch", icon: "🚀" }].map((step, i, arr) => {
              const desc = {
                Kickoff: "Ziele, Inhalte & Designideen festlegen.",
                "Entwurf / Feedback": "Erste Entwürfe, Feedbackrunde & Anpassungen.",
                Umsetzung: "Website entwickeln, Inhalte einpflegen, Technik testen.",
                "Test / Feinschliff": "Qualitätssicherung, letzte Details & Performance.",
                Launch: "Live‑Schaltung, Übergabe & kurze Einführung.",
              } as const;
              return (
                <li key={i} className="flex flex-col items-center text-center">
                  <div className="text-xs font-semibold text-neutral-500">{i + 1}.</div>
                  <div className="relative mt-1 w-full h-12">
                    {i > 0 && (
                      <div className="absolute left-0 right-[calc(50%+24px)] top-1/2 -translate-y-1/2 hidden h-px bg-neutral-200 z-0 sm:block" aria-hidden />
                    )}
                    {i < arr.length - 1 && (
                      <div className="absolute left-[calc(50%+24px)] right-0 top-1/2 -translate-y-1/2 hidden h-px bg-neutral-200 z-0 sm:block" aria-hidden />
                    )}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white ring-1 ring-neutral-200">
                      <span className="text-xl" aria-hidden>{step.icon}</span>
                    </div>
                  </div>
                  <div className="mt-3 font-semibold">{step.key}</div>
                  <p className="mt-2 text-sm text-neutral-700 max-w-[32ch] mx-auto sm:mx-0 leading-relaxed">{desc[step.key as keyof typeof desc]}</p>
                  {step.key === "Launch" && (
                    <div className="mt-3">
                      <Link href="/kontakt"><Button variant="accent" className="text-xs px-3 py-1.5">Go Live</Button></Link>
                    </div>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </Section>
      <Section title="Warum Digitalwerk IT?" subtitle="Werte, die man spürt." className="py-8 sm:py-10">
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 text-sm text-neutral-800">
          <li className="rounded-lg border p-4">Schnelle Umsetzung – ohne Abstriche bei Qualität</li>
          <li className="rounded-lg border p-4">Messbare Ergebnisse & klare Kommunikation</li>
          <li className="rounded-lg border p-4">Zukunftssichere, performante Websites</li>
          <li className="rounded-lg border p-4">Direkte Zusammenarbeit – ohne Agentur‑Overhead</li>
        </ul>
      </Section>
      <Section className="py-6 sm:py-8">
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
      <Section className="py-6 sm:py-8">
        <Link href="/kontakt"><Button variant="accent">Jetzt unverbindlich anfragen</Button></Link>
      </Section>
    </>
  );
}


