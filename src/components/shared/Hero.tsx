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
          Ergebnisse statt Overhead.
        </h1>
        <p className="mt-4 max-w-2xl text-neutral-200">
          Schnelle, sichere Websites, die Vertrauen schaffen und Kunden gewinnen.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/kontakt" className="inline-flex items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800">Projekt anfragen</Link>
          <Link href="/referenzen" className="inline-flex items-center justify-center rounded-md border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-black hover:bg-neutral-50">Referenzen ansehen</Link>
        </div>
      </Container>
    </section>
  );
}


