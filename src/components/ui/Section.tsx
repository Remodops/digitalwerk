import * as React from "react";
import { Container } from "./Container";

export function Section({
  children,
  title,
  subtitle,
  className = "",
}: {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <section className={`py-12 sm:py-16 ${className}`}>
      <Container>
        {title && (
          <div className="mb-6">
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">{title}</h2>
            {subtitle && <p className="mt-2 text-neutral-600">{subtitle}</p>}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}


