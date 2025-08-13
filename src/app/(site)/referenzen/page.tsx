import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/shared/PageHero";
import { Section } from "@/components/ui/Section";
import { withPageMeta } from "@/lib/seo";

export const metadata = withPageMeta({ title: "Referenzen" });

const cases = [
  {
    slug: "case-1",
    title: "Case 1",
    imageSrc: "/images/referenzen/admin4me.PNG",
    description: "Kurze Beschreibung folgt.",
  },
  {
    slug: "case-2",
    title: "Case 2",
    imageSrc: "/images/referenzen/website_4pfoetchen.jpg",
    description: "Kurze Beschreibung folgt.",
  },
  {
    slug: "case-3",
    title: "Case 3",
    imageSrc: "/images/referenzen/website_lindigkeit-mertens.jpg",
    description: "Kurze Beschreibung folgt.",
  },
];

export default function Page() {
  return (
    <>
    <PageHero title="Referenzen" subtitle="Problem → Lösung → Ergebnis – echte Resultate." bgImageSrc="/images/referenzen/background.jpg" />
    <Section title="Cases" subtitle="Ausgewählte Projekte im Überblick.">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {cases.map((c) => (
          <div key={c.slug} className="rounded-xl border overflow-hidden">
            <div className="relative h-40 w-full">
              <Image src={c.imageSrc} alt={`${c.title} Vorschau`} fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-neutral-700">{c.description}</p>
              <Link href={`/referenzen/${c.slug}`} className="mt-4 inline-block text-sm font-medium underline">Zum Case</Link>
            </div>
          </div>
        ))}
      </div>
    </Section>
    </>
  );
}


