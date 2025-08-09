import { Card } from "@/components/ui/Card";

const plans = [
  { name: "Launch", price: "ab 1.400 €", features: ["1 Seite", "Basis‑SEO", "Launch in 1–2 Wochen"] },
  { name: "Business", price: "ab 2.500 €", features: ["bis 5 Seiten", "SEO & Tracking vorbereitet", "CMS optional"] },
  { name: "Pro", price: "ab 4.000 €", features: ["> 5 Seiten", "Module & Integrationen", "Content‑Support"] },
];

export function PricingTable() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
      {plans.map((p) => (
        <Card key={p.name}>
          <h3 className="text-lg font-semibold">{p.name}</h3>
          <p className="mt-1 text-neutral-600">{p.price}</p>
          <ul className="mt-4 space-y-2 text-sm text-neutral-700">
            {p.features.map((f) => (
              <li key={f}>• {f}</li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  );
}


