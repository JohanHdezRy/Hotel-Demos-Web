import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import gsap from 'gsap'
import Marquee from '../components/animations/Marquee'

import imagendemo1 from '../styles/img/demo-1/hotel.jpg'
import imagendemo2 from '../styles/img/demo-2/hotel4.jpg'
import imagendemo3 from '../styles/img/demo-3/hotel3.jpg'
import imagendemo4 from '../styles/img/demo-4/hotel.jpg'
import imagendemo5 from '../styles/img/demo-5/hotel.jpg'
import imagendemo6 from '../styles/img/demo-8/hotel.jpg'
import imagendemo7 from '../styles/img/demo-11/hotel.jpg'

const hotels = [
  {
    path: '/demo-1',
    name: 'Bella Grace Charleston',
    loc: 'Charleston, SC · USA',
    style: 'Elegancia Sureña',
    colors: ['#A90023', '#D2AA00', '#FAF7F2'],
    img: imagendemo1,
    inspired: 'Marriott Bella Grace',
    demo: '01',
  },
  {
    path: '/demo-2',
    name: 'La Réserve Paris',
    loc: 'París, Francia',
    style: 'Apartamentos de lujo',
    colors: ['#1C1C1A', '#C8AF8C', '#F7F5EF'],
    img: imagendemo2,
    inspired: 'La Réserve Paris',
    demo: '02',
  },
  {
    path: '/demo-3',
    name: 'Micon Street Hotel',
    loc: 'Atenas, Grecia',
    style: 'Boutique urbano',
    colors: ['#222222', '#888888', '#FFFFFF'],
    img: imagendemo3,
    inspired: 'Micon Street Hotel Athens',
    demo: '03',
  },
  {
    path: '/demo-4',
    name: 'El Fenn Marrakech',
    loc: 'Marrakech, Marruecos',
    style: 'Riad de lujo',
    colors: ['#c2956b', '#d1647a', '#2a7e73'],
    img: imagendemo4,
    inspired: 'El Fenn',
    demo: '04',
  },
  {
    path: '/demo-5',
    name: 'Song Saa Private Island',
    loc: 'Koh Rong, Camboya',
    style: 'Island retreat',
    colors: ['#798D77', '#b09a6f', '#fdfdf7'],
    img: imagendemo5,
    inspired: 'Song Saa Private Island',
    demo: '05',
  },
  {
    path: '/demo-8',
    name: "Badrutt's Palace",
    loc: 'St. Moritz, Suiza',
    style: 'Palacio alpino',
    colors: ['#1a2744', '#c9a96e', '#f8f6f2'],
    img: imagendemo6,
    inspired: "Badrutt's Palace Hotel",
    demo: '06',
  },
  {
    path: '/demo-11',
    name: 'One&Only Cape Town',
    loc: 'Ciudad del Cabo, Sudáfrica',
    style: 'Lujo contemporáneo',
    colors: ['#1a5c5c', '#c4a265', '#f7f5f0'],
    img: imagendemo7,
    inspired: 'One&Only Cape Town',
    demo: '07',
  },
]

const STATS = [
  { n: '7',     label: 'Unique Designs' },
  { n: '7',     label: 'Countries' },
  { n: '100%',  label: 'Custom CSS' },
  { n: 'React', label: 'TypeScript-first' },
]

