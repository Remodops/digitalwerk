'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export function ContactForm() {
  const [state, setState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState('submitting');
    // Pseudocode: send to API or external service
    // await fetch('/api/contact', { method: 'POST', body: new FormData(e.currentTarget) })
    await new Promise((r) => setTimeout(r, 600));
    setState('success');
  }

  return (
    <form onSubmit={onSubmit} aria-describedby="contact-note" className="max-w-lg space-y-4">
      <p id="contact-note" className="text-sm text-neutral-600">
        Alle Felder mit * sind Pflichtfelder. Wir speichern Ihre Daten ausschließlich zur Bearbeitung der Anfrage.
      </p>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-neutral-800">Name*</label>
        <Input id="name" name="name" required autoComplete="name" aria-required="true" />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-neutral-800">E‑Mail*</label>
        <Input id="email" name="email" type="email" required autoComplete="email" aria-required="true" />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-neutral-800">Telefon</label>
        <Input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+49 … (optional)" />
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-neutral-800">Betreff</label>
        <Input id="subject" name="subject" autoComplete="off" placeholder="Kurzer Betreff (optional)" />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral-800">Nachricht*</label>
        <textarea id="message" name="message" required aria-required="true" rows={5} className="block w-full rounded-md border border-neutral-300 px-3 py-2 text-sm shadow-sm focus:border-sky-600 focus:ring-2 focus:ring-sky-600/20" />
      </div>
      <div className="flex items-start gap-3">
        <input
          id="privacyConsent"
          name="privacyConsent"
          type="checkbox"
          required
          aria-required="true"
          className="mt-1 h-4 w-4 rounded border-neutral-300 text-sky-600 focus:ring-sky-600"
        />
        <label htmlFor="privacyConsent" className="text-sm text-neutral-800">
          Ich stimme den{' '}
          <Link href="/datenschutz" className="underline">
            Datenschutzbestimmungen
          </Link>{' '}
          zu.
        </label>
      </div>
      {/* Honeypot/Rate‑Limit Pseudocode: */}
      {/* <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" /> */}
      {/* Server: if company filled => spam; implement ip-based rate limit */}
      <div>
        <Button type="submit" disabled={state === 'submitting'}>
          {state === 'submitting' ? 'Senden…' : 'Absenden'}
        </Button>
        {state === 'success' && <span role="status" className="ml-3 text-sm text-green-700">Danke! Wir melden uns.</span>}
        {state === 'error' && <span role="status" className="ml-3 text-sm text-red-700">Fehler beim Senden.</span>}
      </div>
    </form>
  );
}


