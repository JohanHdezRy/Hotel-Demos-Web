import { Link } from 'react-router-dom'
import { ScrollTop } from '../../components/ScrollTop'
import { useGsapHero } from '../../hooks/useGsapHero'
import RevealSection from '../../components/animations/RevealSection'
import GlareHover from '../../components/animations/GlareHover'
import hotel from '../../styles/img/demo-5/hotel.jpg'
import prop from '../../styles/img/demo-5/room.jpg'
import prop2 from '../../styles/img/demo-5/room2.jpg'
import prop3 from '../../styles/img/demo-5/room3.jpg'
import villa from '../../styles/img/demo-5/villa.jpg'
import villa2 from '../../styles/img/demo-5/villa2.jpg'
import villa3 from '../../styles/img/demo-5/villa3.jpg'
import villa4 from '../../styles/img/demo-5/hotel2.jpg'
import well from '../../styles/img/demo-5/fitness1.jpg'
import awa from '../../styles/img/demo-5/hotel.jpg'

const SAGE      = '#798D77'
const DARK_SAGE = '#5a6e58'
const CREAM     = '#fdfdf7'
const SAND      = '#f0ebe3'
const DARK      = '#2a2a28'
const TEXT      = '#4a4a48'
const GOLD      = '#b09a6f'

const IMG = {
  hero: hotel,
  properties: [
    { img: prop,  name: 'Song Saa Private Island', desc: "Award-winning overwater and jungle villas in Cambodia's Koh Rong Archipelago. A sanctuary where luxury meets conservation." },
    { img: prop2, name: 'Song Saa Reserve',        desc: 'A regenerative mixed-use development combining reforestation, hospitality, and cultural preservation across 400 hectares.' },
    { img: prop3, name: 'Saraan Sanctuaries',      desc: 'Holistic wellbeing concept integrating nature immersion, indigenous wisdom, and transformative healing journeys.' },
  ],
  villas: [
    { img: villa,  name: 'Overwater Villa',     detail: '1-2 bedrooms · Ocean views' },
    { img: villa2, name: 'Jungle Villa',         detail: '1-2 bedrooms · Rainforest canopy' },
    { img: villa3, name: 'Royal Villa',          detail: '2 bedrooms · Private pool & beach' },
    { img: villa4, name: 'Two-Bedroom Villa',    detail: 'Family · Lagoon access' },
  ],
  wellness: well,
  awards: awa,
}

