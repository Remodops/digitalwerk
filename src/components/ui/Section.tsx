import * as React from "react";
import { Container } from "./Container";

export function Section({
  children,
  title,
  subtitle,
  className = "",
  id,
}: {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-10 sm:py-14 ${className}`}>
      <Container>
        {title && (
          <div className="mb-4 sm:mb-5">
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">{title}</h2>
            {subtitle && <p className="mt-1.5 text-neutral-600">{subtitle}</p>}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}


