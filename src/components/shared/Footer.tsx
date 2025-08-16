import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer role="contentinfo" className="mt-16 border-t border-neutral-200 bg-white">
      <Container className="py-8 text-sm text-neutral-600 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Digitalwerk – Websites mit Wirkung</p>
        <nav aria-label="Footer">
          <ul className="flex gap-4">
            <li><Link href="/impressum" className="hover:text-neutral-900">Impressum</Link></li>
            <li><Link href="/datenschutz" className="hover:text-neutral-900">Datenschutz</Link></li>
          </ul>
        </nav>
      </Container>
    </footer>
  );
}


