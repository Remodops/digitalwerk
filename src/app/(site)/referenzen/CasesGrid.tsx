'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { CaseData } from '@/data/cases';

export type CaseItem = Pick<CaseData, 'slug' | 'title' | 'imageSrc' | 'description' | 'problem' | 'solution' | 'result'>;

type CasesGridProps = {
  items: CaseItem[];
};

export function CasesGrid({ items }: CasesGridProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const previouslyFocusedElementRef = useRef<HTMLElement | null>(null);

  const close = useCallback(() => setLightboxIndex(null), []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        e.preventDefault();
        close();
      }
      if (e.key === 'ArrowRight') setLightboxIndex((idx) => (idx === null ? null : (idx + 1) % items.length));
      if (e.key === 'ArrowLeft') setLightboxIndex((idx) => (idx === null ? null : (idx - 1 + items.length) % items.length));
    }
    // Scroll sperren
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    // Close-Button fokussieren
    setTimeout(() => closeButtonRef.current?.focus(), 0);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', onKeyDown);
      // Fokus zurück auf den Auslöser
      previouslyFocusedElementRef.current?.focus();
    };
  }, [lightboxIndex, items.length, close]);

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {items.map((c, index) => (
          <div key={c.slug} className="group rounded-xl border overflow-hidden">
            <button
              type="button"
              className="group relative block h-40 w-full focus:outline-none"
              onClick={(e) => {
                previouslyFocusedElementRef.current = document.activeElement as HTMLElement;
                setLightboxIndex(index);
              }}
              aria-label={`${c.title} vergrößert anzeigen`}
            >
              <div className="absolute inset-0">
                <Image src={c.imageSrc} alt={`${c.title} Vorschau`} fill className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]" />
              </div>
              <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/10" />
            </button>
            <div className="p-6">
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-neutral-700">{c.description}</p>
              <div className="mt-3 space-y-1 text-sm text-neutral-700">
                <p><span className="font-medium">Problem:</span> {c.problem}</p>
                <p><span className="font-medium">Lösung:</span> {c.solution}</p>
                <p><span className="font-medium">Ergebnis:</span> {c.result}</p>
              </div>
              <Link href={`/referenzen/${c.slug}`} className="mt-4 inline-block text-sm font-medium underline">Zur Website</Link>
            </div>
          </div>
        ))}
      </div>

      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
          className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4"
          onClick={close}
          onKeyDown={(e) => {
            if (e.key === 'Tab') {
              // Fokus im Dialog halten (nur der Schließen-Button ist fokussierbar)
              e.preventDefault();
              closeButtonRef.current?.focus();
            }
          }}
        >
          <div className="relative max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <h2 id="lightbox-title" className="sr-only">{items[lightboxIndex].title} – Bildanzeige</h2>
            <div className="relative mx-auto w-full aspect-[16/10] sm:aspect-[16/9] md:aspect-[3/2] lg:aspect-[2/1] bg-black/20 rounded-lg overflow-hidden">
              <Image
                src={items[lightboxIndex].imageSrc}
                alt={`${items[lightboxIndex].title} groß`}
                fill
                className="object-contain"
                priority
              />
            </div>
            <button
              type="button"
              onClick={close}
              ref={closeButtonRef}
              className="absolute -top-3 -right-3 rounded-full bg-white/90 px-3 py-1 text-sm font-medium shadow hover:bg-white focus:outline-none focus:ring-2 focus:ring-black"
              aria-label="Schließen"
            >
              Schließen
            </button>
          </div>
        </div>
      )}
    </>
  );
}


