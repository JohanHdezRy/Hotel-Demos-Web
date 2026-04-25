import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Layered pinning with infinite scroll loop.
 * Each .lp-panel stacks on top of the previous as you scroll.
 * When reaching the end the page snaps back to near the beginning (seamless loop).
 *
 * Usage: attach the returned ref to the outer container div.
 */
export function usePanelScroll() {
  const containerRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const container = containerRef.current
    if (!container) return

    const panels = gsap.utils.toArray<HTMLElement>('.lp-panel', container)

    // Pin each panel in place — no spacing so next panel scrolls right over it
    const ctx = gsap.context(() => {
      panels.forEach((panel) => {
        ScrollTrigger.create({
          trigger: panel,
          start: 'top top',
          pin: true,
          pinSpacing: false,
        })
      })
    }, container)

    let maxScroll = ScrollTrigger.maxScroll(window) - 1

    // Global snap: snaps to the nearest panel on scroll stop
    const pageScrollTrigger = ScrollTrigger.create({
      snap(value) {
        const snapped = gsap.utils.snap(1 / panels.length, value)
        // Prevent reaching exactly 0 or 1 — either would trigger the loop boundary
        if (snapped <= 0) return 1.05 / maxScroll
        if (snapped >= 1) return maxScroll / (maxScroll + 1.05)
        return snapped
      },
    })

    function onResize() {
      maxScroll = ScrollTrigger.maxScroll(window) - 1
    }

    // Non-passive so we can preventDefault and teleport scroll for the infinite loop
    function onScroll(e: Event) {
      const scroll = pageScrollTrigger.scroll()
      if (scroll > maxScroll) {
        pageScrollTrigger.scroll(1)
        e.preventDefault()
      } else if (scroll < 1) {
        pageScrollTrigger.scroll(maxScroll - 1)
        e.preventDefault()
      }
    }

    window.addEventListener('resize', onResize)
    window.addEventListener('scroll', onScroll, { passive: false })

    return () => {
      ctx.revert()
      pageScrollTrigger.kill()
      window.removeEventListener('resize', onResize)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return containerRef
}
