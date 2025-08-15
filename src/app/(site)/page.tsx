import { Hero } from "@/components/shared/Hero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import Image from "next/image";
import { cases } from "@/data/cases";

export const dynamic = "force-static";

export default function Page() {
  return (
    <>
      <Hero />
      <Section title="Warum Digitalwerk?" subtitle="Die 3 Säulen unseres Angebots.">
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3 text-sm text-neutral-800">
          <li className="rounded-lg border p-4">
            <div className="font-medium">Schnell & Effizient</div>
            <p className="mt-1 text-neutral-700">Fertigstellung in 3–7 Tagen – ohne unnötigen Ballast.</p>
          </li>
          <li className="rounded-lg border p-4">
            <div className="font-medium">Messbar</div>
            <p className="mt-1 text-neutral-700">Von Ladezeit bis Conversion – transparent nachweisbar.</p>
          </li>
          <li className="rounded-lg border p-4">
            <div className="font-medium">Direkt</div>
            <p className="mt-1 text-neutral-700">Dein Projekt, ein Ansprechpartner, null Bürokratie.</p>
          </li>
        </ul>
      </Section>
      <Section title="Leistungsteaser" subtitle="Kurzüberblick – Details auf der Leistungsseite.">
        <Container className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[{name:"Kickstart",desc:"Für kleine, fokussierte Projekte."},{name:"Wachstum",desc:"Mehr Seiten, mehr Funktionen, mehr Leads."},{name:"Individuell",desc:"Maßgeschneiderte Lösungen für komplexe Anforderungen."}].map((p) => (
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
          {cases.slice(-2).reverse().map((c) => (
            <div key={c.slug} className="rounded-lg border overflow-hidden">
              <div className="relative h-32 w-full">
                <Image src={c.imageSrc} alt={`${c.title} Vorschau`} fill className="object-cover" />
              </div>
              <div className="p-4">
                <div className="font-semibold">{c.title}</div>
                <div className="mt-2 text-sm text-neutral-700">{c.description}</div>
                <Link href={`/referenzen/${c.slug}`} className="mt-3 inline-block text-sm underline">Zur Referenz</Link>
              </div>
            </div>
          ))}
        </Container>
      </Section>
      {/* Vertrauen-Sektion entfernt */}
      <Section title="Lass uns deine Website in 7 Tagen live bringen." subtitle="20 Minuten Call – Ziel, Umfang, Festpreis.">
        <div className="flex flex-wrap items-center gap-3">
          <Link href="/kontakt" className="inline-flex items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800">Projekt anfragen</Link>
          <Link href="/referenzen" className="inline-flex items-center justify-center rounded-md border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-black hover:bg-neutral-50">Referenzen ansehen</Link>
        </div>
      </Section>
    </>
  );
}


