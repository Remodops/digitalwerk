import type { Metadata } from "next";
import "./globals.css";
import { defaultMetadata } from "@/lib/seo";
import Script from "next/script";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { SkipLink } from "@/components/shared/SkipLink";
import { SKIP_TARGET_ID } from "@/lib/a11y";
import { ENABLE_ANALYTICS, ENABLE_CONSENT } from "@/lib/config";
import { ModulesMount } from "@/components/shared/ModulesMount";

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className="antialiased min-h-screen flex flex-col" suppressHydrationWarning>
        <Script id="theme-init" strategy="beforeInteractive">{`
          (function(){
            try {
              var d = document.documentElement;
              var e = localStorage.getItem('theme');
              var m = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
              var t = (e === 'light' || e === 'dark') ? e : (m ? 'dark' : 'light');
              d.setAttribute('data-theme', t);
              if (t === 'dark') d.classList.add('dark'); else d.classList.remove('dark');
            } catch(_) {}
          })();
        `}</Script>
        <SkipLink />
        <Header />
        {(ENABLE_ANALYTICS || ENABLE_CONSENT) && <ModulesMount />}
        <main id={SKIP_TARGET_ID} role="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
