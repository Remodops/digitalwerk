import { Section } from "@/components/ui/Section";
import { withPageMeta } from "@/lib/seo";

export const metadata = withPageMeta({ title: "Datenschutz" });

export default function Page() {
  return (
    <Section title="Datenschutz" subtitle="Hinweise nach DSGVO (Platzhalter)">
      <div className="prose prose-neutral max-w-none">
        <p>Hier folgen strukturierte Platzhaltertexte zu Zwecken, Rechtsgrundlagen, Speicherdauer, Empfängern und Rechten der Betroffenen. Keine Rechtsberatung.</p>
      </div>
    </Section>
  );
}


