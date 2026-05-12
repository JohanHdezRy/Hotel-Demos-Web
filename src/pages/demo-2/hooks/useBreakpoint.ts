import { useSyncExternalStore } from "react";

interface Breakpoint {
  isMobile: boolean; // < 640px
  isTablet: boolean; // 640px – 1023px
  isDesktop: boolean; // >= 1024px
}

const QUERIES = {
  mobile: "(max-width: 639.98px)",
  tablet: "(min-width: 640px) and (max-width: 1023.98px)",
  desktop: "(min-width: 1024px)",
} as const;

const SERVER_SNAPSHOT: Breakpoint = {
  isMobile: false,
  isTablet: false,
  isDesktop: true,
};

// Cache snapshot so useSyncExternalStore receives a stable reference between
// reads when nothing has changed — without it, React would loop in dev.
let cached: Breakpoint | null = null;

function getSnapshot(): Breakpoint {
  const m = window.matchMedia(QUERIES.mobile).matches;
  const t = window.matchMedia(QUERIES.tablet).matches;
  const d = window.matchMedia(QUERIES.desktop).matches;
  if (
    cached &&
    cached.isMobile === m &&
    cached.isTablet === t &&
    cached.isDesktop === d
  ) {
    return cached;
  }
  cached = { isMobile: m, isTablet: t, isDesktop: d };
  return cached;
}

function subscribe(notify: () => void): () => void {
  const mqs = (Object.values(QUERIES) as string[]).map((q) =>
    window.matchMedia(q),
  );
  mqs.forEach((mq) => mq.addEventListener("change", notify));
  return () => mqs.forEach((mq) => mq.removeEventListener("change", notify));
}

/**
 * Re-renders only when a breakpoint boundary is crossed, not on every
 * pixel during a resize. Backed by `matchMedia` + `useSyncExternalStore`.
 */
export function useBreakpoint(): Breakpoint {
  return useSyncExternalStore(subscribe, getSnapshot, () => SERVER_SNAPSHOT);
}
