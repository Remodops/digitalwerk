import { Hero } from "@/components/shared/Hero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import Link from "next/link";

export const dynamic = "force-static";

export default function Page() {
  return (
    <>
      <Hero />
      <Section title="Warum Digitalwerk?" subtitle="Kurze Nutzenargumente, die zählen.">
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 text-sm text-neutral-800">
          <li className="rounded-lg border p-4">Schnell: Live in Wochen, nicht Monaten</li>
          <li className="rounded-lg border p-4">Messbar: Setup für Tracking und klare Ziele</li>
          <li className="rounded-lg border p-4">Individuell: Module statt One‑Size‑Fits‑All</li>
          <li className="rounded-lg border p-4">Barrierearm & performant umgesetzt</li>
        </ul>
      </Section>
      <Section title="Leistungen" subtitle="Was wir für dich umsetzen.">
        <Container className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[{name:"Launch",desc:"Schneller Start für kleine Umfänge"},{name:"Business",desc:"Solide Basis mit Wachstumsspielraum"},{name:"Pro",desc:"Komplexe Anforderungen, flexibel"}].map((p) => (
            <div key={p.name} className="rounded-xl border p-6">
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p className="mt-2 text-sm text-neutral-700">{p.desc}</p>
              <Link href="/leistungen" className="mt-4 inline-block text-sm font-medium underline">Mehr erfahren</Link>
            </div>
          ))}
        </Container>
      </Section>
      <Section title="Top‑Referenzen" subtitle="Kurzer Einblick in Ergebnisse.">
        <Container className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {[{title:"Case 1",result:"+32% Leads"},{title:"Case 2",result:"LCP < 2s"}].map((c, i) => (
            <div key={i} className="rounded-lg border p-4">
              <div className="font-semibold">{c.title}</div>
              <div className="mt-2 text-sm text-neutral-700">Ergebnis: {c.result}</div>
              <Link href="/referenzen" className="mt-3 inline-block text-sm underline">Zum Projekt</Link>
            </div>
          ))}
        </Container>
      </Section>
      <Section title="Vertrauen" subtitle="Ausgewählte Partner & Nachweise.">
        <div className="flex flex-wrap items-center gap-6 opacity-80">
          {[
            "/next.svg",
            "/vercel.svg",
            "/globe.svg",
            "/window.svg",
          ].map((src) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={src} src={src} alt="Logo" className="h-8" />
          ))}
        </div>
      </Section>
      <Section title="Bereit für Ergebnisse?">
        <div className="flex flex-wrap items-center gap-3">
          <Link className="underline" href="/kontakt">Angebot anfragen</Link>
          <Link className="text-neutral-600 underline" href="/leistungen">Zu den Leistungen</Link>
        </div>
      </Section>
    </>
  );
}


