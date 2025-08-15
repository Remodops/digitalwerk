import { Section } from "@/components/ui/Section";
import { withPageMeta } from "@/lib/seo";

export const metadata = withPageMeta({ title: "Impressum" });

export default function Page() {
  return (
    <Section title="Impressum" subtitle="Angaben gemäß § 5 TMG (Beispiel – bitte individuelle Daten eintragen)">
      <div className="prose prose-neutral max-w-none">
        <p><strong>Digitalwerk</strong><br/>Musterstraße 1<br/>12345 Musterstadt</p>
        <p>E‑Mail: <a href="mailto:hallo@digitalwerk.example">hallo@digitalwerk.example</a></p>
        <p>USt‑ID: DE123456789</p>
        <p>Verantwortlich für den Inhalt: Max Mustermann</p>
        <h2>Haftung für Inhalte</h2>
        <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte verantwortlich. Nach §§ 8 bis 10 TMG sind wir jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.</p>
        <h2>Haftung für Links</h2>
        <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für diese fremden Inhalte übernehmen wir keine Gewähr.</p>
        <h2>Urheberrecht</h2>
        <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.</p>
      </div>
    </Section>
  );
}


