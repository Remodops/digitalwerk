import { Section } from "@/components/ui/Section";
import { withPageMeta } from "@/lib/seo";

export const metadata = withPageMeta({ title: "Leistungen" });

export default function Page() {
  const packages = [
    { name: "Launch", price: "ab 1.400 €", features: ["1 Seite", "Basis‑SEO", "Launch in 1–2 Wochen"] },
    { name: "Business", price: "ab 2.500 €", features: ["bis 5 Seiten", "SEO & Tracking vorbereitet", "CMS optional"] },
    { name: "Pro", price: "ab 4.000 €", features: ["> 5 Seiten", "Module & Integrationen", "Content‑Support"] },
  ];
  return (
    <Section title="Leistungen" subtitle="Drei klare Pakete – flexibel erweiterbar.">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {packages.map((p) => (
          <div key={p.name} className="rounded-xl border p-6">
            <h3 className="text-lg font-semibold">{p.name}</h3>
            <p className="mt-1 text-neutral-600">{p.price}</p>
            <ul className="mt-4 space-y-2 text-sm text-neutral-700">
              {p.features.map((f) => (
                <li key={f}>• {f}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}


