import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Nav } from "./Nav";

export function Header() {
  return (
    <header role="banner" className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-neutral-200">
      <Container className="flex h-14 items-center justify-between">
        <Link href="/" className="text-sm font-semibold">Digitalwerk</Link>
        <Nav />
      </Container>
    </header>
  );
}


