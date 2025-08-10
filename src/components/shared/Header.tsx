import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Nav } from "./Nav";

export function Header() {
  return (
    <header
      role="banner"
      className="absolute inset-x-0 top-6 sm:top-8 z-50"
    >
      <Container className="flex h-12 sm:h-14 items-center justify-between rounded-full bg-black/30 backdrop-blur-sm ring-1 ring-white/15">
        <Link href="/" className="text-sm font-semibold text-white">Digitalwerk</Link>
        <Nav variant="dark" />
      </Container>
    </header>
  );
}


