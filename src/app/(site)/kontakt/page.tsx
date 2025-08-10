import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { withPageMeta } from "@/lib/seo";
import { ENABLE_CONTACT_FORM } from "@/lib/config";
import { ContactForm } from "@/modules/contact/ContactForm";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export const metadata = withPageMeta({ title: "Kontakt" });

export default function Page() {
  return (
    <Section title="Kontakt" subtitle="Wir melden uns schnellstmöglich.">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div>
          {ENABLE_CONTACT_FORM ? (
            <ContactForm />
          ) : (
            <PlaceholderContactForm />
          )}
          {!ENABLE_CONTACT_FORM && (
            <p className="mt-4 text-sm text-neutral-700">
              Kontaktformular ist derzeit deaktiviert. Schreib uns per E‑Mail: {" "}
              <Link className="underline" href="mailto:hallo@digitalwerk.example">hallo@digitalwerk.example</Link>
            </p>
          )}
        </div>
        <div>
          <Card>
            <h3 className="text-lg font-semibold text-neutral-900">Alternativ per Messenger</h3>
            <p className="mt-1 text-neutral-600">Scanne den QR‑Code oder nutze die Links.</p>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex flex-col items-center text-center">
                <QrPlaceholder label="Telegram" />
                <a
                  className="mt-3 text-sm font-medium text-sky-700 underline"
                  href="https://t.me/your_handle"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  In Telegram öffnen
                </a>
              </div>
              <div className="flex flex-col items-center text-center">
                <QrPlaceholder label="WhatsApp" />
                <a
                  className="mt-3 text-sm font-medium text-green-700 underline"
                  href="https://wa.me/491234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  In WhatsApp öffnen
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
}

function PlaceholderContactForm() {
  return (
    <form aria-describedby="contact-placeholder-note" className="max-w-lg space-y-4">
      <p id="contact-placeholder-note" className="text-sm text-neutral-600">
        Platzhalter – das Formular ist noch nicht aktiv. Absenden ist derzeit nicht möglich.
      </p>
      <div>
        <label htmlFor="ph-name" className="block text-sm font-medium text-neutral-800">Name*</label>
        <Input id="ph-name" name="name" required aria-required="true" />
      </div>
      <div>
        <label htmlFor="ph-email" className="block text-sm font-medium text-neutral-800">E‑Mail*</label>
        <Input id="ph-email" name="email" type="email" required aria-required="true" />
      </div>
      <div>
        <label htmlFor="ph-phone" className="block text-sm font-medium text-neutral-800">Telefon</label>
        <Input id="ph-phone" name="phone" type="tel" placeholder="+49 … (optional)" />
      </div>
      <div>
        <label htmlFor="ph-subject" className="block text-sm font-medium text-neutral-800">Betreff</label>
        <Input id="ph-subject" name="subject" placeholder="Kurzer Betreff (optional)" />
      </div>
      <div>
        <label htmlFor="ph-message" className="block text-sm font-medium text-neutral-800">Nachricht*</label>
        <textarea
          id="ph-message"
          name="message"
          required
          aria-required="true"
          rows={5}
          className="block w-full rounded-md border border-neutral-300 px-3 py-2 text-sm shadow-sm focus:border-sky-600 focus:ring-2 focus:ring-sky-600/20"
        />
      </div>
      <div className="flex items-start gap-3">
        <input
          id="ph-privacyConsent"
          name="privacyConsent"
          type="checkbox"
          required
          aria-required="true"
          className="mt-1 h-4 w-4 rounded border-neutral-300 text-sky-600 focus:ring-sky-600"
        />
        <label htmlFor="ph-privacyConsent" className="text-sm text-neutral-800">
          Ich stimme den{' '}
          <Link href="/datenschutz" className="underline">
            Datenschutzbestimmungen
          </Link>{' '}
          zu.
        </label>
      </div>
      <div>
        <Button type="button" disabled>
          Absenden (bald verfügbar)
        </Button>
      </div>
    </form>
  );
}

function QrPlaceholder({ label }: { label: string }) {
  return (
    <div className="w-40">
      <div className="aspect-square w-full rounded-lg border border-dashed border-neutral-300 bg-neutral-50 grid place-items-center text-neutral-400">
        <span className="text-xs">QR‑Code {label}</span>
      </div>
    </div>
  );
}


