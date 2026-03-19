import { useState, useEffect, useCallback } from 'react'
import { ScrollTop } from '../../components/ScrollTop'
import { Link } from 'react-router-dom'
import RevealSection from '../../components/animations/RevealSection'
import BlurText from '../../components/animations/BlurText'
import GlareHover from '../../components/animations/GlareHover'
import room1 from '../../styles/img/demo-1/room1.jpg'
import room2 from '../../styles/img/demo-1/room2.jpg'
import room3 from '../../styles/img/demo-1/room3.jpg'
import room4 from '../../styles/img/demo-1/room1.jpg'
import rst from '../../styles/img/demo-1/restaurant1.jpg'
import spa from '../../styles/img/demo-1/spa1.jpg'
import pool from '../../styles/img/demo-1/pool1.jpg'
import city from '../../styles/img/demo-1/cozumel1.jpg'
import city2 from '../../styles/img/demo-1/cozumel2.jpg'
import city3 from '../../styles/img/demo-1/cozumel3.jpeg'
import lounge from '../../styles/img/demo-1/yard2.jpg'
import yard from '../../styles/img/demo-1/yard1.jpg'
import suite from '../../styles/img/demo-1/suite1.jpg'
import fitness from '../../styles/img/demo-1/fitness1.jpg'
import dinner from '../../styles/img/demo-1/dinner.jpg'
import lobby from '../../styles/img/demo-1/lobby.jpg'
import hotel from '../../styles/img/demo-1/hotel.jpg'

const IMG = {
  heroFacade: hotel, lobby, room1, room2, room3, room4,
  restaurant: rst, spa, pool,
  city1: city, city2, city3,
  lounge, courtyard: yard, suite, fitness, dining2: dinner,
}

