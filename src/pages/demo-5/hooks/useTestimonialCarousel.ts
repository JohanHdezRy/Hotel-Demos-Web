import { useState, useEffect, useRef, useCallback } from 'react'
import { testimonials } from '../data/testimonialsData'

export function useTestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const total = testimonials.length

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total)
  }, [total])

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total)
  }, [total])

  const goTo = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  const startInterval = useCallback(() => {
    intervalRef.current = setInterval(goNext, 6000)
  }, [goNext])

  const stopInterval = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [])

  const handleMouseEnter = useCallback(() => {
    stopInterval()
  }, [stopInterval])

  const handleMouseLeave = useCallback(() => {
    startInterval()
  }, [startInterval])

  useEffect(() => {
    startInterval()
    return () => stopInterval()
  }, [startInterval, stopInterval])

  return {
    testimonials,
    currentIndex,
    goNext,
    goPrev,
    goTo,
    handleMouseEnter,
    handleMouseLeave,
  }
}
