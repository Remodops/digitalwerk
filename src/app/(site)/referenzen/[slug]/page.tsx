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
  const item = cases.find((c) => c.slug === slug);
  return withPageMeta({ title: item ? `Referenz – ${item.title}` : `Referenz – ${slug}`, description: item?.description });
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  if (!CASES.has(slug)) return notFound();
  const item = cases.find((c) => c.slug === slug)!;
  return (
    <Section title={item.title} subtitle={item.description}>
      <div className="mt-4">
        <a href={item.url} target="_blank" rel="noopener noreferrer" className="inline-block text-sm font-medium underline">Zur Website</a>
      </div>
    </Section>
  );
}


