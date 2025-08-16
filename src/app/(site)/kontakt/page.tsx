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
    <Section title="Kontakt" subtitle="Wir melden uns innerhalb von 24 Stunden.">
      <div className="space-y-8">
        <div className="max-w-2xl">
          {ENABLE_CONTACT_FORM ? (
            <ContactForm />
          ) : (
            <PlaceholderContactForm />
          )}
          {!ENABLE_CONTACT_FORM && (
            <div className="mt-4 space-y-3">
              <p className="text-sm text-neutral-700">
                Am einfachsten erreichst du uns aktuell per E‑Mail oder WhatsApp Business:
              </p>
              <div className="inline-flex items-center gap-2 rounded-lg bg-neutral-50 px-3 py-2 border border-neutral-200">
                <span className="text-neutral-600">✉️</span>
                <Link 
                  className="text-sm font-medium text-neutral-900 underline decoration-sky-500 underline-offset-2 hover:decoration-2" 
                  href="mailto:hallo@digitalwerk.example"
                >
                  hallo@digitalwerk.example
                </Link>
              </div>
            </div>
          )}
        </div>
        
        {!ENABLE_CONTACT_FORM && (
          <div className="max-w-lg">
            <Card>
              <h3 className="text-lg font-semibold text-neutral-900">WhatsApp Business</h3>
              <p className="mt-1 text-neutral-600">Für schnelle Anfragen und direkten Kontakt.</p>
              <div className="mt-4">
                <a
                  className="inline-flex items-center gap-2 text-sm font-medium text-green-700 underline"
                  href="https://wa.me/491234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📱 In WhatsApp öffnen
                </a>
              </div>
            </Card>
          </div>
        )}
      </div>
    </Section>
  );
}

function PlaceholderContactForm() {
  return (
    <form aria-describedby="contact-placeholder-note" className="max-w-lg space-y-4">
      <p id="contact-placeholder-note" className="text-sm text-neutral-600">
        Das Kontaktformular ist aktuell in Vorbereitung. Bitte nutze solange unsere E-Mail-Adresse oder WhatsApp Business.
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
          Ich habe die{' '}
          <Link href="/datenschutz" className="underline">
            Datenschutzerklärung
          </Link>{' '}
          gelesen und stimme zu.
        </label>
      </div>
      <div>
        <Button type="button" disabled className="opacity-50 cursor-not-allowed">
          Absenden
        </Button>
        <p className="mt-2 text-xs text-neutral-500">
          Das Formular ist noch nicht aktiv. Nutze bitte unsere E-Mail oder WhatsApp Business.
        </p>
      </div>
    </form>
  );
}




