import { Section } from "@/components/ui/Section";
import { withPageMeta } from "@/lib/seo";

export const metadata = withPageMeta({ title: "Impressum" });

export default function Page() {
  return (
    <Section title="Impressum" subtitle="Angaben gemäß § 5 TMG">
      <div className="space-y-2 text-sm text-neutral-800">
        <p>Digitalwerk</p>
        <p>Musterstraße 1, 12345 Musterstadt</p>
        <p>E‑Mail: hallo@digitalwerk.example</p>
        <p>USt‑ID: DE123456789</p>
        <p>Verantwortlich für den Inhalt: Max Mustermann</p>
      </div>
    </Section>
  );
}


