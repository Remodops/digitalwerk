Digitalwerk – modulare Marketing‑Site (Next.js 14+ App Router, TS strict)

Ziel: Schnelle, barrierearme Site mit Kernseiten und optionalen Modulen via Feature‑Flags.

Tech
- Next.js 14+/15 (App Router), TypeScript strict
- Tailwind CSS v4 (nur Core), ESLint + Prettier (Next Defaults)
- Keine Analytics/Form‑Deps im Core; nur Schnittstellen/Adapter

Struktur
```
/src
  /app/(site)/*pages
  /components/ui/*        // Button, Input, Card, Section, Container
  /components/shared/*    // Header, Footer, Nav, Hero, PricingTable, FaqList
  /modules                // optionale Features
    /contact              // deaktiviert per Flag
    /analytics            // Adapter-Pattern, default: none
    /consent              // Banner/Dialog, optional
    /blog                 // optional
  /lib
    config.ts             // Feature-Flags
    seo.ts                // Metadata helpers
    schema.ts             // JSON-LD helpers
    a11y.ts               // Skiplinks, focus helpers
  /content
    /cases/*.mdx          // vorbereitet (Beispiel in Referenzseiten)
/public
  /favicons, /images
```

## Getting Started

```bash
npm run dev
npm run lint
npm run build
```

Öffne `http://localhost:3000`.

Feature‑Flags (`src/lib/config.ts`)
- `NEXT_PUBLIC_ENABLE_CONTACT_FORM` (default false)
- `NEXT_PUBLIC_ENABLE_ANALYTICS` (default false)
- `NEXT_PUBLIC_ANALYTICS_PROVIDER`: `none` | `umami` | `plausible` (default `none`)
- `NEXT_PUBLIC_ENABLE_CONSENT` (default false)
- `NEXT_PUBLIC_ENABLE_BLOG` (default false)

Beispiel `.env.local`
```
NEXT_PUBLIC_ENABLE_CONTACT_FORM=true
NEXT_PUBLIC_ENABLE_ANALYTICS=true
NEXT_PUBLIC_ANALYTICS_PROVIDER=umami
NEXT_PUBLIC_ENABLE_CONSENT=true
NEXT_PUBLIC_ENABLE_BLOG=false
```

Module
- Contact (`src/modules/contact/ContactForm.tsx`)
  - UI mit ARIA/Labels, kein Backend
  - Backend nachrüsten (optional):
    ```ts
    // /api/contact (Beispiel – nicht aktiv)
    // import nodemailer from 'nodemailer'
    // export default async function handler(req, res) {
    //   const { name, email, message } = req.body
    //   const transporter = nodemailer.createTransport({
    //     host: process.env.SMTP_HOST,
    //     auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
    //   })
    //   await transporter.sendMail({ from: process.env.SMTP_FROM, to: process.env.SMTP_TO, subject: 'Kontakt', text: `${name} <${email}>\n\n${message}` })
    //   res.status(204).end()
    // }
    // Honeypot/Rate‑Limit (Pseudocode): block if hidden "company" filled; limit by IP
    ```
  - Externer Dienst: Endpoint‑Hook via `fetch` ersetzen (Formspree/Typedream etc.)

- Analytics Adapter (`src/modules/analytics/AnalyticsProvider.tsx`)
  - `provider='none'` rendert nichts
  - Umami/Plausible: Script‑Snippets im Code kommentiert; keine Pakete

- Consent (`src/modules/consent/ConsentBanner.tsx`)
  - LocalStorage‑Banner, lädt Analytics nach Opt‑In (Callback)

- Blog (optional)
  - Core liefert nur Hinweis‑Seite; Setup unten

SEO & Schema
- `src/lib/seo.ts`: Title‑Template, Description, OpenGraph
- `src/lib/schema.ts`: Organization, Service, BreadcrumbList, FAQPage + `<JsonLd />`
- `robots.txt`, `sitemap.xml`; Manifest/Favicons lokal (PWA optional, auskommentiert)

A11y & Performance
- WCAG 2.2 AA Basics: Skip‑Link, Landmarken, Fokus‑Ringe, `prefers-reduced-motion`
- Budgets: JS < 80 KB/Seite, CSS < 80 KB, Startseite < 1 MB
- Server Components by default, Client nur wo nötig

Blog aktivieren (optional)
1) `npm i -D contentlayer next-contentlayer @mdx-js/react`
2) Contentlayer konfigurieren (siehe Doku)
3) Inhalte unter `src/content` ablegen

Deploy
- Vercel: Projekt importieren, `NEXT_PUBLIC_*` Flags setzen
- AWS S3/CloudFront (Kurz):
  1. Static Export/Serverless wählen
  2. Artefakte nach S3 deployen
  3. CloudFront Distribution inkl. Caching/Compression

Akzeptanzkriterien
- Build läuft ohne zusätzliche Secrets/Deps
- Kein externer Traffic ohne Opt‑In/aktivierte Flags
- Lighthouse (Desktop) ≥ 95, Mobile ≥ 85
- Tastaturbedienbarkeit komplett; korrekte Fokus‑Reihenfolge
- Startseite < 1 MB, keine ungenutzten CSS/JS‑Pakete
