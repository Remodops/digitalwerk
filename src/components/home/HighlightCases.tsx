'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export type HighlightCaseItem = {
  slug: string;
  title: string;
  imageSrc: string;
  description: string;
};

export function HighlightCases({ items }: { items: HighlightCaseItem[] }) {
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
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {items.map((c, i) => (
          <div key={c.slug} className="group rounded-lg border overflow-hidden">
            <button
              type="button"
              className="relative block h-32 w-full focus:outline-none"
              onClick={() => setLightboxIndex(i)}
              aria-label={`${c.title} vergrößert anzeigen`}
            >
              <Image src={c.imageSrc} alt={`${c.title} – Projektvorschau`} fill className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/10" />
            </button>
            <div className="p-4">
              <div className="font-semibold">{c.title}</div>
              <div className="mt-2 text-sm text-neutral-700">{c.description}</div>
              <Link href="/referenzen" className="mt-3 inline-block text-sm underline">Mehr ansehen</Link>
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
                alt={`${items[lightboxIndex].title} – Bild in groß`}
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


