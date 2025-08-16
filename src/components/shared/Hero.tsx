import { Container } from "@/components/ui/Container";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative border-b border-neutral-200">
      {/* Hintergrundbild */}
      <Image
        src="/images/home/code-2.jpg"
        alt="Code im Hintergrund auf einem Bildschirm"
        fill
        priority
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      {/* Dezente Abdunkelung */}
      <div className="absolute inset-0 -z-10 bg-black/50" />
      {/* Farbverlaufs-Overlay für bessere Lesbarkeit und Tiefe */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      <Container className="relative z-10 py-16 sm:py-24">
        <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white">
          Websites, die verkaufen. Automationen, die entlasten.
        </h1>
        <p className="mt-4 max-w-2xl text-neutral-200">
          Solide Grundlage für messbare Performance und Sichtbarkeit – ohne Agentur‑Overhead.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/kontakt" className="inline-flex items-center justify-center rounded-lg bg-black px-5 py-2.5 text-sm font-semibold text-white hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">Kostenloses Erstgespräch</Link>
          <Link href="/referenzen" className="inline-flex items-center justify-center rounded-lg border border-neutral-300 bg-white px-5 py-2.5 text-sm font-semibold text-black hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2">Projekte ansehen</Link>
        </div>
      </Container>
    </section>
  );
}