export function SongSaa() {
  const heroRef = useGsapHero<HTMLElement>()

  return (
    <>
      <Link to="/" className="fixed top-4 left-4 z-[9999] bg-black/65 text-white text-[.72rem] tracking-[1px] px-3.5 py-[7px] rounded-[3px] backdrop-blur-md hover:bg-black/80 transition-colors duration-200">← Demos</Link>

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-[50px] h-[72px] backdrop-blur-[10px] border-b" style={{ background: 'rgba(253,253,247,.9)', borderColor: 'rgba(121,141,119,.12)' }}>
        <div className="font-[var(--font-dm-serif)] text-[1.5rem] tracking-[1px]" style={{ color: SAGE }}>Song Saa</div>
        <nav className="hidden md:flex gap-[30px]">
          {[['#properties','Properties'],['#villas','Villas'],['#wellness','Wellbeing'],['#sustain','Sustainability'],['#about','About']].map(([href,label]) => (
            <a key={href} href={href} className="font-[var(--font-dm-sans)] font-medium text-[.78rem] uppercase tracking-[1.8px] transition-colors duration-300" style={{ color: TEXT }}
              onMouseOver={e => (e.currentTarget.style.color = SAGE)}
              onMouseOut={e => (e.currentTarget.style.color = TEXT)}
            >{label}</a>
          ))}
        </nav>
        <div className="flex gap-3.5">
          <button className="font-[var(--font-dm-sans)] bg-transparent font-semibold text-[.72rem] uppercase tracking-[2px] px-5 py-2.5 border rounded-[2px] cursor-pointer transition-all duration-300" style={{ color: SAGE, borderColor: SAGE }}
            onMouseOver={e => { e.currentTarget.style.background = SAGE; e.currentTarget.style.color = '#fff' }}
            onMouseOut={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = SAGE }}
          >Donate</button>
          <button className="font-[var(--font-dm-sans)] font-semibold text-[.72rem] uppercase tracking-[2px] px-6 py-2.5 text-white border-none rounded-[2px] cursor-pointer transition-colors duration-300" style={{ background: SAGE }}
            onMouseOver={e => (e.currentTarget.style.background = DARK_SAGE)}
            onMouseOut={e => (e.currentTarget.style.background = SAGE)}
          >Book</button>
        </div>
      </header>

      {/* HERO */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        <img src={IMG.hero} alt="Song Saa Private Island" className="gh-img w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg,rgba(42,42,40,.35) 0%,rgba(42,42,40,.15) 50%,rgba(42,42,40,.55) 100%)' }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-10">
          <p className="gh-label font-[var(--font-dm-sans)] text-[.62rem] tracking-[6px] uppercase mb-7" style={{ color: GOLD }}>
            Koh Rong Archipelago · Cambodia
          </p>
          <div style={{ overflow: 'hidden' }}>
            <h1 className="gh-line font-[var(--font-dm-serif)] text-white text-[clamp(3rem,7vw,5rem)] font-normal tracking-[2px]">
              Song Saa
            </h1>
          </div>
          <div style={{ overflow: 'hidden' }} className="mb-8">
            <p className="gh-line font-[var(--font-dm-sans)] text-white/80 text-[1rem] font-light tracking-[2px]">
              Building a future where business can heal, not harm
            </p>
          </div>
          <div className="gh-meta flex flex-col items-center gap-2 text-white/60 text-[.75rem] uppercase tracking-[3px]">
            Discover
            <span className="block w-px h-10 bg-white/40" style={{ animation: 'scrollPulse 2s ease infinite' }} />
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="px-10 py-[120px] text-center max-w-[850px] mx-auto" style={{ background: CREAM }} id="about">
        <RevealSection variant="fadeUp">
          <h2 className="font-[var(--font-dm-serif)] text-[2.6rem] mb-5" style={{ color: DARK }}>Regenerative Luxury</h2>
          <div className="w-10 h-0.5 mx-auto mb-[30px]" style={{ background: SAGE }} />
          <p className="font-[var(--font-dm-sans)] text-base leading-[2]" style={{ color: TEXT }}>
            Song Saa Collective is a pioneering force in regenerative tourism,
            weaving together luxury hospitality, environmental conservation, and
            community empowerment. Our vision is simple yet transformative: to prove
            that business can be a force for healing — restoring marine habitats,
            preserving ancient cultures, and nurturing human wellbeing.
          </p>
          <div className="flex gap-[30px] justify-center mt-10 flex-wrap">
            {['B-Corp Certified','Regenerative Travel','Virtuoso Member'].map(cert => (
              <span key={cert} className="font-[var(--font-dm-sans)] text-[.75rem] font-semibold uppercase tracking-[2px] px-4 py-2 border rounded-[2px]" style={{ color: SAGE, borderColor: SAGE }}>
                {cert}
              </span>
            ))}
          </div>
        </RevealSection>
      </section>

      {/* PROPERTIES */}
      <section className="px-10 py-[100px]" style={{ background: SAND }} id="properties">
        <RevealSection variant="fadeUp">
          <h2 className="font-[var(--font-dm-serif)] text-center text-[2.2rem] mb-[60px]" style={{ color: DARK }}>Our World</h2>
        </RevealSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] max-w-[1200px] mx-auto">
          {IMG.properties.map((p, i) => (
            <RevealSection key={i} delay={i * 0.15} variant="fadeUp">
              <div className="relative overflow-hidden rounded-[6px] cursor-pointer bg-white group">
                <GlareHover glareColor={SAGE} glareOpacity={0.2} glareSize={320} borderRadius={0}>
                  <img src={p.img} alt={p.name} className="w-full object-cover transition-transform duration-[600ms] group-hover:scale-[1.05]" style={{ aspectRatio: '4/3' }} />
                </GlareHover>
                <div className="p-6">
                  <h3 className="font-[var(--font-dm-serif)] text-[1.3rem] mb-2" style={{ color: DARK }}>{p.name}</h3>
                  <p className="text-[.88rem] leading-[1.7]" style={{ color: TEXT }}>{p.desc}</p>
                  <span className="inline-block mt-3.5 text-[.75rem] uppercase tracking-[2px] font-semibold font-[var(--font-dm-sans)]" style={{ color: SAGE }}>Explore →</span>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* VILLAS */}
      <section className="px-10 py-[100px]" style={{ background: CREAM }} id="villas">
        <RevealSection variant="fadeUp">
          <h2 className="font-[var(--font-dm-serif)] text-center text-[2.2rem] mb-3.5" style={{ color: DARK }}>Island Retreats</h2>
          <p className="text-center text-[.95rem] mb-[50px]" style={{ color: TEXT }}>Each villa is a private sanctuary surrounded by pristine nature</p>
        </RevealSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1000px] mx-auto">
          {IMG.villas.map((v, i) => (
            <RevealSection key={i} delay={i * 0.1} variant="fadeUp">
              <div className="relative overflow-hidden rounded-[6px] cursor-pointer group">
                <GlareHover glareColor={GOLD} glareOpacity={0.22} glareSize={300} borderRadius={0}>
                  <img src={v.img} alt={v.name} className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" style={{ aspectRatio: '16/10' }} />
                </GlareHover>
                <div className="absolute bottom-0 left-0 right-0 p-6" style={{ background: 'linear-gradient(transparent,rgba(42,42,40,.7))' }}>
                  <h4 className="font-[var(--font-dm-serif)] text-white text-[1.2rem]">{v.name}</h4>
                  <span className="text-[.8rem] font-medium" style={{ color: GOLD }}>{v.detail}</span>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* WELLNESS */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[550px]" id="wellness">
        <div className="overflow-hidden">
          <img src={IMG.wellness} alt="Wellness" className="w-full h-full object-cover" />
        </div>
        <RevealSection variant="fadeUp">
          <div className="flex flex-col justify-center px-[60px] py-20" style={{ background: SAGE }}>
            <h2 className="font-[var(--font-dm-serif)] text-white text-[2rem] mb-5">Saraan Wellbeing</h2>
            <p className="text-white/85 text-[.95rem] leading-[1.9]">
              Our holistic wellness philosophy draws from Cambodia's ancient healing
              traditions, blending them with contemporary practices. From sound
              healing ceremonies to forest bathing, every experience is designed
              to reconnect you with nature and yourself.
            </p>
            <span className="inline-block mt-6 text-white text-[.75rem] uppercase tracking-[2px] font-semibold border-b border-white/40 pb-1 font-[var(--font-dm-sans)]">
              Discover Wellbeing →
            </span>
          </div>
        </RevealSection>
      </section>

      {/* SUSTAINABILITY */}
      <section className="px-10 py-[100px] text-center max-w-[850px] mx-auto" style={{ background: CREAM }} id="sustain">
        <RevealSection variant="scale">
          <h2 className="font-[var(--font-dm-serif)] text-[2.2rem] mb-4" style={{ color: DARK }}>Our Impact</h2>
          <p className="text-[.95rem] leading-[1.9] mb-3.5" style={{ color: TEXT }}>
            Through the Song Saa Foundation, we've established Cambodia's first
            marine protected area, planted tens of thousands of mangroves, and
            provided education and healthcare to island communities. Every stay
            directly funds conservation and community programs.
          </p>
          <div className="flex gap-10 justify-center mt-10 flex-wrap">
            {[
              { num: '400+',  label: 'Hectares Protected' },
              { num: '50K+',  label: 'Mangroves Planted' },
              { num: '2,000+',label: 'Community Members' },
              { num: '1st',   label: 'Marine Reserve in Cambodia' },
            ].map(s => (
              <div key={s.num} className="text-center">
                <div className="font-[var(--font-dm-serif)] text-[2.4rem]" style={{ color: SAGE }}>{s.num}</div>
                <div className="font-[var(--font-dm-sans)] text-[.78rem] uppercase tracking-[1.5px] mt-1.5" style={{ color: TEXT }}>{s.label}</div>
              </div>
            ))}
          </div>
        </RevealSection>
      </section>

      {/* AWARDS */}
      <section className="relative min-h-[450px] overflow-hidden flex items-center justify-center">
        <img src={IMG.awards} alt="Awards" className="absolute inset-0 w-full h-full object-cover" />
        <RevealSection variant="fadeUp">
          <div className="relative z-10 text-center px-10 py-[50px] max-w-[600px] rounded-[6px]" style={{ background: 'rgba(253,253,247,.9)' }}>
            <h2 className="font-[var(--font-dm-serif)] text-[1.8rem] mb-5" style={{ color: DARK }}>Recognition</h2>
            <div className="flex flex-col gap-2.5">
              {['Condé Nast Traveler — Gold List 2024','Travel + Leisure — World\'s Best Awards','Pure Life Experiences — Member','B-Corp Certified — 2023','Condé Nast Traveler Awards 2025'].map(a => (
                <span key={a} className="font-[var(--font-dm-sans)] text-[.85rem] font-medium" style={{ color: SAGE }}>{a}</span>
              ))}
            </div>
          </div>
        </RevealSection>
      </section>

      {/* NEWSLETTER */}
      <section className="px-10 py-20 text-center" style={{ background: DARK }}>
        <RevealSection variant="fadeUp">
          <h2 className="font-[var(--font-dm-serif)] text-white text-[1.8rem] mb-3">Stay Connected</h2>
          <p className="text-[.9rem] mb-[30px]" style={{ color: 'rgba(255,255,255,.5)' }}>Receive stories of conservation, travel inspiration, and exclusive offers.</p>
          <div className="flex max-w-[420px] mx-auto">
            <input type="email" placeholder="Your email address"
              className="flex-1 px-[18px] py-3.5 border border-[#555] bg-transparent text-white text-[.9rem] outline-none rounded-l-[2px] placeholder:text-[#666] focus:border-[#798D77] transition-colors duration-300" />
            <button className="px-[26px] py-3.5 text-white border-none text-[.72rem] font-semibold uppercase tracking-[2px] cursor-pointer rounded-r-[2px] transition-colors duration-300" style={{ background: SAGE }}
              onMouseOver={e => (e.currentTarget.style.background = DARK_SAGE)}
              onMouseOut={e => (e.currentTarget.style.background = SAGE)}
            >Subscribe</button>
          </div>
        </RevealSection>
      </section>

      {/* FOOTER */}
      <footer className="px-10 pt-[60px] pb-[30px] flex flex-col items-center gap-5 border-t border-white/[0.08]" style={{ background: DARK, color: 'rgba(255,255,255,.5)' }}>
        <div className="font-[var(--font-dm-serif)] text-[1.4rem]" style={{ color: SAGE }}>Song Saa Collective</div>
        <div className="text-center text-[.82rem] leading-[1.8]">
          Koh Rong Archipelago<br />Sihanoukville, Cambodia<br />info@songsaa.com
        </div>
        <div className="flex gap-6">
          {['Instagram','Facebook','LinkedIn'].map(s => (
            <a key={s} href="#" className="font-[var(--font-dm-sans)] text-[.78rem] uppercase tracking-[1.5px] transition-colors duration-300" style={{ color: 'rgba(255,255,255,.4)' }}
              onMouseOver={e => (e.currentTarget.style.color = SAGE)}
              onMouseOut={e => (e.currentTarget.style.color = 'rgba(255,255,255,.4)')}
            >{s}</a>
          ))}
        </div>
        <div className="flex gap-5 flex-wrap justify-center">
          {['Properties','Villas','Wellbeing','Sustainability','Foundation','Careers','Privacy'].map(l => (
            <a key={l} href="#" className="font-[var(--font-dm-sans)] text-[.72rem] uppercase tracking-[1px] transition-colors duration-300" style={{ color: 'rgba(255,255,255,.3)' }}
              onMouseOver={e => (e.currentTarget.style.color = '#fff')}
              onMouseOut={e => (e.currentTarget.style.color = 'rgba(255,255,255,.3)')}
            >{l}</a>
          ))}
        </div>
        <div className="text-[.72rem] mt-4" style={{ color: 'rgba(255,255,255,.2)' }}>© 2026 Song Saa Collective — Demo Concept Only</div>
      </footer>

      <ScrollTop bg={SAGE} color="#fff" hoverBg={DARK_SAGE} hoverColor="#fff" />
    </>
  )
}
