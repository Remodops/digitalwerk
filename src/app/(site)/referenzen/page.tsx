import { PageHero } from "@/components/shared/PageHero";
import { Section } from "@/components/ui/Section";
import { withPageMeta } from "@/lib/seo";
import { CasesGrid } from "./CasesGrid";

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
      <CasesGrid items={cases} />
    </Section>
    </>
  );
}


