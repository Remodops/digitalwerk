import { PageHero } from "@/components/shared/PageHero";
import { Section } from "@/components/ui/Section";
import { withPageMeta } from "@/lib/seo";
import { CasesGrid } from "./CasesGrid";

export const metadata = withPageMeta({ title: "Referenzen" });

const cases = [
  {
    slug: "case-1",
    title: "admin4me",
    imageSrc: "/images/referenzen/admin4me.PNG",
    description: "IT-Administrator- und Support",
  },
  {
    slug: "case-2",
    title: "Hundepension Christiane Herkt",
    imageSrc: "/images/referenzen/website_4pfoetchen.jpg",
    description: "Hundepension",
  },
  {
    slug: "case-3",
    title: "Lindigkeit | Mertens",
    imageSrc: "/images/referenzen/website_lindigkeit-mertens.jpg",
    description: "Rechtsanwalt, Kanzlei und Notariat",
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


