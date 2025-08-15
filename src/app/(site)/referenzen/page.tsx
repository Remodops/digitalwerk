import { PageHero } from "@/components/shared/PageHero";
import { Section } from "@/components/ui/Section";
import { withPageMeta } from "@/lib/seo";
import { CasesGrid } from "./CasesGrid";
import { cases } from "@/data/cases";

export const metadata = withPageMeta({
  title: "Referenzen",
  description: "Ausgewählte Projekte: Problem, Lösung und Ergebnis im Überblick.",
});

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


