import { Section } from "@/components/ui/Section";
import { withPageMeta } from "@/lib/seo";

export const metadata = withPageMeta({ title: "Datenschutz", description: "Hinweise nach DSGVO – Beispieltexte, keine Rechtsberatung." });

export default function Page() {
  return (
    <Section title="Datenschutz" subtitle="Hinweise nach DSGVO (Beispiel – keine Rechtsberatung)">
      <div className="prose prose-neutral max-w-none">
        <h2>Allgemeine Hinweise</h2>
        <p>Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist.</p>
        <h2>Zwecke und Rechtsgrundlagen</h2>
        <p>Rechtsgrundlagen sind insbesondere Art. 6 Abs. 1 lit. a, b und f DSGVO.</p>
        <h2>Speicherdauer</h2>
        <p>Personenbezogene Daten werden gelöscht, sobald der Zweck der Speicherung entfällt.</p>
        <h2>Empfänger</h2>
        <p>Eine Weitergabe an Auftragsverarbeiter erfolgt nur im Rahmen einer vertraglichen Grundlage gemäß Art. 28 DSGVO.</p>
        <h2>Betroffenenrechte</h2>
        <p>Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Widerspruch sowie Datenübertragbarkeit.</p>
      </div>
    </Section>
  );
}


