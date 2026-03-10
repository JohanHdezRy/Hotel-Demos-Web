// ParallaxHero — custom scroll parallax using motion
// Wraps a hero image so it scrolls slower than the page (parallax effect)
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

interface ParallaxHeroProps {
  src: string
  alt?: string
  className?: string
  strength?: number   // 0–1, how much parallax (default 0.3)
  height?: string
}

export default function ParallaxHero({
  src,
  alt = '',
  className = '',
  strength = 0.3,
  height = '70vh',
}: ParallaxHeroProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  // Image moves up by (strength * 100)% of the section height as we scroll
  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${strength * 100}%`])

  return (
    <div
      ref={ref}
      className={className}
      style={{ position: 'relative', height, overflow: 'hidden' }}
    >
      <motion.img
        src={src}
        alt={alt}
        style={{
          y,
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: `${100 + strength * 100}%`,
          objectFit: 'cover',
          willChange: 'transform',
        }}
      />
    </div>
  )
}
