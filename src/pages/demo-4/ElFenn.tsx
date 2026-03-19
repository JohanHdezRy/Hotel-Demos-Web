import { Link } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react'
import { ScrollTop } from '../../components/ScrollTop'
import RevealSection from '../../components/animations/RevealSection'
import BlurText from '../../components/animations/BlurText'
import GlareHover from '../../components/animations/GlareHover'
import hotel from '../../styles/img/demo-4/hotel.jpg'
import hote2 from '../../styles/img/demo-4/hotel5.jpg'
import hote3 from '../../styles/img/demo-4/hotel6.jpg'
import room2 from '../../styles/img/demo-4/room.jpg'
import room1 from '../../styles/img/demo-4/room2.jpg'
import room3 from '../../styles/img/demo-4/room3.jpg'
import room4 from '../../styles/img/demo-4/room4.jpg'
import room5 from '../../styles/img/demo-4/room5.jpg'
import room6 from '../../styles/img/demo-4/room6.jpg'
import room7 from '../../styles/img/demo-4/room7.jpg'
import room8 from '../../styles/img/demo-4/room8.jpg'
import fea1 from '../../styles/img/demo-4/rest.jpg'
import fea2 from '../../styles/img/demo-4/rest2.jpg'
import fea3 from '../../styles/img/demo-4/fitness1.jpg'
import fea4 from '../../styles/img/demo-4/lobby.jpg'
import fea5 from '../../styles/img/demo-4/spa1.jpg'
import fea6 from '../../styles/img/demo-4/terrace.jpg'
import fea7 from '../../styles/img/demo-4/restaurant1.jpg'
import fea8 from '../../styles/img/demo-4/spa2.jpg'
import art from '../../styles/img/demo-4/art.jpg'

const WARM  = '#c2956b'
const PINK  = '#d1647a'
const BLACK = '#1a1a1a'
const LIGHT = '#faf9f7'

const IMG = {
  hero: [hotel, hote2, hote3],
  features: [
    { img: fea3, label: 'Retreats' },
    { img: fea2, label: 'Art @ El Fenn' },
    { img: fea5, label: 'Spa & Pools' },
    { img: fea1, label: 'Restaurant' },
    { img: fea4, label: 'Interior Styling' },
    { img: fea6, label: 'Our Ethos' },
  ],
  rooms: [
    { img: room1, name: 'Small Rooms',          price: '€342' },
    { img: room2, name: 'Medium Rooms',         price: '€428' },
    { img: room3, name: 'Large Rooms',          price: '€523' },
    { img: room4, name: 'Extra Large Rooms',    price: '€618' },
    { img: room5, name: 'XL with Terrace',      price: '€950' },
    { img: room6, name: 'Family Suite (2 Bed)', price: '€950' },
    { img: room7, name: 'Family Suite (3 Bed)', price: '€1,140' },
    { img: room8, name: 'Cosy Rooms',           price: '€342' },
  ],
  rooftop: fea6,
  activities: [
    { img: fea1, label: 'Eating',   sub: 'Food & Drink' },
    { img: fea7, label: 'Drinking', sub: 'Rooftop Bar' },
    { img: fea5, label: 'Relaxing', sub: 'Spa & Pools' },
    { img: fea8, label: 'Shopping', sub: 'Boutique' },
  ],
  blog: [
    { img: art,  title: 'Day Trips from Marrakech',       excerpt: 'Discover the best excursions from the Red City, from Atlas Mountains to Essaouira coast.' },
    { img: fea4, title: 'Guide to Marrakech Districts',   excerpt: "Navigate the vibrant souks, palaces, and hidden gardens across the city's unique neighborhoods." },
    { img: hotel, title: 'Art Exhibitions Spring 2026',   excerpt: 'A curated guide to the most exciting contemporary art shows in Morocco this season.' },
  ],
}

