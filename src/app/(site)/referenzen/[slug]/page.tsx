import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { withPageMeta } from "@/lib/seo";
import { caseSlugs } from "@/data/cases";

type Params = { slug: string };

const CASES = new Set(caseSlugs);

export async function generateStaticParams() {
  return Array.from(CASES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  return withPageMeta({ title: `Referenz – ${slug}` });
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  if (!CASES.has(slug)) return notFound();
  return (
    <Section title={`Referenz: ${slug}`} subtitle="Dummy‑Inhalt (MDX später)">
      <article className="prose prose-neutral max-w-none">
        <h2>Problem</h2>
        <p>Beschreibung des Ausgangszustands.</p>
        <h2>Lösung</h2>
        <p>Welche Maßnahmen wurden umgesetzt?</p>
        <h2>Ergebnis</h2>
        <p>Konkrete Kennzahlen und qualitative Effekte.</p>
      </article>
    </Section>
  );
}


