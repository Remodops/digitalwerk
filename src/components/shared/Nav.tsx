import Link from "next/link";

const links = [
  { href: "/", label: "Start" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/referenzen", label: "Referenzen" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Nav({ variant = "light" }: { variant?: "light" | "dark" }) {
  return (
    <nav aria-label="Hauptnavigation" className="hidden md:flex items-center gap-6">
      {links.map((l) => (
        <Link
          key={l.href}
          href={l.href}
          className={`${
            variant === "dark"
              ? "text-white/90 hover:text-white"
              : "text-neutral-700 hover:text-black"
          } text-sm transition-colors duration-200 hover:underline underline-offset-4`}
        >
          {l.label}
        </Link>
      ))}
    </nav>
  );
}


