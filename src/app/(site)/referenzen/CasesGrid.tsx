'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { CaseData } from '@/data/cases';

export type CaseItem = Pick<CaseData, 'slug' | 'title' | 'imageSrc' | 'description' | 'problem' | 'solution' | 'result'>;

type CasesGridProps = {
  items: CaseItem[];
};

export function CasesGrid({ items }: CasesGridProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const close = useCallback(() => setLightboxIndex(null), []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') setLightboxIndex((idx) => (idx === null ? null : (idx + 1) % items.length));
      if (e.key === 'ArrowLeft') setLightboxIndex((idx) => (idx === null ? null : (idx - 1 + items.length) % items.length));
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [lightboxIndex, items.length, close]);

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {items.map((c, index) => (
          <div key={c.slug} className="rounded-xl border overflow-hidden">
            <button
              type="button"
              className="group relative block h-40 w-full focus:outline-none"
              onClick={() => setLightboxIndex(index)}
              aria-label={`${c.title} vergrößert anzeigen`}
            >
              <div className="absolute inset-0">
                <Image src={c.imageSrc} alt={`${c.title} Vorschau`} fill className="object-cover" />
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
          aria-label="Bildanzeige"
          className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4"
          onClick={close}
        >
          <div className="relative max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
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
              className="absolute -top-3 -right-3 rounded-full bg-white/90 px-3 py-1 text-sm font-medium shadow hover:bg-white"
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


