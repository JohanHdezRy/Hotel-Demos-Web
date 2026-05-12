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

    // Pin each panel — pinType: 'transform' uses GPU-friendly transforms
    // instead of position:fixed reflows, avoiding layout thrash on scroll.
    const ctx = gsap.context(() => {
      panels.forEach((panel) => {
        ScrollTrigger.create({
          trigger: panel,
          start: 'top top',
          pin: true,
          pinSpacing: false,
          pinType: 'transform',
        })
      })
    }, container)

    let maxScroll = ScrollTrigger.maxScroll(window) - 1
    let teleporting = false

    // Global snap: snaps to the nearest panel on scroll stop.
    // Skipped while teleporting so it can't fight the loop boundary jump.
    const pageScrollTrigger = ScrollTrigger.create({
      snap(value) {
        if (teleporting) return value
        const snapped = gsap.utils.snap(1 / panels.length, value)
        // Prevent reaching exactly 0 or 1 — either would trigger the loop boundary
        if (snapped <= 0) return 1.05 / maxScroll
        if (snapped >= 1) return maxScroll / (maxScroll + 1.05)
        return snapped
      },
    })

    let resizeRaf = 0
    function onResize() {
      if (resizeRaf) cancelAnimationFrame(resizeRaf)
      resizeRaf = requestAnimationFrame(() => {
        resizeRaf = 0
        // Refresh recomputes pin positions and updates maxScroll consistently
        // for every ScrollTrigger (including the snap closure).
        ScrollTrigger.refresh()
        maxScroll = ScrollTrigger.maxScroll(window) - 1
      })
    }

    // Non-passive so we can preventDefault and teleport scroll for the infinite loop.
    // Trade-off: passive:false costs a few FPS on low-end touch devices, but it is
    // required to intercept the scroll event before the browser settles the
    // overshoot — without it the loop-boundary jump becomes visible.
    function onScroll(e: Event) {
      const scroll = pageScrollTrigger.scroll()
      if (scroll > maxScroll) {
        teleporting = true
        pageScrollTrigger.scroll(1)
        e.preventDefault()
        requestAnimationFrame(() => { teleporting = false })
      } else if (scroll < 1) {
        teleporting = true
        pageScrollTrigger.scroll(maxScroll - 1)
        e.preventDefault()
        requestAnimationFrame(() => { teleporting = false })
      }
    }

    window.addEventListener('resize', onResize)
    window.addEventListener('scroll', onScroll, { passive: false })

    return () => {
      if (resizeRaf) cancelAnimationFrame(resizeRaf)
      ctx.revert()
      pageScrollTrigger.kill()
      window.removeEventListener('resize', onResize)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return containerRef
}
