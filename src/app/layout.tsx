import type { Metadata } from "next";
import "./globals.css";
import { defaultMetadata } from "@/lib/seo";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { SkipLink } from "@/components/shared/SkipLink";
import { SKIP_TARGET_ID } from "@/lib/a11y";
import { ModulesMount } from "@/components/shared/ModulesMount";

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="antialiased">
        <SkipLink />
        <Header />
        <ModulesMount />
        <main id={SKIP_TARGET_ID} role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
