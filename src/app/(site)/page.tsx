import { Hero } from "@/components/shared/Hero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import Image from "next/image";

export const dynamic = "force-static";

export default function Page() {
  return (
    <>
      <Hero />
      <Section title="Warum Digitalwerk?" subtitle="Die 3 Säulen unseres Angebots.">
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3 text-sm text-neutral-800">
          <li className="rounded-lg border p-4">
            <div className="font-medium">Schnell & effizient</div>
            <p className="mt-1 text-neutral-700">Fertigstellung in 1–2 Wochen – ohne unnötigen Overhead.</p>
          </li>
          <li className="rounded-lg border p-4">
            <div className="font-medium">Messbare Ergebnisse</div>
            <p className="mt-1 text-neutral-700">Von Ladezeit‑Optimierung bis SEO – alles trackbar.</p>
          </li>
          <li className="rounded-lg border p-4">
            <div className="font-medium">Persönliche Betreuung</div>
            <p className="mt-1 text-neutral-700">Direkter Ansprechpartner, kein Ticket‑Wirrwarr.</p>
          </li>
        </ul>
      </Section>
      <Section title="Leistungsteaser" subtitle="Kurzüberblick – Details auf der Leistungsseite.">
        <Container className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[{name:"Launch",desc:"Ideal für den schnellen Start kleiner Projekte."},{name:"Business",desc:"Mehr Seiten, mehr Möglichkeiten, Wachstum inklusive."},{name:"Pro",desc:"Für komplexe Anforderungen und maximale Flexibilität."}].map((p) => (
            <div key={p.name} className="rounded-xl border p-6">
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p className="mt-2 text-sm text-neutral-700">{p.desc}</p>
              <Link href="/leistungen" className="mt-4 inline-block text-sm font-medium underline">Details ansehen</Link>
            </div>
          ))}
        </Container>
      </Section>
      <Section title="Referenzen‑Highlight" subtitle="Einblick in Ergebnisse.">
        <Container className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {[{title:"Case 1",result:"+32% Leads durch neue Landingpage"},{title:"Case 2",result:"LCP < 2s dank Performance‑Optimierung"}].map((c, i) => (
            <div key={i} className="rounded-lg border overflow-hidden">
              <div className="relative h-32 w-full">
                <Image src="/images/referenzen/background.jpg" alt="Projektvorschau" fill className="object-cover" />
              </div>
              <div className="p-4">
                <div className="font-semibold">{c.title}</div>
                <div className="mt-2 text-sm text-neutral-700">Ergebnis: {c.result}</div>
                <Link href="/referenzen" className="mt-3 inline-block text-sm underline">Alle Referenzen ansehen</Link>
              </div>
            </div>
          ))}
        </Container>
      </Section>
      <Section title="Vertrauen" subtitle="Ausgewählte Technologien & Nachweise.">
        <div className="flex flex-wrap items-center gap-6 opacity-80">
          {[
            "/next.svg",
            "/vercel.svg",
            "/globe.svg",
            "/window.svg",
          ].map((src) => (
            <Image key={src} src={src} alt="Logo" width={32} height={32} className="h-8 w-auto" />
          ))}
        </div>
      </Section>
      <Section title="Lassen Sie uns Ihr Projekt in die Realität umsetzen – jetzt unverbindlich anfragen.">
        <div className="flex flex-wrap items-center gap-3">
          <Link href="/kontakt" className="inline-flex items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800">Projekt anfragen</Link>
          <Link href="/referenzen" className="inline-flex items-center justify-center rounded-md border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-black hover:bg-neutral-50">Referenzen ansehen</Link>
        </div>
      </Section>
    </>
  );
}


