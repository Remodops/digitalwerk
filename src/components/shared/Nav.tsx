import Link from "next/link";

const links = [
  { href: "/", label: "Start" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/referenzen", label: "Referenzen" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Nav() {
  return (
    <nav aria-label="Hauptnavigation" className="hidden md:flex items-center gap-6">
      {links.map((l) => (
        <Link key={l.href} href={l.href} className="text-sm text-neutral-700 hover:text-black">
          {l.label}
        </Link>
      ))}
    </nav>
  );
}


