import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-20 text-center">
      <h1 className="text-3xl font-semibold">Seite nicht gefunden</h1>
      <p className="mt-2 text-neutral-700">Die angeforderte Seite existiert nicht.</p>
      <p className="mt-6"><Link className="underline" href="/">Zur Startseite</Link></p>
    </div>
  );
}


