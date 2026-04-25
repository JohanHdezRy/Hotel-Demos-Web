import { Link } from 'react-router-dom'
import { motion } from 'motion/react'

export interface Demo {
  path: string
  num: string
  name: string
  loc: string
  style: string
  tag: string
  colors: string[]
  img: string
}

interface Props {
  demo: Demo
  index: number
  span?: 1 | 2 | 3
}

const colSpanClass: Record<1 | 2 | 3, string> = {
  1: 'sm:col-span-1 xl:col-span-1',
  2: 'sm:col-span-2 xl:col-span-2',
  3: 'sm:col-span-2 xl:col-span-3',
}

export function DemoCard({ demo, index, span = 1 }: Props) {
  const isWide = span === 3

  return (
    <motion.div
      className={`col-span-1 ${colSpanClass[span]}`}
      initial={{ opacity: 0, y: 56 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.72,
        delay: (index % 3) * 0.09,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {isWide ? (
        /* ── Full-width horizontal card ─────────────────────────── */
        <Link
          to={demo.path}
          className="group relative flex overflow-hidden h-[240px] sm:h-[280px] md:h-[340px]"
        >
          {/* Left: image panel — full width on mobile, 62% on md+ */}
          <div className="relative w-full md:w-[62%] overflow-hidden shrink-0">
            <img
              src={demo.img}
              alt={demo.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#090909]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

            {/* Badge */}
            <div className="absolute top-5 left-5 text-[0.52rem] tracking-[3px] text-white/40 uppercase border border-white/12 px-3 py-1 backdrop-blur-sm">
              {demo.num}
            </div>
          </div>

          {/* Right: info panel — desktop only */}
          <div className="hidden md:flex flex-col justify-center px-10 py-8 bg-[#090909] border-l border-white/[0.04] min-w-0 flex-1">
            <div className="flex gap-2 mb-6">
              {demo.colors.map((c, i) => (
                <div
                  key={i}
                  className="w-4 h-4 rounded-full border border-white/15"
                  style={{ background: c }}
                />
              ))}
            </div>

            <p className="text-[0.55rem] tracking-[4px] uppercase text-gold mb-2">
              {demo.style}
            </p>
            <h3 className="font-[var(--font-cormorant)] text-[2.4rem] font-light text-white leading-[1] mb-2">
              {demo.name}
            </h3>
            <p className="text-[0.72rem] text-white/35 mb-8 tracking-wide">
              {demo.loc}
            </p>

            <div className="flex items-center gap-3 text-[0.6rem] tracking-[3px] uppercase text-white/40 group-hover:text-gold transition-colors duration-400">
              View Demo
              <span className="inline-block text-base leading-none transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </div>
          </div>

          {/* Mobile bottom strip — always visible, no hover needed */}
          <div className="md:hidden absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/85 via-black/50 to-transparent">
            <div className="flex gap-2 mb-2">
              {demo.colors.map((c, i) => (
                <div
                  key={i}
                  className="w-3 h-3 rounded-full border border-white/20"
                  style={{ background: c }}
                />
              ))}
            </div>
            <p className="text-[0.52rem] tracking-[3px] uppercase text-gold mb-1">
              {demo.style}
            </p>
            <h3 className="font-[var(--font-cormorant)] text-[1.5rem] font-light text-white leading-tight">
              {demo.name}
            </h3>
            <p className="text-[0.65rem] text-white/50 mt-1 tracking-wide">
              {demo.loc}
            </p>
          </div>
        </Link>
      ) : (
        /* ── Standard vertical card ──────────────────────────────── */
        <Link
          to={demo.path}
          className="group relative block overflow-hidden h-[320px] sm:h-[400px] md:h-[500px]"
        >
          {/* Image */}
          <img
            src={demo.img}
            alt={demo.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          />

          {/* Permanent gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/20 transition-opacity duration-500 md:group-hover:opacity-0" />

          {/* Corner badges */}
          <div className="absolute top-5 right-5 text-[0.52rem] tracking-[3px] text-white/35 uppercase border border-white/12 px-3 py-1 backdrop-blur-sm">
            {demo.num}
          </div>
          <div className="absolute top-5 left-5 text-[0.5rem] tracking-[2px] text-white/40 uppercase">
            {demo.style}
          </div>

          {/*
            Default info strip:
            - Mobile: always visible (no translate, no pointer-events issue)
            - Desktop: slides away on hover to reveal the overlay
          */}
          <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7 transition-transform duration-500 md:group-hover:translate-y-full">
            <p className="text-[0.56rem] tracking-[3px] uppercase text-gold mb-2">
              {demo.loc}
            </p>
            <h3 className="font-[var(--font-cormorant)] text-[1.5rem] md:text-[1.75rem] font-light text-white leading-tight">
              {demo.name}
            </h3>
          </div>

          {/*
            Hover overlay — desktop only (md+).
            Hidden on mobile via translate so touch users always see the info strip.
          */}
          <div className="absolute inset-0 bg-black/82 translate-y-full md:group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col justify-end p-7">
            <div className="flex gap-2 mb-5">
              {demo.colors.map((c, i) => (
                <div
                  key={i}
                  className="w-[18px] h-[18px] rounded-full border border-white/20"
                  style={{ background: c }}
                />
              ))}
            </div>

            <p className="text-[0.52rem] tracking-[4px] uppercase text-gold mb-2">
              {demo.tag}
            </p>
            <h3 className="font-[var(--font-cormorant)] text-[2.1rem] font-light text-white leading-tight mb-1">
              {demo.name}
            </h3>
            <p className="text-[0.72rem] text-white/38 mb-7 tracking-wide">
              {demo.loc}
            </p>

            <div className="flex items-center gap-3 text-[0.62rem] tracking-[3px] uppercase text-white/55 group-hover:text-gold transition-colors duration-300">
              View Demo
              <span className="inline-block text-base leading-none transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </div>
          </div>
        </Link>
      )}
    </motion.div>
  )
}
