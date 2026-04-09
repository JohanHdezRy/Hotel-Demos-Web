import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useCarousel } from '../../hooks/useCarousel'
import RevealSection from '../../components/animations/RevealSection'
import BlurText from '../../components/animations/BlurText'
import GlareHover from '../../components/animations/GlareHover'
import location from '../../styles/img/demo-3/cozumel2.jpg'
import hotel from '../../styles/img/demo-3/hotel2.jpg'
import hote2 from '../../styles/img/demo-3/hotel3.jpg'
import hote3 from '../../styles/img/demo-3/hotel4.jpg'
import room1 from '../../styles/img/demo-3/room.jpg'
import room2 from '../../styles/img/demo-3/room2.jpg'
import room3 from '../../styles/img/demo-3/room3.jpg'
import room4 from '../../styles/img/demo-3/room4.jpg'
import room5 from '../../styles/img/demo-3/room5.jpg'
import room6 from '../../styles/img/demo-3/room6.jpg'
import dinner from '../../styles/img/demo-3/dinner.jpg'
import gal from '../../styles/img/demo-3/yard1.jpg'
import gal2 from '../../styles/img/demo-3/yard2.jpg'
import gal3 from '../../styles/img/demo-3/terrace.jpg'
import gal4 from '../../styles/img/demo-3/lobby.jpg'

const IMG = {
  slides: [hotel, hote2, hote3],
  location,
  hipHotels: hotel,
  services: dinner,
  rooms: [
    { img: room1, name: 'Standard Double Rooms' },
    { img: room2, name: 'Superior Rooms with Balcony' },
    { img: room3, name: 'Junior Suites' },
    { img: room4, name: 'Urban Suite' },
    { img: room5, name: 'Urban Suite with Private Patio & Jacuzzi' },
    { img: room6, name: 'Two-Bedroom Family Suite with Balcony' },
    { img: room1, name: 'Acropolis Loft' },
    { img: room2, name: 'Deluxe Suite with Acropolis View & Terrace' },
  ],
  gallery: [gal, gal2, gal3, gal4],
}

const NAV_LINKS = ['HOME', '3ELEMENTS', 'BLOG', 'ROOMS', 'SERVICES', 'LOCATION', 'HIP HOTELS', 'PHOTO GALLERY', 'CONTACT']

