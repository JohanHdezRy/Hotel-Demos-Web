import { useState, useCallback } from 'react'

/**
 * Manages carousel/slider index state with next/prev/goTo navigation.
 * Replaces the repeated carousel state + useCallback pattern in every demo page.
 *
 * @param length - Total number of items (or slide positions)
 * @returns { index, next, prev, goTo }
 */
export function useCarousel(length: number) {
  const [index, setIndex] = useState(0)

  const next = useCallback(() => setIndex(i => (i + 1) % length), [length])
  const prev = useCallback(() => setIndex(i => (i - 1 + length) % length), [length])
  const goTo = useCallback((i: number) => setIndex(i), [])

  return { index, next, prev, goTo }
}
