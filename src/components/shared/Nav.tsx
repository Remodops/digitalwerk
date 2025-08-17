import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

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
      <div className="pl-2 ml-2 border-l border-neutral-200 dark:border-white/20">
        <ThemeToggle />
      </div>
    </nav>
  );
}


