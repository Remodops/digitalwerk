export const SKIP_TARGET_ID = "main-content";

export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export const focusRingClasses =
  "focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-sky-600";