export function MiconStreet() {
  const { index: slide, next: nextSlide, goTo: goSlide } = useCarousel(IMG.slides.length)

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [nextSlide])

  return (
    <div>
      <Link to="/" className="fixed top-4 left-4 z-[9999] bg-black/65 text-white text-[.72rem] tracking-[1px] px-3.5 py-[7px] rounded-[3px] backdrop-blur-md hover:bg-black/80 transition-colors duration-200">← Demos</Link>

      {/* ===== NAVBAR ===== */}
      <nav className="fixed top-0 left-0 w-full z-[100] bg-white shadow-[0_1px_8px_rgba(0,0,0,.06)]">
        <div className="flex items-center justify-between px-[30px] py-3.5">
          <div className="flex items-baseline gap-1.5">
            <span className="font-[var(--font-playfair)] text-[2.6rem] font-black text-[#222] leading-none">18</span>
            <span className="font-[var(--font-roboto)] text-[1.4rem] font-light text-[#222] uppercase tracking-[2px]">MICON</span>
            <span className="font-[var(--font-cormorant)] italic text-[1.1rem] text-[#888] ml-0.5">Street</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[.8rem] text-[#666] cursor-pointer">EN ▾</span>
            <button className="font-[var(--font-roboto)] text-[.75rem] tracking-[1px] uppercase px-[22px] py-2.5 bg-[#222] text-white border-none cursor-pointer transition-colors duration-300 hover:bg-[#444]">
              BOOK NOW
            </button>
            <div className="w-9 h-9 border border-[#ddd] flex items-center justify-center text-base text-[#222] cursor-pointer rounded-[2px]">📍</div>
          </div>
        </div>
        <div className="flex justify-center flex-wrap px-5 border-t border-[#eee]">
          {NAV_LINKS.map(l => (
            <a key={l} href="#" className="font-[var(--font-roboto)] font-medium text-[.72rem] tracking-[1.5px] uppercase text-[#222] px-[18px] py-3.5 transition-colors duration-300 hover:text-[#888]">{l}</a>
          ))}
        </div>
      </nav>

      {/* ===== HERO SLIDER ===== */}
      <section className="relative h-[80vh] mt-[120px] overflow-hidden">
        {IMG.slides.map((src, i) => (
          <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${i === slide ? 'opacity-100' : 'opacity-0'}`}>
            <img
              src={src}
              alt={`Slide ${i + 1}`}
              className={`w-full h-full object-cover ${i === slide ? 'ken-burns' : ''}`}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 pointer-events-none" />

        {/* Overlay title */}
        <div className="absolute top-1/2 left-10 -translate-y-1/2 text-white">
          <p className="text-[.6rem] tracking-[5px] uppercase text-white/60 mb-3 font-[var(--font-roboto)]">Monastiraki · Athens</p>
          <h1 className="font-[var(--font-playfair)] text-[clamp(2.5rem,5vw,4rem)] font-bold leading-tight mb-2">18 MICON</h1>
          <h2 className="font-[var(--font-cormorant)] italic text-[clamp(1.5rem,3vw,2.2rem)] font-light text-white/80">Street Hotel</h2>
        </div>

        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-black/55 text-white text-[.68rem] tracking-[1px] px-5 py-2 uppercase font-[var(--font-roboto)] backdrop-blur-sm">
          World Boutique Hotels Awards 2018
        </div>
        <div className="absolute bottom-[55px] left-1/2 -translate-x-1/2 flex gap-2">
          {IMG.slides.map((_, i) => (
            <div
              key={i}
              onClick={() => goSlide(i)}
              className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${i === slide ? 'bg-white scale-125' : 'bg-white/40'}`}
            />
          ))}
        </div>
      </section>

      {/* ===== INTRO ===== */}
      <RevealSection variant="fadeUp">
        <section className="px-10 py-[70px] max-w-[900px] mx-auto">
          <p className="font-[var(--font-roboto)] text-base leading-[1.9] text-[#444] font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus vitae massa
            faucibus fermentum. Praesent a libero vitae nulla cursus aliquam at vel velit.
            Curabitur sed semper nisl, eget efficitur augue. Nulla facilisi. In hac habitasse
            platea dictumst. Fusce dignissim enim vitae ante consequat, non blandit purus hendrerit.
            Integer sollicitudin orci vel erat vehicula, at convallis nulla dictum. Suspendisse
            potenti. Vivamus lacinia odio vitae vestibulum vestibulum.
          </p>
        </section>
      </RevealSection>

      {/* ===== FEATURES CARDS ===== */}
      <RevealSection variant="scale">
        <section className="px-10 pb-20 max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { img: IMG.location,  title: 'Location',  desc: '5 minutes walk from the Monastiraki Metro station, just under the Acropolis' },
              { img: IMG.hipHotels, title: 'HIP Hotels', desc: '18 Micon Street is a member of the prestigious HIP HOTELS association' },
              { img: IMG.services,  title: 'Services',   desc: 'Wide range of services and amenities i.e. breakfast, decompression lounge, etc.' },
            ].map(card => (
              <div key={card.title} className="relative h-[380px] overflow-hidden cursor-pointer group">
                <GlareHover glareColor="#888888" glareOpacity={0.2} glareSize={280} borderRadius={0}>
                  <img src={card.img} alt={card.title} className="w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-[1.06]" />
                </GlareHover>
                <div className="absolute inset-0 bg-[#323232]/55 flex flex-col items-center justify-center text-center px-5 transition-colors duration-[400ms] group-hover:bg-[#323232]/70">
                  <h3 className="font-[var(--font-roboto)] font-medium text-[.8rem] tracking-[3px] uppercase text-white mb-2.5">{card.title}</h3>
                  <p className="font-[var(--font-roboto)] text-[.78rem] text-white/80 leading-[1.6] max-w-[250px] font-light">{card.desc}</p>
                  <span className="mt-3 text-[.68rem] text-white/60 italic tracking-[1px]">click for more...</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </RevealSection>

      {/* ===== 3ELEMENTS ===== */}
      <RevealSection variant="fadeLeft">
        <section className="px-10 py-20 max-w-[900px] mx-auto">
          <p className="font-[var(--font-roboto)] text-base leading-[1.9] text-[#444] font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus libero vel
            sapien convallis, non tincidunt leo mattis. Etiam auctor, massa eget hendrerit
            dignissim, nisl nulla aliquet velit, vel lobortis ex ligula ac augue. Suspendisse
            in vestibulum felis, eget fermentum orci. Curabitur ut turpis eget arcu consequat
            faucibus. Proin euismod risus in nunc eleifend, vel posuere magna fringilla.
            Integer accumsan magna vel enim suscipit, vel dignissim felis consequat.
          </p>
        </section>
      </RevealSection>

      {/* ===== ROOMS GRID ===== */}
      <RevealSection variant="fadeUp">
        <section className="px-10 pb-20 max-w-[1100px] mx-auto">
          <BlurText
            text="Our Rooms and Suites"
            className="font-[var(--font-playfair)] text-[1.8rem] font-normal text-[#222] mb-10 text-center"
            animateBy="words" direction="top" delay={70} stepDuration={0.4}
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {IMG.rooms.map((r, i) => (
              <div key={i} className="cursor-pointer transition-transform duration-[400ms] hover:-translate-y-1.5">
                <GlareHover glareColor="#ffffff" glareOpacity={0.15} glareSize={240} borderRadius={4}>
                  <img src={r.img} alt={r.name} className="w-full h-[200px] object-cover mb-3 rounded-[1px]" />
                </GlareHover>
                <p className="font-[var(--font-roboto)] text-[.85rem] text-[#222] text-center font-normal leading-[1.4]">{r.name}</p>
              </div>
            ))}
          </div>
        </section>
      </RevealSection>

      {/* ===== GALLERY STRIP ===== */}
      <RevealSection variant="fadeRight">
        <section className="overflow-hidden">
          <div className="flex gap-1">
            {IMG.gallery.map((g, i) => (
              <img key={i} src={g} alt={`Gallery ${i + 1}`} className="h-[280px] object-cover flex-shrink-0 w-[calc(25%-3px)] md:h-[280px] h-[180px]" />
            ))}
          </div>
        </section>
      </RevealSection>

      {/* ===== FOOTER ===== */}
      <footer className="px-10 pt-[50px] pb-[30px] max-w-[900px] mx-auto">
        {[
          {
            title: 'Contact us',
            content: <div className="font-[var(--font-roboto)] text-[.85rem] text-[#444] leading-[1.8] font-light">
              📍 Esopou 14 & Mikonos 18 - 10554 Athens - Greece<br />
              📞 Tel. +30 2103235307<br />
              ✉ concierge@18miconstr.com<br />
              ✉ reservations@18miconstr.com
            </div>
          },
          {
            title: 'Social media',
            content: <div className="flex gap-2.5 mt-1.5">
              {['TA','f','ig'].map(s => (
                <a key={s} href="#" className="w-[34px] h-[34px] bg-[#222] rounded-full flex items-center justify-center text-white text-[.75rem] transition-colors duration-300 hover:bg-[#555]">{s}</a>
              ))}
            </div>
          },
          {
            title: 'Reviews',
            content: <p className="font-[var(--font-roboto)] text-[.85rem] text-[#444] font-light">💬 Guest reviews on TripAdvisor</p>
          },
          {
            title: '',
            content: <div className="flex flex-wrap gap-[15px]">
              {['Press','Psiri','Awards','Explore our other properties'].map(l => (
                <a key={l} href="#" className="font-[var(--font-roboto)] text-[.82rem] text-[#666] font-light transition-colors duration-300 hover:text-[#222]">{l}</a>
              ))}
            </div>
          },
        ].map((section, i) => (
          <div key={i} className="mb-[30px]">
            {section.title && (
              <h3 className="font-[var(--font-roboto)] text-[.9rem] text-[#888] font-light pb-2.5 border-b border-[#eee] mb-[15px]">{section.title}</h3>
            )}
            {section.content}
          </div>
        ))}
      </footer>

      <div className="text-center px-10 py-5 border-t border-[#eee] font-[var(--font-roboto)] text-[.7rem] text-[#999]">
        <div className="flex justify-center mb-[15px]">
          <button
            className="w-10 h-10 border border-[#ccc] rounded-full flex items-center justify-center text-base text-[#888] bg-transparent cursor-pointer transition-all duration-300 hover:border-[#222] hover:text-[#222]"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >⌃</button>
        </div>
        © 2026 18 Micon Street — Demo para promoción hotelera
      </div>
    </div>
  )
}
