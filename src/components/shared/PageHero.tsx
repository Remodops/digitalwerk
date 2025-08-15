import Image from "next/image";
import { Container } from "@/components/ui/Container";
import * as React from "react";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  bgImageSrc?: string;
  bgImageAlt?: string;
  gradientFrom?: string; // tailwind color class, e.g. 'from-sky-700'
  gradientTo?: string;   // e.g. 'to-sky-900'
  overlayOpacity?: string; // e.g. 'bg-black/40'
};

export function PageHero({
  title,
  subtitle,
  bgImageSrc,
  bgImageAlt = "Seitenhintergrund",
  gradientFrom = "from-neutral-800",
  gradientTo = "to-black",
  overlayOpacity = "bg-black/40",
}: PageHeroProps) {
  return (
    <section className={`relative isolate overflow-hidden ${gradientFrom} ${gradientTo} bg-gradient-to-b`}
      aria-label="Seitenkopf">
      {bgImageSrc && (
        <Image
          src={bgImageSrc}
          alt={bgImageAlt}
          fill
          priority
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-60"
        />
      )}
      <div className={`absolute inset-0 -z-10 ${overlayOpacity}`} />
      <Container className="py-12 sm:py-16 min-h-[22vh] sm:min-h-[28vh] flex flex-col justify-end">
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">{title}</h1>
        {subtitle && <p className="mt-2 max-w-3xl text-white/85">{subtitle}</p>}
      </Container>
    </section>
  );
}


