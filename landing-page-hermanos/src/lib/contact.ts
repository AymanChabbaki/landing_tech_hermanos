export const WHATSAPP_NUMBER = '212770496716'
export const WHATSAPP_DISPLAY = '+212 770 49 67 16'

export function whatsappLink(text: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}

/* Sends one conversion event to both Meta Pixel and GA4, so ad platforms can
   optimise on it. Standard Meta events go through `track`, anything else
   through `trackCustom`. */
const META_STANDARD_EVENTS = new Set(['Lead', 'Contact', 'ViewContent'])
const GA4_EVENT_NAMES: Record<string, string> = { Lead: 'generate_lead', Contact: 'contact' }

export function trackEvent(name: string, params: Record<string, unknown> = {}): void {
  window.fbq?.(META_STANDARD_EVENTS.has(name) ? 'track' : 'trackCustom', name, params)
  window.gtag?.('event', GA4_EVENT_NAMES[name] ?? name, params)
}
