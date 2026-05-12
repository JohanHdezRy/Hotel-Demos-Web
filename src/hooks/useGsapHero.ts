import { useEffect, useRef } from 'react'
import gsap from 'gsap'

/**
 * Shared GSAP hero animation hook.
 *
 * `delay` is captured once on mount via a ref — changing it later will NOT
 * rebuild the timeline. This prevents a reactive `delay` from causing
 * `ctx.revert()` to fire mid-flight and snap the hero back to its initial state.
 *
 * Target classes inside the ref:
 *   .gh-img   → Ken Burns (scale 1.1 → 1)
 *   .gh-label → fade + slide up (label / category text)
 *   .gh-line  → masked line reveal (wrap each line in overflow-hidden)
 *   .gh-meta  → fade + slide up (rating, subtitle metadata)
 *   .gh-cta   → fade + slide up (CTA button)
 */
export function useGsapHero<T extends HTMLElement = HTMLElement>(delay = 0.15) {
  const ref = useRef<T>(null)
  const delayRef = useRef(delay)

  useEffect(() => {
    if (!ref.current) return
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' }, delay: delayRef.current })
      tl.from('.gh-img', { scale: 1.1, duration: 2.5, ease: 'power2.out' }, 0)
        .from('.gh-label', { opacity: 0, y: 14, duration: 0.7 }, 0.1)
        .from('.gh-line', { yPercent: 110, duration: 1, stagger: 0.12 }, 0.3)
        .from('.gh-meta', { opacity: 0, y: 16, duration: 0.8 }, 0.7)
        .from('.gh-cta', { opacity: 0, y: 14, duration: 0.6 }, 0.9)
    }, ref)
    return () => ctx.revert()
  }, [])

  return ref
}
