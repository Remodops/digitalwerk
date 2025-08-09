'use client';

export default function Error({ error }: { error: Error & { digest?: string } }) {
  return (
    <div className="mx-auto max-w-2xl px-4 py-20 text-center">
      <h1 className="text-3xl font-semibold">Ein Fehler ist aufgetreten</h1>
      <p className="mt-2 text-neutral-700">Bitte lade die Seite neu. {error?.digest && `(Code: ${error.digest})`}</p>
    </div>
  );
}


