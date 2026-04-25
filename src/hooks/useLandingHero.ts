import { useRef, useEffect } from 'react'
import gsap from 'gsap'

/**
 * GSAP intro animation for the Landing hero (intro panel).
 * Uses fromTo() so the explicit opacity:1 target overrides Tailwind opacity-0.
 *
 *   .lh-label  → eyebrow label
 *   .lh-title  → h1 title block
 *   .lh-rule   → gold divider line (scale-x reveal)
 *   .lh-sub    → subtitle paragraph
 *   .lh-cta    → CTA button
 *   .lh-grid   → preview card grid (right column)
 *   .lh-scroll → scroll indicator
 */
export function useLandingHero() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!heroRef.current) return
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })

      tl.fromTo('.lh-label',
        { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.70 }, 0.10)
        .fromTo('.lh-title',
          { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.85 }, 0.25)
        .from('.lh-rule',
          { scaleX: 0, duration: 0.70, transformOrigin: 'left', ease: 'power3.out' }, 0.70)
        .fromTo('.lh-sub',
          { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.70 }, 0.85)
        .fromTo('.lh-cta',
          { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.60 }, 1.00)
        .fromTo('.lh-grid',
          { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 0.90 }, 0.30)
        .fromTo('.lh-scroll',
          { opacity: 0 }, { opacity: 1, duration: 0.60 }, 1.30)
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return heroRef
}
