import { Link } from 'react-router-dom'
import { ScrollTop } from '../../components/ScrollTop'
import { useGsapHero } from '../../hooks/useGsapHero'
import RevealSection from '../../components/animations/RevealSection'
import GlareHover from '../../components/animations/GlareHover'
import room from '../../styles/img/demo-8/room.jpg'
import room2 from '../../styles/img/demo-8/room2.jpg'
import room3 from '../../styles/img/demo-8/room3.jpg'
import room4 from '../../styles/img/demo-8/room4.jpg'
import room5 from '../../styles/img/demo-8/room5.jpg'
import room6 from '../../styles/img/demo-8/room6.jpg'
import hotel from '../../styles/img/demo-8/hotel.jpg'
import spa from '../../styles/img/demo-8/spa1.jpg'
import dinner from '../../styles/img/demo-8/restaurant1.jpg'
import act1 from '../../styles/img/demo-8/event.jpg'
import act2 from '../../styles/img/demo-8/event2.jpg'
import act3 from '../../styles/img/demo-8/walk.jpg'

const NAVY  = '#1a2744'
const GOLD  = '#c9a96e'
const CREAM = '#f8f6f2'
const LIGHT = '#f3f1ed'
const TEXT  = '#4a4a48'

const IMG = {
  hero: hotel,
  spa,
  rooms: [
    { img: room,  name: 'Grand Suites',    desc: 'Opulent palace suites with Alpine views' },
    { img: room2, name: 'Junior Suites',   desc: 'Elegant rooms with contemporary luxury' },
    { img: room3, name: 'Classic Rooms',   desc: 'Refined mountain retreats' },
    { img: room4, name: 'Deluxe Rooms',    desc: 'Premium comfort with valley vistas' },
    { img: room5, name: 'Palace Rooms',    desc: 'Historic heritage accommodations' },
    { img: room6, name: 'Superior Rooms',  desc: 'Spacious quarters with balconies' },
  ],
  dining: dinner,
  activities: [
    { img: act1, name: 'Alpine Skiing',     desc: 'World-class slopes and pristine powder' },
    { img: act2, name: 'Polo & Equestrian', desc: 'Legendary St. Moritz polo tradition' },
    { img: act3, name: 'Lakeside Sailing',  desc: 'Summer on the frozen lake turned summer' },
    { img: act1, name: 'Mountain Hiking',   desc: 'Alpine trails with breathtaking vistas' },
  ],
}