const rooms = [
  { img: IMG.room1, name: 'Standard King', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { img: IMG.room2, name: 'Deluxe King Suite', desc: 'Sed do eiusmod tempor incididunt ut labore et dolore magna.' },
  { img: IMG.room3, name: 'Premier Two-Bedroom', desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.' },
  { img: IMG.room4, name: 'Grand Parlor Suite', desc: 'Duis aute irure dolor in reprehenderit in voluptate velit.' },
  { img: IMG.suite, name: 'Penthouse Suite', desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa.' },
  { img: IMG.room1, name: 'Historic King Room', desc: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur.' },
  { img: IMG.room2, name: 'Delaney House Suite', desc: 'Neque porro quisquam est, qui dolorem ipsum quia dolor.' },
]

const gemGallery = [IMG.courtyard, IMG.heroFacade, IMG.lobby]
const placeGallery = [IMG.city1, IMG.city2, IMG.city3]
const amenities = [
  { img: IMG.pool, title: 'Pool & Terrace' },
  { img: IMG.fitness, title: 'Fitness Center' },
  { img: IMG.dining2, title: 'Breakfast Room' },
]

/* Shared mini components */
function Btn({ href, variant, children }: { href: string; variant: 'outline' | 'dark' | 'burgundy'; children: React.ReactNode }) {
  const base = 'inline-block px-9 py-3 text-[.78rem] tracking-[2px] uppercase font-semibold rounded-[2px] cursor-pointer transition-all duration-300 text-center'
  const variants = {
    outline: 'border-[1.5px] border-white/50 text-white bg-transparent hover:bg-white hover:text-[#1C1C1C]',
    dark:    'border-[1.5px] border-[#1C1C1C] text-[#1C1C1C] bg-transparent hover:bg-[#1C1C1C] hover:text-white',
    burgundy:'border-none bg-[#A90023] text-white px-10 py-3.5 rounded-[24px] hover:bg-[#7d001a]',
  }
  return <a href={href} className={`${base} ${variants[variant]}`}>{children}</a>
}

function CarouselControls({ prev, next, current, total, center }: {
  prev: () => void; next: () => void; current: number; total: number; center?: boolean
}) {
  return (
    <div className={`flex items-center gap-5 mb-[30px] ${center ? 'justify-center mt-4 mb-0' : ''}`}>
      <button onClick={prev} className="bg-transparent border-none text-[1.2rem] cursor-pointer text-[#1C1C1C] px-[10px] py-1 transition-colors duration-200 tracking-[8px] hover:text-[#A90023]">←</button>
      <span className="text-[.85rem] tracking-[2px] text-[#757575]">
        {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </span>
      <button onClick={next} className="bg-transparent border-none text-[1.2rem] cursor-pointer text-[#1C1C1C] px-[10px] py-1 transition-colors duration-200 tracking-[8px] hover:text-[#A90023]">→</button>
    </div>
  )
}

export function BellaGrace() {
  const [scrolled, setScrolled]     = useState(false)
  const [roomSlide, setRoomSlide]   = useState(0)
  const [gemSlide, setGemSlide]     = useState(0)
  const [placeSlide, setPlaceSlide] = useState(0)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', h)
    window.scrollTo(0, 0)
    return () => window.removeEventListener('scroll', h)
  }, [])

  const nextRoom  = useCallback(() => setRoomSlide(s => (s + 1) % (rooms.length - 1)), [])
  const prevRoom  = useCallback(() => setRoomSlide(s => (s - 1 + rooms.length - 1) % (rooms.length - 1)), [])
  const nextGem   = useCallback(() => setGemSlide(s => (s + 1) % gemGallery.length), [])
  const prevGem   = useCallback(() => setGemSlide(s => (s - 1 + gemGallery.length) % gemGallery.length), [])
  const nextPlace = useCallback(() => setPlaceSlide(s => (s + 1) % placeGallery.length), [])
  const prevPlace = useCallback(() => setPlaceSlide(s => (s - 1 + placeGallery.length) % placeGallery.length), [])

  const navBase = 'fixed top-0 left-0 w-full z-[1000] px-6 md:px-12 flex items-center gap-5 transition-all duration-[400ms]'
  const navScroll = scrolled
    ? 'bg-white/[0.97] shadow-[0_2px_16px_rgba(0,0,0,.06)] py-3'
    : 'bg-transparent py-[18px]'

  return (
    <div className="bg-white text-[#1C1C1C] font-[var(--font-source-sans)] overflow-x-hidden">

      {/* ═══ NAVBAR ═══ */}
      <nav className={`${navBase} ${navScroll}`}>
        <Link
          to="/"
          className={`text-[.75rem] tracking-[1px] transition-colors duration-[400ms] ${scrolled ? 'text-[#A90023]' : 'text-white/80'}`}
        >
          ← Demos
        </Link>
        <span className={`font-[var(--font-playfair-sc)] text-base tracking-[3px] transition-colors duration-[400ms] ${scrolled ? 'text-[#1C1C1C]' : 'text-white'}`}>
          HOTEL BELLA GRACE
        </span>
        <div className="ml-auto hidden md:flex gap-6 items-center">
          {(['Rooms','Dining','Explore','Amenities'] as const).map(l => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className={`text-[.72rem] tracking-[2px] uppercase font-semibold transition-colors duration-300 hover:text-[#D2AA00] ${scrolled ? 'text-[#1C1C1C]' : 'text-white/85'}`}
            >{l}</a>
          ))}
          <a
            href="#contact"
            className="text-[.72rem] tracking-[2px] uppercase font-semibold px-[22px] py-2 border-[1.5px] border-[#A90023] bg-[#A90023] text-white rounded-[2px] transition-all duration-300 hover:bg-[#7d001a]"
          >
            Check Availability
          </a>
        </div>
      </nav>

      {/* ═══ HERO ═══ */}
      <header className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img src={IMG.heroFacade} alt="Hotel Bella Grace facade" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-[#1c1c1c]/35" />
        <div className="hero-content-anim">
          <p className="text-[.8rem] tracking-[2px] mb-2.5 opacity-80">Residence Inn by Marriott</p>
          <BlurText
            text="HOTEL BELLA GRACE / CHARLESTON HISTORIC DISTRICT"
            className="font-[var(--font-playfair-sc)] text-[2.4rem] leading-[1.2] tracking-[2px]"
            animateBy="words" direction="top" delay={80} stepDuration={0.45}
          />
          <div className="mt-3.5 text-[.85rem] flex justify-end gap-2.5 items-center">
            <span className="text-[#266F97] text-[.7rem] tracking-[2px]">●●●●○</span>
            <span>4.4 · 376 Reviews</span>
          </div>
        </div>
      </header>

      {/* ═══ WELCOME ═══ */}
      <section className="text-center px-6 pt-20 pb-[60px] max-w-[800px] mx-auto">
        <RevealSection variant="fadeUp">
          <div className="w-full h-px bg-[#D2D2D2] relative mb-5 before:content-[''] before:absolute before:-top-[3px] before:left-0 before:w-[7px] before:h-[7px] before:bg-[#D2D2D2] before:rounded-full after:content-[''] after:absolute after:-top-[3px] after:right-0 after:w-[7px] after:h-[7px] after:bg-[#D2D2D2] after:rounded-full" />
          <p className="text-[.65rem] tracking-[4px] uppercase text-[#757575] mb-4">WELCOME TO HOTEL BELLA GRACE / CHARLESTON HISTORIC DISTRICT</p>
          <h2 className="font-[var(--font-cormorant)] text-[3rem] font-light text-[#1C1C1C] mb-5 tracking-[4px]">HOTEL BELLA GRACE</h2>
          <p className="text-[.95rem] leading-[1.9] text-[#666]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </RevealSection>
      </section>

      {/* ═══ ROOMS CAROUSEL ═══ */}
      <section className="px-6 md:px-12 pt-20 pb-[60px] overflow-hidden" id="rooms">
        <RevealSection variant="fadeUp">
          <h2 className="font-[var(--font-playfair-sc)] text-[1.8rem] tracking-[4px] text-[#1C1C1C] mb-5">ROOMS & SUITES</h2>
          <CarouselControls prev={prevRoom} next={nextRoom} current={roomSlide} total={rooms.length} />
        </RevealSection>
        <div
          className="flex gap-5 transition-transform duration-500 ease-in-out pb-5"
          style={{ transform: `translateX(-${roomSlide * 52}%)` }}
        >
          {rooms.map((r, i) => (
            <div key={i} className="min-w-[50%] flex-shrink-0 bg-white rounded-xl shadow-[0_2px_20px_rgba(0,0,0,.06)] overflow-hidden transition-shadow duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,.12)]">
              <div className="h-[280px] overflow-hidden">
                <GlareHover glareColor="#D2AA00" glareOpacity={0.22} glareSize={320} transitionDuration={600}>
                  <img src={r.img} alt={r.name} className="w-full h-full object-cover transition-transform duration-500" />
                </GlareHover>
              </div>
              <h3 className="text-[1.05rem] font-normal px-6 pt-5 flex justify-between items-center">
                {r.name} <span className="text-[#A90023] text-[1.4rem]">›</span>
              </h3>
              <div className="h-px bg-[#eee] mx-6 my-3.5" />
              <button className="mx-6 mb-5 px-7 py-2.5 bg-[#A90023] text-white border-none rounded-[20px] text-[.78rem] tracking-[1px] transition-colors duration-300 hover:bg-[#7d001a]">
                View Rates
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ ARCHITECTURAL GEM ═══ */}
      <section className="px-6 md:px-12 py-20 text-center">
        <RevealSection variant="fadeLeft">
          <h2 className="font-[var(--font-cormorant)] text-[2.6rem] font-light tracking-[6px] text-[#999] mb-5">AN ARCHITECTURAL GEM</h2>
          <p className="max-w-[700px] mx-auto mb-10 text-[.95rem] leading-[1.8] text-[#666]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
        </RevealSection>
        <RevealSection variant="scale" delay={0.15}>
          <div className="flex gap-3 justify-center overflow-hidden">
            {gemGallery.map((img, i) => (
              <div
                key={i}
                className={`flex-none h-[300px] overflow-hidden rounded-[4px] transition-all duration-500 ${i === gemSlide ? 'basis-1/2 opacity-100' : 'basis-[32%] opacity-50'}`}
              >
                <img src={img} alt="Gallery" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <CarouselControls prev={prevGem} next={nextGem} current={gemSlide} total={gemGallery.length} center />
        </RevealSection>
      </section>

      {/* ═══ OYSTER BAR ═══ */}
      <section className="bg-[#1C1C1C] text-white grid grid-cols-1 md:grid-cols-2 min-h-[500px]" id="dining">
        <div className="overflow-hidden group">
          <img src={IMG.restaurant} alt="Delaney House Oyster Bar" className="w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-[1.04]" />
        </div>
        <RevealSection variant="fadeRight">
          <div className="px-[60px] py-20 flex flex-col justify-center">
            <h2 className="font-[var(--font-cormorant)] text-[2.4rem] font-light tracking-[4px] text-[#D2D2D2] mb-6">DELANEY HOUSE OYSTER BAR</h2>
            <p className="text-[.9rem] leading-[1.8] text-white/60 mb-[30px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <Btn href="#" variant="outline">Explore</Btn>
          </div>
        </RevealSection>
      </section>

      {/* ═══ A SENSE OF PLACE ═══ */}
      <section className="px-6 md:px-12 py-20 text-center" id="explore">
        <RevealSection variant="fadeLeft">
          <h2 className="font-[var(--font-cormorant)] text-[2.4rem] font-light tracking-[4px] text-[#999] mb-5">A SENSE OF PLACE</h2>
          <p className="max-w-[700px] mx-auto mb-[30px] text-[.9rem] leading-[1.8] text-[#666]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <Btn href="#" variant="dark">Learn More</Btn>
        </RevealSection>
        <RevealSection variant="scale" delay={0.15}>
          <div className="flex gap-3 justify-center overflow-hidden mt-[30px]">
            {placeGallery.map((img, i) => (
              <div
                key={i}
                className={`flex-none h-[280px] overflow-hidden rounded-[4px] transition-all duration-500 ${i === placeSlide ? 'basis-1/2 opacity-100' : 'basis-[32%] opacity-50'}`}
              >
                <img src={img} alt="Charleston" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <CarouselControls prev={prevPlace} next={nextPlace} current={placeSlide} total={placeGallery.length} center />
        </RevealSection>
      </section>

      {/* ═══ SUITE ESCAPE ═══ */}
      <section className="bg-[#4A2040] text-white grid grid-cols-1 md:grid-cols-2 min-h-[480px]">
        <div className="overflow-hidden">
          <img src={IMG.lounge} alt="Suite escape" className="w-full h-full object-cover" />
        </div>
        <RevealSection variant="fadeRight">
          <div className="px-[60px] py-20 flex flex-col justify-center">
            <h2 className="font-[var(--font-cormorant)] text-[2.2rem] font-light tracking-[4px] text-white mb-6">A SUITE ESCAPE</h2>
            <p className="text-[.9rem] leading-[1.8] text-white/60 mb-[30px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <Btn href="#" variant="outline">Learn More</Btn>
          </div>
        </RevealSection>
      </section>

      {/* ═══ HISTORY & CULTURE ═══ */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[440px]">
        <div className="overflow-hidden">
          <img src={IMG.suite} alt="History" className="w-full h-full object-cover" />
        </div>
        <RevealSection variant="fadeLeft">
          <div className="px-[60px] py-20 flex flex-col justify-center">
            <h2 className="font-[var(--font-playfair-sc)] text-[1.6rem] tracking-[3px] mb-5">ENTRENCHED IN HISTORY, ART, AND CULTURE</h2>
            <p className="text-[.9rem] leading-[1.8] text-[#666] mb-[30px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <Btn href="#" variant="dark">Learn More</Btn>
          </div>
        </RevealSection>
      </section>

      {/* ═══ MARRIOTT SECTION ═══ */}
      <section className="px-6 md:px-12 py-[60px]">
        <RevealSection variant="fadeUp">
          <h2 className="font-[var(--font-playfair-sc)] text-[1.6rem] tracking-[3px] mb-3">A MARRIOTT HOTEL IN DOWNTOWN CHARLESTON</h2>
          <p className="text-[.95rem] text-[#666]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </RevealSection>
      </section>

      {/* ═══ AMENITIES ═══ */}
      <section className="px-6 md:px-12 py-20" id="amenities">
        <RevealSection variant="fadeUp">
          <h2 className="font-[var(--font-playfair-sc)] text-[1.8rem] tracking-[4px] text-[#1C1C1C] mb-5">HOTEL AMENITIES</h2>
        </RevealSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-2.5">
          {amenities.map((a, i) => (
            <RevealSection key={i} delay={i * 0.12} variant="scale">
              <div className="overflow-hidden group">
                <GlareHover glareColor="#D2AA00" glareOpacity={0.25} glareSize={280} borderRadius={4}>
                  <img src={a.img} alt={a.title} className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
                </GlareHover>
                <h3 className="font-normal text-[.95rem] py-4">{a.title}</h3>
              </div>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* ═══ CONTACT / CTA ═══ */}
      <section className="bg-[#F6F6F6] px-6 md:px-12 py-20 text-center" id="contact">
        <RevealSection variant="fadeUp">
          <h2 className="font-[var(--font-playfair-sc)] text-[1.8rem] tracking-[3px] mb-2.5">PLAN YOUR STAY</h2>
          <p className="text-[#666] mb-[30px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <form className="flex gap-3 justify-center flex-wrap" onSubmit={e => e.preventDefault()}>
            {['Check-in', 'Check-out'].map(ph => (
              <input key={ph} type="text" placeholder={ph}
                className="px-5 py-3.5 border border-[#ddd] bg-white text-[.85rem] w-[180px] outline-none transition-colors duration-300 rounded focus:border-[#A90023]" />
            ))}
            <input type="number" placeholder="Guests" min={1} defaultValue={2}
              className="px-5 py-3.5 border border-[#ddd] bg-white text-[.85rem] w-[180px] outline-none transition-colors duration-300 rounded focus:border-[#A90023]" />
            <button type="submit" className="border-none bg-[#A90023] text-white px-10 py-3.5 rounded-[24px] text-[.78rem] tracking-[2px] uppercase font-semibold transition-colors duration-300 hover:bg-[#7d001a]">
              Check Availability
            </button>
          </form>
        </RevealSection>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="bg-[#1C1C1C] px-6 md:px-12 pt-[60px] pb-4 text-white/50">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 mb-10">
          <div>
            <h4 className="text-[#D2AA00] font-[var(--font-playfair-sc)] text-[.9rem] tracking-[2px] mb-4">Hotel Bella Grace</h4>
            <p className="text-[.8rem] leading-[1.8]">185 East Bay Street<br />Charleston, SC 29401</p>
            <p className="text-[.8rem] mt-1">+1 (843) 990-7500</p>
          </div>
          {[
            { title: 'Quick Links', links: ['Rooms & Suites', 'Dining', 'Explore Charleston', 'Meetings & Events'] },
            { title: 'Amenities',   links: ['Pool & Terrace', 'Fitness Center', 'Concierge', 'Parking'] },
            { title: 'Policies',    links: ['Pet Policy', 'Cancellation', 'Privacy', 'Accessibility'] },
          ].map(col => (
            <div key={col.title}>
              <h4 className="text-[#D2AA00] font-[var(--font-playfair-sc)] text-[.9rem] tracking-[2px] mb-4">{col.title}</h4>
              {col.links.map(l => <a key={l} href="#" className="block text-[.8rem] leading-[1.8] hover:text-[#D2AA00] transition-colors duration-200">{l}</a>)}
            </div>
          ))}
        </div>
        <div className="max-w-[1200px] mx-auto pt-6 border-t border-white/[0.08] flex justify-between text-[.7rem] text-white/30">
          <span>© 2026 Hotel Bella Grace. Marriott Bonvoy.</span>
          <span>Demo — React + TypeScript</span>
        </div>
      </footer>

      <ScrollTop bg="#A90023" color="#fff" hoverBg="#D2AA00" hoverColor="#1C1C1C" />
    </div>
  )
}
