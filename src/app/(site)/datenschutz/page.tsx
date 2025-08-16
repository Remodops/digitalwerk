import { withPageMeta } from "@/lib/seo";
import PrivacyContent from "./PrivacyContent";

export const metadata = withPageMeta({ 
  title: "Datenschutzerklärung", 
  description: "Datenschutzerklärung nach DSGVO für Digitalwerk – Informationen zur Verarbeitung personenbezogener Daten." 
});

export default function Page() {
  return <PrivacyContent />;
}
