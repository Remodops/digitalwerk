import { ANALYTICS_PROVIDER, ENABLE_ANALYTICS } from "@/lib/config";

export function AnalyticsProvider() {
  if (!ENABLE_ANALYTICS || ANALYTICS_PROVIDER === "none") return null;
  // Hinweis: Skripte nur als kommentierte Snippets – keine Pakete
  if (ANALYTICS_PROVIDER === "umami") {
    return (
      <>
        {/**
         * Umami Beispiel (aktivieren durch Entfernen des Kommentars):
         * <script async defer data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID} src="https://umami.example.com/script.js" />
         */}
      </>
    );
  }
  if (ANALYTICS_PROVIDER === "plausible") {
    return (
      <>
        {/**
         * Plausible Beispiel:
         * <script defer data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN} src="https://plausible.io/js/script.js" />
         */}
      </>
    );
  }
  return null;
}


