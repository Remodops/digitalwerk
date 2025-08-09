export function FaqList({ faqs }: { faqs: Array<{ q: string; a: string }> }) {
  return (
    <div className="divide-y divide-neutral-200">
      {faqs.map((f, i) => (
        <details key={i} className="py-4 group">
          <summary className="cursor-pointer text-neutral-900 font-medium group-open:text-sky-700">{f.q}</summary>
          <p className="mt-2 text-neutral-700">{f.a}</p>
        </details>
      ))}
    </div>
  );
}


