import type { ReactNode, CSSProperties } from 'react'
import { useInView } from '../hooks/useInView'

interface Props {
  children: ReactNode
  style?: CSSProperties
  delay?: number
}

export function FadeIn({ children, style = {}, delay = 0 }: Props) {
  const [ref, vis] = useInView()
  return (
    <div
      ref={ref}
      className={`fadeUp${vis ? ' visible' : ''}`}
      style={{ ...style, transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  )
}
