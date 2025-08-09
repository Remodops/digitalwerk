import { Section } from "@/components/ui/Section";
import { withPageMeta } from "@/lib/seo";

export const metadata = withPageMeta({ title: "Prozess" });

export default function Page() {
  const steps = [
    "Kickoff & Ziele",
    "Recherche & Scope",
    "Informationsarchitektur",
    "Design & Prototyp",
    "Implementierung",
    "Launch & Übergabe",
  ];
  return (
    <Section title="Prozess" subtitle="In 6 klaren Schritten zum Ergebnis.">
      <ol className="grid grid-cols-1 gap-6 sm:grid-cols-3 list-decimal pl-6">
        {steps.map((s, i) => (
          <li key={i} className="rounded-xl border p-4">
            <div className="font-semibold">{s}</div>
            <p className="mt-2 text-sm text-neutral-700">Kurzbeschreibung des Schritts.</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}


