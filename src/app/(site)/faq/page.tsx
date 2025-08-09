import { Section } from "@/components/ui/Section";
import { FaqList } from "@/components/shared/FaqList";
import { withPageMeta } from "@/lib/seo";
import { JsonLd, faqPage } from "@/lib/schema";

export const metadata = withPageMeta({ title: "FAQ" });

const faqs = Array.from({ length: 10 }).map((_, i) => ({
  q: `Frage ${i + 1}?`,
  a: "Kurze, klare Antwort in 1–2 Sätzen.",
}));

export default function Page() {
  return (
    <Section title="FAQ" subtitle="Häufige Fragen, kurz beantwortet.">
      <FaqList faqs={faqs} />
      <JsonLd data={faqPage(faqs.map(({ q, a }) => ({ question: q, answer: a })))} />
    </Section>
  );
}