export function ElFenn() {
  const [slide, setSlide] = useState(0)
  const next = useCallback(() => setSlide(s => (s + 1) % IMG.hero.length), [])
  const prev = useCallback(() => setSlide(s => (s - 1 + IMG.hero.length) % IMG.hero.length), [])

  useEffect(() => {
    const t = setInterval(next, 5500)
    return () => clearInterval(t)
  }, [next])

  return (
    <>
      <Link to="/" className="fixed top-4 left-4 z-[9999] bg-black/65 text-white text-[.72rem] tracking-[1px] px-3.5 py-[7px] rounded-[3px] backdrop-blur-md hover:bg-black/80 transition-colors duration-200">← Demos</Link>

      {/* ── HEADER ── */}
      <header className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-10 h-[70px] bg-[#1a1a1a]/85 backdrop-blur-[8px] border-b border-[#c2956b]/10 transition-colors duration-[400ms]">
        <div className="font-[var(--font-roboto)] font-bold text-[1.6rem] text-white tracking-[2px] uppercase">{WARM && 'El Fenn'}</div>
        <nav className="hidden md:flex gap-7">
          {[['#rooms','Rooms'],['#rooftop','Rooftop'],['#dining','Food & Drink'],['#blog','Blog'],['#about','About']].map(([href,label]) => (
            <a key={href} href={href} className="text-white/80 text-[.8rem] font-medium uppercase tracking-[1.5px] transition-colors duration-300" style={{ color: 'rgba(255,255,255,.8)' }}
              onMouseOver={e => (e.currentTarget.style.color = WARM)}
              onMouseOut={e => (e.currentTarget.style.color = 'rgba(255,255,255,.8)')}
            >{label}</a>
          ))}
        </nav>
        <button className="text-white border-none px-[22px] py-2.5 text-[.75rem] font-semibold uppercase tracking-[1.5px] cursor-pointer transition-colors duration-300"
          style={{ background: WARM }}
          onMouseOver={e => (e.currentTarget.style.background = PINK)}
          onMouseOut={e => (e.currentTarget.style.background = WARM)}
        >Book a Stay</button>
      </header>

      {/* ── HERO ── */}
      <section className="relative h-screen overflow-hidden">
        {IMG.hero.map((src, i) => (
          <div key={i} className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${i === slide ? 'opacity-100' : 'opacity-0'}`}>
            <img src={src} alt={`El Fenn slide ${i + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/45 via-[#1a1a1a]/20 to-[#1a1a1a]/55 flex flex-col items-center justify-center text-center">
          <h1 className="text-white font-[var(--font-roboto)] font-light text-[3.6rem] tracking-[3px] uppercase" style={{ textShadow: '0 2px 30px rgba(0,0,0,.4)' }}>El Fenn</h1>
          <BlurText text="Luxury with Authenticity — Marrakech" className="text-white/85 text-[1.1rem] mt-3.5 font-light tracking-[2px]"
            animateBy="words" direction="bottom" delay={80} stepDuration={0.4} />
        </div>
        <div className="absolute bottom-10 left-0 right-0 flex justify-between px-10">
          <button onClick={prev} className="bg-none border border-white/50 text-white px-6 py-2.5 text-[.7rem] uppercase tracking-[2px] cursor-pointer transition-all duration-300 hover:bg-white/15 hover:border-white">← Prev</button>
          <button onClick={next} className="bg-none border border-white/50 text-white px-6 py-2.5 text-[.7rem] uppercase tracking-[2px] cursor-pointer transition-all duration-300 hover:bg-white/15 hover:border-white">Next →</button>
        </div>
        <div className="absolute bottom-[45px] left-1/2 -translate-x-1/2 flex gap-2.5">
          {IMG.hero.map((_, i) => (
            <span key={i} onClick={() => setSlide(i)}
              className="w-2.5 h-2.5 rounded-full cursor-pointer transition-colors duration-300"
              style={{ background: i === slide ? WARM : 'rgba(255,255,255,.4)' }}
            />
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="px-10 py-[100px] text-center max-w-[900px] mx-auto" style={{ background: LIGHT }} id="about">
        <RevealSection variant="fadeLeft">
          <h2 className="font-[var(--font-roboto)] font-light text-[2.4rem] tracking-[1px] mb-5" style={{ color: BLACK }}>Luxury with Authenticity</h2>
          <div className="w-[60px] h-0.5 mx-auto mb-[30px]" style={{ background: WARM }} />
          <p className="font-[var(--font-open-sans)] text-base leading-[1.9] text-[#666] max-w-[700px] mx-auto mb-4">
            El Fenn is a boutique riad hotel nestled in the heart of Marrakech's medina.
            With 28 individually styled rooms and suites, three pools, a rooftop restaurant,
            spa, and a curated art collection, it offers an intimate escape blending
            mid-century European furniture with traditional Moroccan craftsmanship.
          </p>
          <p className="font-[var(--font-open-sans)] text-base leading-[1.9] text-[#666] max-w-[700px] mx-auto mb-4">
            Designed as a private home that welcomes guests, each space tells a story through
            vibrant colors, handpicked antiques, and contemporary art. The result is a sanctuary
            of warmth and character unlike any other in the Red City.
          </p>
          <div className="text-[.85rem] font-medium tracking-[1.5px] uppercase mt-[30px]" style={{ color: WARM }}>
            Condé Nast Traveler Gold List — 2017, 2021, 2022, 2024
          </div>
        </RevealSection>
      </section>

      {/* ── FEATURES GRID ── */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-1 p-1">
        {IMG.features.map((f, i) => (
          <RevealSection key={i} delay={i * 0.1} variant="fadeUp">
            <div className="relative overflow-hidden aspect-square cursor-pointer group">
              <GlareHover glareColor={WARM} glareOpacity={0.2} glareSize={320} borderRadius={0}>
                <img src={f.img} alt={f.label} className="w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-[1.06]" />
              </GlareHover>
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-colors duration-[400ms] group-hover:bg-[#1a1a1a]/55" style={{ background: 'rgba(26,26,26,.35)' }}>
                <h3 className="text-white font-normal text-[1.3rem] tracking-[2px] uppercase">{f.label}</h3>
                <span className="text-[.75rem] uppercase tracking-[2px] mt-2.5 opacity-0 translate-y-2.5 transition-all duration-[400ms] group-hover:opacity-100 group-hover:translate-y-0" style={{ color: WARM }}>
                  Discover →
                </span>
              </div>
            </div>
          </RevealSection>
        ))}
      </section>

      {/* ── ROOMS ── */}
      <section className="px-10 py-[90px] bg-white" id="rooms">
        <RevealSection variant="fadeUp">
          <h2 className="text-center font-light text-[2rem] tracking-[1px] mb-2.5" style={{ color: BLACK }}>The Perfect Night's Sleep</h2>
          <p className="text-center text-[.95rem] mb-[50px]" style={{ color: '#888' }}>Discover Our Bedrooms</p>
        </RevealSection>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-[1200px] mx-auto">
          {IMG.rooms.map((r, i) => (
            <RevealSection key={i} delay={i * 0.08} variant="fadeUp">
              <div className="relative overflow-hidden rounded-[4px] cursor-pointer group">
                <GlareHover glareColor={PINK} glareOpacity={0.2} glareSize={280} borderRadius={0}>
                  <img src={r.img} alt={r.name} className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-[1.05]" />
                </GlareHover>
                <div className="pt-4">
                  <h4 className="font-medium text-[.95rem] mb-1" style={{ color: BLACK }}>{r.name}</h4>
                  <span className="text-[.85rem] font-medium" style={{ color: WARM }}>From {r.price}+</span>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* ── ROOFTOP ── */}
      <section className="relative min-h-[500px] overflow-hidden flex items-center justify-center" id="rooftop">
        <img src={IMG.rooftop} alt="Rooftop terrace" className="absolute inset-0 w-full h-full object-cover" />
        <RevealSection variant="scale">
          <div className="relative z-10 text-center px-10 py-[60px] max-w-[700px] rounded-[4px]" style={{ background: 'rgba(26,26,26,.6)' }}>
            <h2 className="text-white font-light text-[2.2rem] tracking-[1px] mb-4">The Rooftop</h2>
            <p className="text-white/85 text-[.95rem] leading-[1.8] mb-2.5">
              Our celebrated rooftop terrace is open daily for non-residents.
              Enjoy panoramic views over the medina and Atlas Mountains while savoring
              craft cocktails and Moroccan-inspired sharing plates.
            </p>
            <div className="text-[.9rem] font-medium" style={{ color: WARM }}>Open daily 12:30 — 23:00</div>
          </div>
        </RevealSection>
      </section>

      {/* ── ACTIVITIES ── */}
      <section className="grid grid-cols-2 md:grid-cols-4" id="dining">
        {IMG.activities.map((a, i) => (
          <RevealSection key={i} delay={i * 0.1} variant="fadeUp">
            <div className="relative overflow-hidden cursor-pointer group" style={{ aspectRatio: '.75' }}>
              <GlareHover glareColor={WARM} glareOpacity={0.22} glareSize={300} borderRadius={0}>
                <img src={a.img} alt={a.label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.08]" />
              </GlareHover>
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-[30px] px-5" style={{ background: 'linear-gradient(180deg,transparent 40%,rgba(26,26,26,.7) 100%)' }}>
                <h3 className="text-white font-medium text-[1.1rem] uppercase tracking-[2px]">{a.label}</h3>
                <span className="text-[.75rem] uppercase tracking-[2px] mt-1.5" style={{ color: WARM }}>{a.sub}</span>
              </div>
            </div>
          </RevealSection>
        ))}
      </section>

      {/* ── BLOG ── */}
      <section className="px-10 py-[90px]" style={{ background: LIGHT }} id="blog">
        <RevealSection variant="fadeUp">
          <h2 className="text-center font-light text-[2rem] tracking-[1px] mb-[50px]" style={{ color: BLACK }}>The El Fenn Blog</h2>
        </RevealSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] max-w-[1100px] mx-auto">
          {IMG.blog.map((b, i) => (
            <RevealSection key={i} delay={i * 0.12} variant="fadeUp">
              <div className="bg-white rounded-[6px] overflow-hidden shadow-[0_2px_15px_rgba(0,0,0,.06)] transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,.10)]">
                <GlareHover glareColor={WARM} glareOpacity={0.15} glareSize={260} borderRadius={0}>
                  <img src={b.img} alt={b.title} className="w-full object-cover" style={{ aspectRatio: '16/10' }} />
                </GlareHover>
                <div className="p-5">
                  <h4 className="text-base font-medium leading-[1.4] mb-2" style={{ color: BLACK }}>{b.title}</h4>
                  <p className="text-[.85rem] text-[#888] leading-[1.6]">{b.excerpt}</p>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section className="px-10 py-20 text-center" style={{ background: BLACK }}>
        <RevealSection variant="fadeUp">
          <h2 className="text-white font-light text-[1.8rem] tracking-[1px] mb-3">Get the El Fenn Hotlist</h2>
          <p className="text-white/60 text-[.9rem] mb-[30px] max-w-[500px] mx-auto">
            Sign up for our fortnightly newsletter featuring travel tips, events, and insider guides to Marrakech.
          </p>
          <div className="flex max-w-[440px] mx-auto">
            <input type="email" placeholder="Your email address"
              className="flex-1 px-[18px] py-3.5 border border-[#444] bg-transparent text-white text-[.9rem] outline-none transition-colors duration-300 placeholder:text-[#666] focus:border-[#c2956b]" />
            <button className="px-7 py-3.5 text-white border-none text-[.75rem] font-semibold uppercase tracking-[2px] cursor-pointer transition-colors duration-300"
              style={{ background: WARM }}
              onMouseOver={e => (e.currentTarget.style.background = PINK)}
              onMouseOut={e => (e.currentTarget.style.background = WARM)}
            >Subscribe</button>
          </div>
        </RevealSection>
      </section>

      {/* ── FOOTER ── */}
      <footer className="px-10 pt-[60px] pb-[30px] flex flex-col items-center gap-5" style={{ background: BLACK, color: 'rgba(255,255,255,.6)' }}>
        <div className="text-white text-[1.4rem] font-bold tracking-[2px] uppercase">El Fenn</div>
        <div className="text-center text-[.85rem] leading-[1.8]">
          2 Derb Moulay Abdullah Ben Hezzian<br />
          Bab El Ksour, Medina<br />
          Marrakech 40000, Morocco<br />
          +212 524 44 1220
        </div>
        <div className="flex gap-6">
          {['Facebook','Instagram','Pinterest','TripAdvisor'].map(s => (
            <a key={s} href="#" className="text-[.8rem] uppercase tracking-[1.5px] transition-colors duration-300" style={{ color: 'rgba(255,255,255,.5)' }}
              onMouseOver={e => (e.currentTarget.style.color = WARM)}
              onMouseOut={e => (e.currentTarget.style.color = 'rgba(255,255,255,.5)')}
            >{s}</a>
          ))}
        </div>
        <div className="flex gap-6 flex-wrap justify-center">
          {['Find Us','Rooms','Food & Drink','Rooftop Bar','Spa','Boutique','Privacy'].map(l => (
            <a key={l} href="#" className="text-[.75rem] uppercase tracking-[1px] transition-colors duration-300" style={{ color: 'rgba(255,255,255,.4)' }}
              onMouseOver={e => (e.currentTarget.style.color = '#fff')}
              onMouseOut={e => (e.currentTarget.style.color = 'rgba(255,255,255,.4)')}
            >{l}</a>
          ))}
        </div>
        <div className="text-[.75rem] mt-5" style={{ color: 'rgba(255,255,255,.25)' }}>© 2026 El Fenn — Demo Concept Only</div>
      </footer>

      <ScrollTop bg={WARM} color="#fff" hoverBg={PINK} hoverColor="#fff" />
    </>
  )
}
