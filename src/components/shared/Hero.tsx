import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="bg-neutral-50 border-b border-neutral-200">
      <Container className="py-16 sm:py-24">
        <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-neutral-900">
          Ergebnisse statt Overhead.
        </h1>
        <p className="mt-4 max-w-2xl text-neutral-700">
          Digitalwerk baut schnelle, barrierearme Websites, die Vertrauen schaffen und konvertieren.
        </p>
      </Container>
    </section>
  );
}


