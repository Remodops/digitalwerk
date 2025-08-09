import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { withPageMeta } from "@/lib/seo";
import { ENABLE_CONTACT_FORM } from "@/lib/config";
import { ContactForm } from "@/modules/contact/ContactForm";

export const metadata = withPageMeta({ title: "Kontakt" });

export default function Page() {
  return (
    <Section title="Kontakt" subtitle="Wir melden uns schnellstmöglich.">
      {ENABLE_CONTACT_FORM ? (
        <ContactForm />
      ) : (
        <p className="text-neutral-700">
          Kontaktformular ist derzeit deaktiviert. Schreib uns per E‑Mail: {" "}
          <Link className="underline" href="mailto:hallo@digitalwerk.example">hallo@digitalwerk.example</Link>
        </p>
      )}
    </Section>
  );
}


