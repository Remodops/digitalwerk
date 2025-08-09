// Feature-Flags und zentrale Konfiguration

export type AnalyticsProvider = "none" | "umami" | "plausible";

const readBoolean = (value: string | undefined, defaultValue: boolean): boolean => {
  if (value === undefined) return defaultValue;
  return value.toLowerCase() === "true";
};

export const ENABLE_CONTACT_FORM: boolean = readBoolean(
  process.env.NEXT_PUBLIC_ENABLE_CONTACT_FORM,
  false,
);

export const ENABLE_ANALYTICS: boolean = readBoolean(
  process.env.NEXT_PUBLIC_ENABLE_ANALYTICS,
  false,
);

export const ANALYTICS_PROVIDER: AnalyticsProvider = (
  (process.env.NEXT_PUBLIC_ANALYTICS_PROVIDER as AnalyticsProvider) || "none"
);

export const ENABLE_CONSENT: boolean = readBoolean(
  process.env.NEXT_PUBLIC_ENABLE_CONSENT,
  false,
);

export const ENABLE_BLOG: boolean = readBoolean(
  process.env.NEXT_PUBLIC_ENABLE_BLOG,
  false,
);

export const SITE = {
  name: "Digitalwerk",
  domain: "digitalwerk.local",
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  defaultDescription:
    "Digitalwerk – Schnelle, barrierearme Marketing‑Site mit klarem Fokus auf Ergebnisse.",
};


