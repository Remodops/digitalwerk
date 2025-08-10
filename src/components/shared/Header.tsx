"use client";

import Link from "next/link";
import { Nav } from "./Nav";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function Header() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  if (!isHome) {
    return (
      <header role="banner" className="sticky top-0 inset-x-0 z-50">
        <div className="flex h-14 items-center justify-between px-4 sm:px-6 lg:px-8 bg-white/80 backdrop-blur border-b border-neutral-200">
          <Link href="/" className="font-semibold text-neutral-900 text-lg sm:text-xl">Digitalwerk</Link>
          <div className="hidden md:block">
            <Nav variant="light" />
          </div>
          <button
            type="button"
            aria-label="Menü öffnen"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-800 hover:text-black hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-black/20 transition"
          >
            {open ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M6.225 4.811a1 1 0 011.414 0L12 9.172l4.361-4.361a1 1 0 111.414 1.414L13.414 10.586l4.361 4.361a1 1 0 01-1.414 1.414L12 12l-4.361 4.361a1 1 0 01-1.414-1.414l4.361-4.361-4.361-4.361a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><path strokeLinecap="round" d="M3 6h18M3 12h18M3 18h18" /></svg>
            )}
          </button>
        </div>
        {open && (
          <div className="px-4 sm:px-6 lg:px-8">
            <nav className="mt-2 rounded-2xl bg-white/90 backdrop-blur ring-1 ring-black/10 p-3 text-sm text-neutral-800 md:hidden">
              <ul className="flex flex-col gap-2">
                <li><Link onClick={() => setOpen(false)} className="block rounded px-3 py-2 hover:bg-black/5" href="/">Start</Link></li>
                <li><Link onClick={() => setOpen(false)} className="block rounded px-3 py-2 hover:bg-black/5" href="/leistungen">Leistungen</Link></li>
                <li><Link onClick={() => setOpen(false)} className="block rounded px-3 py-2 hover:bg-black/5" href="/referenzen">Referenzen</Link></li>
                <li><Link onClick={() => setOpen(false)} className="block rounded px-3 py-2 hover:bg-black/5" href="/ueber-uns">Über uns</Link></li>
                <li><Link onClick={() => setOpen(false)} className="block rounded px-3 py-2 hover:bg-black/5" href="/kontakt">Kontakt</Link></li>
              </ul>
            </nav>
          </div>
        )}
      </header>
    );
  }

  return (
    <header
      role="banner"
      className={`${isScrolled ? "fixed top-0" : "absolute top-6 sm:top-8"} inset-x-0 z-50 transition-all`}
    >
      <div
        className={
          `flex items-center justify-between px-4 sm:px-6 lg:px-8 transition-all duration-300 ` +
          (isScrolled
            ? "h-14 bg-black/95 backdrop-blur shadow-lg shadow-black/20"
            : "h-12 bg-transparent")
        }
      >
        <Link href="/" className="font-semibold text-white text-lg sm:text-xl">Digitalwerk</Link>
        <div className="hidden md:block">
          <Nav variant="dark" />
        </div>
        <button
          type="button"
          aria-label="Menü öffnen"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white/90 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40 transition"
        >
          {open ? (
            // X Icon
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path fillRule="evenodd" d="M6.225 4.811a1 1 0 011.414 0L12 9.172l4.361-4.361a1 1 0 111.414 1.414L13.414 10.586l4.361 4.361a1 1 0 01-1.414 1.414L12 12l-4.361 4.361a1 1 0 01-1.414-1.414l4.361-4.361-4.361-4.361a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          ) : (
            // Hamburger Icon
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
              <path strokeLinecap="round" d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>
      {open && (
        <div className="px-4 sm:px-6 lg:px-8">
          <nav className="mt-2 rounded-2xl bg-black/40 backdrop-blur-sm ring-1 ring-white/15 p-3 text-sm text-white/90 md:hidden">
            <ul className="flex flex-col gap-2">
              <li><Link onClick={() => setOpen(false)} className="block rounded px-3 py-2 hover:bg-white/10" href="/">Start</Link></li>
              <li><Link onClick={() => setOpen(false)} className="block rounded px-3 py-2 hover:bg-white/10" href="/leistungen">Leistungen</Link></li>
              <li><Link onClick={() => setOpen(false)} className="block rounded px-3 py-2 hover:bg-white/10" href="/referenzen">Referenzen</Link></li>
              <li><Link onClick={() => setOpen(false)} className="block rounded px-3 py-2 hover:bg-white/10" href="/ueber-uns">Über uns</Link></li>
              <li><Link onClick={() => setOpen(false)} className="block rounded px-3 py-2 hover:bg-white/10" href="/kontakt">Kontakt</Link></li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}


