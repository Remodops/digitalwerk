import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { withPageMeta } from "@/lib/seo";
import { caseSlugs, cases } from "@/data/cases";

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
  const item = cases.find((c) => c.slug === slug)!;
  return (
    <Section title={item.title} subtitle={item.description}>
      <article className="prose prose-neutral max-w-none">
        <h2>Problem</h2>
        <p>{item.problem}</p>
        <h2>Lösung</h2>
        <p>{item.solution}</p>
        <h2>Ergebnis</h2>
        <p>{item.result}</p>
      </article>
    </Section>
  );
}


