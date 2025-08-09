'use client';

import { useEffect, useState } from 'react';
import { ENABLE_CONSENT } from '@/lib/config';

const STORAGE_KEY = 'digitalwerk-consent';

export function ConsentBanner({ onAccept }: { onAccept: () => void }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!ENABLE_CONSENT) return;
    const v = localStorage.getItem(STORAGE_KEY);
    if (!v) setOpen(true);
  }, []);

  if (!ENABLE_CONSENT || !open) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-neutral-200 bg-white/95 p-4 backdrop-blur">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center gap-3 justify-between">
        <p className="text-sm text-neutral-800">Wir verwenden optionale Cookies für anonymes Analytics – nur nach Ihrer Zustimmung.</p>
        <div className="flex gap-2">
          <button
            className="rounded-md border px-3 py-2 text-sm"
            onClick={() => {
              localStorage.setItem(STORAGE_KEY, 'denied');
              setOpen(false);
            }}
          >Ablehnen</button>
          <button
            className="rounded-md bg-black px-3 py-2 text-sm text-white"
            onClick={() => {
              localStorage.setItem(STORAGE_KEY, 'granted');
              setOpen(false);
              onAccept();
            }}
          >Zustimmen</button>
        </div>
      </div>
    </div>
  );
}


