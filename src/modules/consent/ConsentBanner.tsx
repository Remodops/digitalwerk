'use client';

import { useEffect, useRef, useState } from 'react';
import { ENABLE_CONSENT } from '@/lib/config';

const STORAGE_KEY = 'digitalwerk-consent';

export function ConsentBanner({ onAccept }: { onAccept: () => void }) {
  const [open, setOpen] = useState(false);
  const acceptBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!ENABLE_CONSENT) return;
    const v = localStorage.getItem(STORAGE_KEY);
    if (!v) setOpen(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const t = setTimeout(() => acceptBtnRef.current?.focus(), 0);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!ENABLE_CONSENT || !open) return null;

  return (
    <div className="fixed inset-x-0 bottom-4 z-50" role="dialog" aria-modal="true" aria-labelledby="consent-title">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-2xl border border-neutral-200 bg-white/95 p-4 shadow-xl backdrop-blur">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 justify-between">
            <p id="consent-title" className="text-sm text-neutral-800">
              Wir nutzen optionale Cookies für anonymes Analytics, um die Website zu verbessern. Sie können Ihre Entscheidung jederzeit widerrufen.
            </p>
            <div className="flex gap-2">
              <button
                className="inline-flex items-center justify-center rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2"
                onClick={() => {
                  localStorage.setItem(STORAGE_KEY, 'denied');
                  setOpen(false);
                }}
              >Ablehnen</button>
              <button
                className="inline-flex items-center justify-center rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                ref={acceptBtnRef}
                onClick={() => {
                  localStorage.setItem(STORAGE_KEY, 'granted');
                  setOpen(false);
                  onAccept();
                }}
              >Zustimmen</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


