import { Container } from "@/components/ui/Container";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative border-b border-neutral-200">
      {/* Hintergrundbild */}
      <Image
        src="/images/home/code-2.jpg"
        alt="Code-Hintergrund"
        fill
        priority
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      {/* Dunkles Overlay für bessere Lesbarkeit */}
      <div className="absolute inset-0 -z-10 bg-black/60" />
      <Container className="py-16 sm:py-24">
        <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white">
          Websites, die verkaufen. Automationen, die entlasten.
        </h1>
        <p className="mt-4 max-w-2xl text-neutral-200">
          Ihre Website bringt Ihnen in 2–3 Wochen messbar mehr Anfragen – ohne Agentur‑Overhead.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/kontakt" className="inline-flex items-center justify-center rounded-lg bg-black px-5 py-2.5 text-sm font-semibold text-white hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">Kostenloses Erstgespräch</Link>
          <Link href="/referenzen" className="inline-flex items-center justify-center rounded-lg border border-neutral-300 bg-white px-5 py-2.5 text-sm font-semibold text-black hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2">Projekte ansehen</Link>
        </div>
      </Container>
    </section>
  );
}


