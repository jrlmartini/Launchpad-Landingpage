/**
 * Lightweight event tracking.
 *
 * Pushes to the GTM dataLayer and, when gtag is present, fires directly too.
 * Both are guarded so the site never breaks if a tag manager is blocked.
 */

type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(event: string, params: EventParams = {}): void {
  if (typeof window === "undefined") return;

  const payload = { event, ...params };

  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(payload);
    if (typeof window.gtag === "function") {
      window.gtag("event", event, params);
    }
  } catch {
    /* tracking must never break navigation */
  }
}