export function BadruttsPalace() {
  const heroRef = useGsapHero<HTMLElement>()

  return (
    <>
      <Link to="/" className="fixed top-4 left-4 z-[9999] bg-black/65 text-white text-[.72rem] tracking-[1px] px-3.5 py-[7px] rounded-[3px] backdrop-blur-md hover:bg-black/80 transition-colors duration-200">← Demos</Link>

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-[60px] h-[72px] backdrop-blur-[8px] border-b" style={{ background: `rgba(26,39,68,.94)`, borderColor: `rgba(201,169,110,.1)` }}>
        <div className="font-[var(--font-playfair)] font-normal text-[1.6rem] text-white tracking-[3px]">BADRUTT'S PALACE</div>
        <nav className="hidden md:flex gap-10 font-[var(--font-lato)]">
          {[['#rooms','Rooms'],['#dining','Dining'],['#spa','Wellness'],['#activities','Activities']].map(([href,label]) => (
            <a key={href} href={href} className="font-medium text-[.75rem] uppercase tracking-[2px] transition-colors duration-300" style={{ color: 'rgba(255,255,255,.7)' }}
              onMouseOver={e => (e.currentTarget.style.color = GOLD)}
              onMouseOut={e => (e.currentTarget.style.color = 'rgba(255,255,255,.7)')}
            >{label}</a>
          ))}
        </nav>
        <button className="font-[var(--font-lato)] font-semibold text-[.7rem] uppercase tracking-[2px] px-7 py-3 border-none cursor-pointer transition-all duration-300 hover:-translate-y-0.5" style={{ background: GOLD, color: NAVY }}
          onMouseOver={e => (e.currentTarget.style.background = '#d4b896')}
          onMouseOut={e => (e.currentTarget.style.background = GOLD)}
        >Reserve</button>
      </header>

      {/* HERO */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        <img src={IMG.hero} alt="Badrutt's Palace St. Moritz" className="gh-img w-full h-full object-cover brightness-[.8]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a2744]/30 via-transparent to-[#1a2744]/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-10">
          <p className="gh-label font-[var(--font-lato)] text-[.6rem] tracking-[6px] uppercase mb-7" style={{ color: GOLD }}>
            St. Moritz · Switzerland · Since 1896
          </p>
          <div style={{ overflow: 'hidden' }}>
            <h1 className="gh-line text-white font-[var(--font-playfair)] font-normal text-[clamp(2.8rem,6vw,5.5rem)] tracking-[6px]">
              BADRUTT'S
            </h1>
          </div>
          <div style={{ overflow: 'hidden' }} className="mb-6">
            <h1 className="gh-line text-white font-[var(--font-playfair)] font-normal text-[clamp(2.8rem,6vw,5.5rem)] tracking-[6px]">
              PALACE
            </h1>
          </div>
          <p className="gh-meta font-[var(--font-lato)] font-light text-[.85rem] tracking-[3px] uppercase" style={{ color: 'rgba(255,255,255,.65)' }}>
            A Legacy of Excellence · Est. 1896
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="px-[50px] py-[140px] text-center max-w-[850px] mx-auto" style={{ background: CREAM }}>
        <RevealSection variant="fadeUp">
          <h2 className="font-[var(--font-playfair)] font-normal text-[2.8rem] tracking-[2px] mb-6" style={{ color: NAVY }}>Where Magic Happens</h2>
          <div className="w-[50px] h-0.5 mx-auto mb-8" style={{ background: GOLD }} />
          <p className="font-[var(--font-lato)] text-[.95rem] leading-[2.1] font-light" style={{ color: TEXT }}>
            Badrutt's Palace St. Moritz stands as a beacon of timeless luxury in the
            heart of the Swiss Alps. Since 1896, this legendary grand palace hotel has
            hosted royalty, celebrities, and discerning travelers from around the world.
            Nestled above the glittering frozen lake, our palace blends European heritage
            with contemporary elegance, offering an unparalleled experience of Alpine splendor.
          </p>
          <div className="mt-8 text-[.8rem] font-semibold uppercase tracking-[2px]" style={{ color: GOLD }}>A Legacy of Excellence · Est. 1896</div>
        </RevealSection>
      </section>

      {/* ROOMS */}
      <section className="px-[50px] py-[120px]" style={{ background: LIGHT }} id="rooms">
        <RevealSection variant="fadeLeft">
          <h2 className="font-[var(--font-playfair)] font-normal text-center text-[2.6rem] tracking-[2px] mb-[60px]" style={{ color: NAVY }}>Accommodations</h2>
        </RevealSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] max-w-[1200px] mx-auto">
          {IMG.rooms.map((r, i) => (
            <RevealSection key={i} delay={i * 0.08} variant="fadeUp">
              <div className="overflow-hidden cursor-pointer bg-white rounded-[2px] shadow-[0_4px_12px_rgba(0,0,0,.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_12px_32px_rgba(0,0,0,.15)]">
                <GlareHover glareColor={GOLD} glareOpacity={0.22} glareSize={300} borderRadius={0}>
                  <img src={r.img} alt={r.name} className="w-full object-cover transition-transform duration-[600ms] hover:scale-[1.05]" style={{ aspectRatio: '16/10' }} />
                </GlareHover>
                <div className="px-6 py-7">
                  <h4 className="font-[var(--font-playfair)] font-normal text-[1.2rem] mb-2" style={{ color: NAVY }}>{r.name}</h4>
                  <span className="font-[var(--font-lato)] text-[.85rem] font-light" style={{ color: TEXT }}>{r.desc}</span>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* DINING */}
      <section className="relative min-h-[600px] overflow-hidden flex items-center justify-center" id="dining">
        <img src={IMG.dining} alt="Dining at Badrutt's Palace" className="absolute inset-0 w-full h-full object-cover brightness-[.65]" />
        <RevealSection variant="fadeUp">
          <div className="relative z-10 text-center px-[50px] py-[60px] max-w-[700px] rounded-[2px]" style={{ background: `rgba(26,39,68,.8)` }}>
            <h2 className="text-white font-[var(--font-playfair)] font-normal text-[2.4rem] tracking-[2px] mb-[18px]">Fine Dining & Gastronomy</h2>
            <p className="text-white/75 font-[var(--font-lato)] text-[.95rem] leading-[2] font-light">
              Experience culinary excellence across our distinguished restaurants.
              From Michelin-starred cuisine to casual Alpine fare, each establishment
              showcases the finest ingredients and masterful preparation.
            </p>
            <div className="grid grid-cols-3 gap-6 mt-10">
              {[{ name: 'Le Restaurant', sub: 'Haute Cuisine' },{ name: 'Giardino', sub: 'Italian Classics' },{ name: "King's Club", sub: 'Casual Elegance' }].map(rest => (
                <div key={rest.name} className="p-5 text-center border-t-2 rounded-[2px]" style={{ background: 'rgba(26,39,68,.5)', borderColor: GOLD }}>
                  <h4 className="font-[var(--font-playfair)] text-white text-[1.1rem] font-normal mb-1.5">{rest.name}</h4>
                  <span className="font-[var(--font-lato)] text-[.8rem]" style={{ color: 'rgba(255,255,255,.6)' }}>{rest.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </RevealSection>
      </section>

      {/* SPA */}
      <section className="px-[50px] py-[120px]" style={{ background: CREAM }} id="spa">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-center max-w-[1200px] mx-auto">
          <RevealSection variant="fadeUp">
            <div>
              <h2 className="font-[var(--font-playfair)] font-normal text-[2.6rem] tracking-[2px] mb-5" style={{ color: NAVY }}>Spa & Wellness</h2>
              <div className="w-10 h-0.5 mb-7" style={{ background: GOLD }} />
              <p className="font-[var(--font-lato)] text-[.95rem] leading-[2] font-light" style={{ color: TEXT }}>
                Retreat to our world-class spa and wellness sanctuary. Discover rejuvenating
                treatments inspired by Alpine traditions, state-of-the-art fitness facilities,
                and thermal pools with panoramic mountain views. Our expert therapists are
                dedicated to restoring your body and spirit.
              </p>
            </div>
          </RevealSection>
          <div>
            <img src={IMG.spa} alt="Spa & Wellness" className="w-full h-[400px] object-cover rounded-[2px]" />
          </div>
        </div>
      </section>

      {/* ACTIVITIES */}
      <section className="px-[50px] py-[120px]" style={{ background: LIGHT }} id="activities">
        <RevealSection variant="fadeUp">
          <h2 className="font-[var(--font-playfair)] font-normal text-center text-[2.6rem] tracking-[2px] mb-[60px]" style={{ color: NAVY }}>Alpine Experiences</h2>
        </RevealSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] max-w-[1100px] mx-auto">
          {IMG.activities.map((a, i) => (
            <RevealSection key={i} delay={i * 0.1} variant="fadeUp">
              <div className="relative h-[320px] overflow-hidden rounded-[2px] cursor-pointer group">
                <GlareHover glareColor={GOLD} glareOpacity={0.22} glareSize={300} borderRadius={0}>
                  <img src={a.img} alt={a.name} className="w-full h-full object-cover transition-transform duration-[600ms] brightness-[.75] group-hover:scale-[1.08]" />
                </GlareHover>
                <div className="absolute inset-0 flex flex-col justify-end px-10 pb-10" style={{ background: 'linear-gradient(180deg,transparent,rgba(26,39,68,.7))' }}>
                  <h4 className="font-[var(--font-playfair)] text-white text-[1.6rem] font-normal mb-2">{a.name}</h4>
                  <p className="font-[var(--font-lato)] text-white/75 text-[.9rem]">{a.desc}</p>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="px-[50px] py-[100px] text-center" style={{ background: NAVY }}>
        <RevealSection variant="fadeUp">
          <h2 className="font-[var(--font-playfair)] text-white font-normal text-[2.2rem] tracking-[2px] mb-3.5">Discover More</h2>
          <p className="font-[var(--font-lato)] text-white/60 text-[.95rem] mb-8">Exclusive offers, Alpine experiences, and palace traditions delivered to your inbox.</p>
          <div className="flex max-w-[450px] mx-auto border" style={{ borderColor: `rgba(201,169,110,.3)` }}>
            <input type="email" placeholder="Your email address"
              className="flex-1 px-[18px] py-4 border-none bg-transparent text-white text-[.9rem] outline-none font-[var(--font-lato)] placeholder:text-white/40" />
            <button className="font-[var(--font-lato)] font-semibold text-[.75rem] uppercase tracking-[2px] px-8 py-4 border-none cursor-pointer transition-colors duration-300" style={{ background: GOLD, color: NAVY }}
              onMouseOver={e => (e.currentTarget.style.background = '#d4b896')}
              onMouseOut={e => (e.currentTarget.style.background = GOLD)}
            >Subscribe</button>
          </div>
        </RevealSection>
      </section>

      {/* FOOTER */}
      <footer className="px-[50px] pt-[60px] pb-10 flex flex-col items-center gap-6 border-t" style={{ background: NAVY, color: 'rgba(255,255,255,.5)', borderColor: `rgba(201,169,110,.15)` }}>
        <div className="font-[var(--font-playfair)] font-normal text-[1.8rem] tracking-[3px]" style={{ color: 'rgba(255,255,255,.8)' }}>BADRUTT'S PALACE</div>
        <div className="font-[var(--font-lato)] text-[.8rem] leading-[2] font-light text-center">
          St. Moritz<br />Grisons, Switzerland<br />+41 81 837 1000
        </div>
        <div className="flex gap-7 flex-wrap justify-center">
          {['Rooms','Dining','Wellness','Activities','Contact'].map(l => (
            <a key={l} href="#" className="font-[var(--font-lato)] text-[.7rem] uppercase tracking-[1px] transition-colors duration-300" style={{ color: 'rgba(255,255,255,.35)' }}
              onMouseOver={e => (e.currentTarget.style.color = GOLD)}
              onMouseOut={e => (e.currentTarget.style.color = 'rgba(255,255,255,.35)')}
            >{l}</a>
          ))}
        </div>
        <div className="font-[var(--font-lato)] text-[.7rem]" style={{ color: 'rgba(255,255,255,.15)' }}>© 2026 Badrutt's Palace — Demo Concept Only</div>
      </footer>

      <ScrollTop bg={GOLD} color={NAVY} hoverBg={NAVY} hoverColor={GOLD} />
    </>
  )
}
