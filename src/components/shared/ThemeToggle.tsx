"use client";

import { useEffect, useMemo, useState } from "react";

type Theme = "light" | "dark";

function getSystemTheme(): Theme {
  if (typeof window === "undefined") return "light";
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  return getSystemTheme();
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.setAttribute("data-theme", theme);
  root.classList.toggle("dark", theme === "dark");
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const initial = getInitialTheme();
    setTheme(initial);
    applyTheme(initial);
  }, []);

  useEffect(() => {
    const onChange = (e: MediaQueryListEvent) => {
      const stored = window.localStorage.getItem("theme");
      if (stored === "light" || stored === "dark") return;
      const nextTheme: Theme = e.matches ? "dark" : "light";
      setTheme(nextTheme);
      applyTheme(nextTheme);
    };
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  const label = useMemo(() => (theme === "dark" ? "Darkmode ausschalten" : "Darkmode einschalten"), [theme]);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
    try { window.localStorage.setItem("theme", next); } catch {}
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="inline-flex items-center gap-2 rounded-md px-2.5 py-1.5 text-sm font-medium ring-1 ring-inset transition-colors
        bg-white text-neutral-800 hover:bg-neutral-50 ring-neutral-300
        dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700 dark:ring-neutral-600"
    >
      {theme === "dark" ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
          <path d="M12 3.1a1 1 0 0 1 1 1V6a1 1 0 1 1-2 0V4.1a1 1 0 0 1 1-1ZM5.64 5.64a1 1 0 0 1 1.41 0l1.35 1.35a1 1 0 1 1-1.41 1.41L5.64 7.05a1 1 0 0 1 0-1.41ZM3.1 12a1 1 0 0 1 1-1H6a1 1 0 1 1 0 2H4.1a1 1 0 0 1-1-1Zm14.91-5.95 1.35-1.35a1 1 0 1 1 1.41 1.41l-1.35 1.35a1 1 0 1 1-1.41-1.41ZM12 18a1 1 0 0 1 1 1v1.9a1 1 0 1 1-2 0V19a1 1 0 0 1 1-1Zm-6.36.36 1.35-1.35a1 1 0 1 1 1.41 1.41L7.05 19.77a1 1 0 1 1-1.41-1.41ZM18 12a1 1 0 0 1 1-1h1.9a1 1 0 1 1 0 2H19a1 1 0 0 1-1-1Zm-6-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
          <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79Z" />
        </svg>
      )}
      <span className="hidden sm:inline">{theme === "dark" ? "Hell" : "Dunkel"}</span>
    </button>
  );
}