/* ─── Card ────────────────────────────────────────────────────── */
function Card({ hotel, index }: { hotel: typeof hotels[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.75,
        delay: (index % 3) * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <Link to={hotel.path} className="group relative block overflow-hidden" style={{ height: '480px' }}>

        {/* Background image */}
        <img
          src={hotel.img}
          alt={hotel.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
        />

        {/* Permanent gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/25 transition-opacity duration-500 group-hover:opacity-0" />

        {/* Demo badge */}
        <div className="absolute top-5 right-5 text-[0.55rem] tracking-[3px] text-white/40 uppercase border border-white/15 px-3 py-1 backdrop-blur-sm">
          {hotel.demo}
        </div>

        {/* Default info strip */}
        <div className="absolute bottom-0 left-0 right-0 p-7 transition-transform duration-500 group-hover:translate-y-full">
          <p className="text-[0.58rem] tracking-[3px] uppercase text-gold mb-2">{hotel.loc}</p>
          <h3 className="font-[var(--font-cormorant)] text-[1.75rem] font-light text-white leading-tight">
            {hotel.name}
          </h3>
        </div>

        {/* Hover overlay — slides up */}
        <div className="absolute inset-0 bg-black/80 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col justify-end p-7">
          {/* Color palette */}
          <div className="flex gap-2 mb-5">
            {hotel.colors.map((c, i) => (
              <div
                key={i}
                className="w-[18px] h-[18px] rounded-full border border-white/20"
                style={{ background: c }}
              />
            ))}
          </div>

          <p className="text-[0.55rem] tracking-[4px] uppercase text-gold mb-2">{hotel.style}</p>
          <h3 className="font-[var(--font-cormorant)] text-[2.1rem] font-light text-white leading-tight mb-2">
            {hotel.name}
          </h3>
          <p className="text-[0.75rem] text-white/45 mb-7">{hotel.loc}</p>

          <div className="flex items-center gap-3 text-[0.65rem] tracking-[3px] uppercase text-white/70 group-hover:text-gold transition-colors duration-300">
            View Demo
            <span className="text-base leading-none">→</span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

/* ─── Landing ─────────────────────────────────────────────────── */
export function Landing() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })

      tl.from('.landing-label',  { opacity: 0, y: 14, duration: 0.8 }, 0.15)
        .from('.landing-line',   { yPercent: 115, duration: 1.05, stagger: 0.13 }, 0.35)
        .from('.landing-rule',   { scaleX: 0, duration: 0.9, transformOrigin: 'left', ease: 'power3.out' }, 0.85)
        .from('.landing-sub',    { opacity: 0, y: 22, duration: 0.8 }, 1.0)
        .from('.landing-img',    { clipPath: 'inset(0 0 100% 0)', duration: 1.3, ease: 'power4.out' }, 0.45)
        .from('.landing-scroll', { opacity: 0, duration: 0.6 }, 1.35)
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="bg-[#080808] min-h-screen text-white overflow-x-hidden">

      {/* ═══ HERO ═══ */}
      <section ref={heroRef} className="relative h-screen flex overflow-hidden">

        {/* Left: text content */}
        <div className="relative z-10 flex flex-col justify-center pl-10 md:pl-16 pr-8 w-full md:w-[58%] pt-20">

          <p className="landing-label text-[0.62rem] tracking-[7px] uppercase text-gold mb-10 opacity-0">
            Portfolio · React + TypeScript
          </p>

          {/* Masked line reveals */}
          <div style={{ overflow: 'hidden' }}>
            <h1 className="landing-line font-[var(--font-cormorant)] text-[clamp(3.8rem,8.5vw,7.5rem)] font-light leading-[0.9] tracking-tight">
              HOTEL
            </h1>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <h1 className="landing-line font-[var(--font-cormorant)] text-[clamp(3.8rem,8.5vw,7.5rem)] font-light leading-[0.9] tracking-tight text-gold">
              DEMO
            </h1>
          </div>
          <div style={{ overflow: 'hidden' }} className="mb-9">
            <h1 className="landing-line font-[var(--font-cormorant)] text-[clamp(3.8rem,8.5vw,7.5rem)] font-light leading-[0.9] tracking-tight">
              COLLECTION
            </h1>
          </div>

          {/* Rule */}
          <div className="landing-rule w-full max-w-[400px] h-px bg-white/15 mb-7" />

          {/* Subtitle */}
          <p className="landing-sub opacity-0 text-[#666] text-[0.88rem] leading-[1.9] max-w-[380px]">
            Seven luxury hotel concepts, each built from scratch with a unique design system, custom animations, and distinct visual identity.
          </p>

          {/* Scroll hint */}
          <div className="landing-scroll opacity-0 absolute bottom-10 left-10 md:left-16 flex items-center gap-3 text-[0.58rem] tracking-[3px] uppercase text-[#444]">
            <div className="w-8 h-px bg-[#444]" />
            Scroll to explore
          </div>
        </div>

        {/* Right: image panel */}
        <div className="hidden md:block absolute right-0 top-0 w-[47%] h-full overflow-hidden">
          <div className="landing-img w-full h-full" style={{ clipPath: 'inset(0 0 100% 0)' }}>
            <img
              src={imagendemo1}
              alt="Hotel Demo"
              className="w-full h-full object-cover"
            />
            {/* Gradient that bleeds into dark bg */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/60 to-transparent" />
          </div>
        </div>

        {/* Mobile: faint bg image */}
        <div className="md:hidden absolute inset-0">
          <img src={imagendemo1} alt="" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/80 to-transparent" />
        </div>
      </section>

      {/* ═══ MARQUEE ═══ */}
      <Marquee />

      {/* ═══ STATS ═══ */}
      <section className="px-10 md:px-16 py-14 border-b border-white/[0.05]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-[860px]">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <div className="font-[var(--font-cormorant)] text-[2.6rem] font-light text-gold leading-none mb-1">
                {s.n}
              </div>
              <div className="text-[0.62rem] tracking-[2px] text-[#555] uppercase">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══ COLLECTION HEADING ═══ */}
      <section className="px-10 md:px-16 pt-16 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.06] pb-10"
        >
          <div>
            <p className="text-[0.6rem] tracking-[6px] uppercase text-gold mb-3">The Collection</p>
            <h2 className="font-[var(--font-cormorant)] text-[clamp(2rem,4vw,3rem)] font-light text-white">
              Seven Concepts
            </h2>
          </div>
          <p className="text-[#555] text-[0.8rem] leading-relaxed max-w-[360px] md:text-right">
            Each demo has a unique identity — from a Moroccan riad to an alpine palace — built with pure CSS and custom scroll animations.
          </p>
        </motion.div>
      </section>

      {/* ═══ CARDS GRID ═══ */}
      <section className="px-10 md:px-16 pb-24 max-w-[1700px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {hotels.map((h, i) => (
            <Card key={h.path} hotel={h} index={i} />
          ))}
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="border-t border-white/[0.05] px-10 md:px-16 py-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-3 text-[#383838] text-[0.68rem] tracking-[1px]">
        <span>React 19 · TypeScript · Vite · Tailwind CSS · Motion · GSAP</span>
        <span>{hotels.length} Demos · Portfolio — Johan B. Hernandez Raya</span>
      </footer>
    </div>
  )
}
