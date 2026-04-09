import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ScrollTop } from '../../components/ScrollTop'
import RevealSection from '../../components/animations/RevealSection'
import GlareHover from '../../components/animations/GlareHover'
import { useGsapHero } from '../../hooks/useGsapHero'
import hotel from '../../styles/img/demo-11/hotel.jpg'
import hotel2 from '../../styles/img/demo-11/hotel2.jpg'
import spaImg from '../../styles/img/demo-11/spa1.jpg'
import room1 from '../../styles/img/demo-11/room.jpg'
import room2 from '../../styles/img/demo-11/room2.jpg'
import room3 from '../../styles/img/demo-11/room3.jpg'
import res from '../../styles/img/demo-11/restaurant1.jpg'
import res2 from '../../styles/img/demo-11/restaurant2.jpg'
import res3 from '../../styles/img/demo-11/terrace.jpg'
import event from '../../styles/img/demo-11/event.jpg'
import event2 from '../../styles/img/demo-11/event2.jpg'
import event3 from '../../styles/img/demo-11/fitness1.jpg'
import event4 from '../../styles/img/demo-11/dinner.jpg'


const TEAL      = '#1a5c5c'
const DARK_TEAL = '#0f3f3f'
const GOLD      = '#c4a265'
const CREAM     = '#f7f5f0'
const CHARCOAL  = '#2a2a28'
const LIGHT_CREAM = '#faf9f7'

export function OneOnlyCT() {
  const heroRef = useGsapHero<HTMLElement>()
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <div>
      <Link to="/" className="fixed top-4 left-4 z-[9999] bg-black/65 text-white text-[.72rem] tracking-[1px] px-3.5 py-[7px] rounded-[3px] backdrop-blur-md hover:bg-black/80 transition-colors duration-200">← Demos</Link>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-[1000] backdrop-blur-[10px] py-5 border-b" style={{ background: 'rgba(42,42,40,.95)', borderColor: `rgba(196,162,101,.2)` }}>
        <div className="w-full max-w-[1400px] mx-auto px-5 flex justify-between items-center">
          <div className="text-[24px] font-light tracking-[2px] uppercase" style={{ color: CREAM }}>One&Only</div>
          <nav>
            <ul className="flex gap-10 list-none m-0 p-0">
              {[['#about','About'],['#rooms','Rooms'],['#dining','Dining'],['#spa','Spa'],['#activities','Activities']].map(([href,label]) => (
                <li key={href}>
                  <a href={href} className="text-[13px] tracking-[1px] uppercase transition-all duration-300 border-b-2 border-transparent pb-[5px]" style={{ color: CREAM }}
                    onMouseOver={e => { e.currentTarget.style.color = GOLD; e.currentTarget.style.borderBottomColor = GOLD }}
                    onMouseOut={e => { e.currentTarget.style.color = CREAM; e.currentTarget.style.borderBottomColor = 'transparent' }}
                  >{label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section ref={heroRef} className="h-screen relative overflow-hidden">
        <img src={hotel} alt="One&Only Cape Town" className="gh-img absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, rgba(15,63,63,.25) 0%, rgba(15,63,63,.55) 100%)` }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-10">
          <p className="gh-label text-[.62rem] tracking-[6px] uppercase mb-6 font-light" style={{ color: GOLD }}>
            V&A Waterfront · Cape Town · South Africa
          </p>
          <div style={{ overflow: 'hidden' }}>
            <h1 className="gh-line font-light tracking-[4px] uppercase leading-none" style={{ fontSize: 'clamp(3rem,7vw,6rem)', color: CREAM }}>
              One&Only
            </h1>
          </div>
          <div style={{ overflow: 'hidden' }} className="mb-6">
            <h2 className="gh-line font-light tracking-[8px] uppercase" style={{ fontSize: 'clamp(1rem,2.5vw,1.6rem)', color: GOLD }}>
              Cape Town
            </h2>
          </div>
          <p className="gh-meta text-[.75rem] tracking-[2px] font-light mb-10" style={{ color: 'rgba(247,245,240,.65)' }}>
            Ultra-Luxury Waterfront Resort
          </p>
          <button className="gh-cta border font-semibold text-[.72rem] tracking-[2px] uppercase px-10 py-[13px] cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(196,162,101,.3)]"
            style={{ background: GOLD, color: CHARCOAL, borderColor: GOLD }}
            onMouseOver={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = CREAM }}
            onMouseOut={e => { e.currentTarget.style.background = GOLD; e.currentTarget.style.color = CHARCOAL }}
          >Explore Now</button>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-[100px]" style={{ background: CREAM, color: CHARCOAL }}>
        <div className="w-full max-w-[1400px] mx-auto px-5">
          <RevealSection variant="fadeUp">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-center">
              <div className="h-[400px] bg-cover bg-center border" style={{ backgroundImage: `url(${hotel2})`, borderColor: TEAL }} />
              <div>
                <h2 className="text-[clamp(2rem,4vw,48px)] font-light tracking-[1px] mb-[30px]" style={{ color: TEAL }}>Welcome to Paradise</h2>
                <p className="text-base leading-[1.8] mb-5">
                  Nestled on the V&A Waterfront with breathtaking views of Table Mountain,
                  One&Only Cape Town redefines luxury in South Africa. Our contemporary African
                  architecture seamlessly blends with world-class hospitality, offering an
                  unparalleled escape for the most discerning travelers.
                </p>
                <p className="text-base leading-[1.8] mb-5">
                  From the moment you arrive, you'll experience our commitment to excellence,
                  personalized service, and authentic South African warmth. Every detail has
                  been meticulously crafted to create an unforgettable journey.
                </p>
                <div className="grid grid-cols-2 gap-[30px] mt-10">
                  {[
                    { title: 'V&A Waterfront',  desc: 'Prime location at the iconic waterfront with stunning harbor views' },
                    { title: 'Nobu Restaurant', desc: 'Michelin-starred cuisine from Chef Nobu Matsuhisa' },
                    { title: 'Table Mountain',  desc: 'Majestic views of one of the world\'s most iconic mountains' },
                    { title: '5-Star Service',  desc: 'Dedicated concierge and personalized experiences' },
                  ].map(h => (
                    <div key={h.title} className="p-5 border-l-[3px]" style={{ background: LIGHT_CREAM, borderLeftColor: GOLD }}>
                      <h3 className="text-base font-semibold uppercase tracking-[1px] mb-2.5" style={{ color: TEAL }}>{h.title}</h3>
                      <p className="text-sm m-0">{h.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Rooms */}
      <section id="rooms" className="py-[100px]" style={{ background: CHARCOAL, color: CREAM }}>
        <div className="w-full max-w-[1400px] mx-auto px-5">
          <RevealSection variant="fadeLeft">
            <h2 className="text-[clamp(2rem,4vw,48px)] font-light tracking-[1px] mb-[60px] text-center after:block after:w-[60px] after:h-0.5 after:mx-auto after:mt-5" style={{ color: CREAM }}>
              Luxury Suites & Residences
              <span className="block w-[60px] h-0.5 mx-auto mt-5" style={{ background: GOLD }} />
            </h2>
          </RevealSection>
          <RevealSection variant="fadeUp" delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                { img: room1, name: 'Island Suite',   desc: 'Waterfront luxury with private terraces and panoramic views' },
                { img: room2, name: 'Marina Suite',   desc: 'Modern elegance with direct marina access and yacht views' },
                { img: room3, name: 'Penthouse',      desc: 'Ultimate indulgence with 360-degree Table Mountain views' },
              ].map(r => (
                <div key={r.name} className="relative overflow-hidden aspect-square cursor-pointer group">
                  <GlareHover glareColor={GOLD} glareOpacity={0.22} glareSize={300} borderRadius={0}>
                    <img src={r.img} alt={r.name} className="w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-[1.05]" />
                  </GlareHover>
                  <div className="absolute inset-0 flex flex-col justify-end px-10 pb-10 opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms]" style={{ background: `linear-gradient(180deg,transparent 0%,rgba(26,92,92,.9) 100%)` }}>
                    <h3 className="text-[24px] font-light tracking-[1px] mb-2.5" style={{ color: CREAM }}>{r.name}</h3>
                    <p className="text-sm leading-[1.6] m-0" style={{ color: GOLD }}>{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Dining */}
      <section id="dining" className="py-[100px]" style={{ background: CREAM, color: CHARCOAL }}>
        <div className="w-full max-w-[1400px] mx-auto px-5">
          <RevealSection variant="scale">
            <h2 className="font-['Times_New_Roman',Times,serif] text-[clamp(2.5rem,5vw,60px)] flex justify-center py-[50px] text-black">
              World-Class Dining
            </h2>
          </RevealSection>
          <RevealSection variant="fadeUp" delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                { img: res,  name: 'Nobu',       cuisine: 'Japanese Fusion',             desc: "Experience Chef Nobu Matsuhisa's legendary Japanese cuisine with Peruvian influences in this iconic dining destination." },
                { img: res2, name: "Reuben's",   cuisine: 'Contemporary South African',  desc: 'Celebrate South African culinary heritage with innovative modern cuisine prepared from the finest local ingredients.' },
                { img: res3, name: 'Vista Bar',  cuisine: 'Craft Cocktails & Wine',      desc: 'Unwind with carefully crafted cocktails and an extensive wine selection under the stars.' },
              ].map(d => (
                <div key={d.name} className="bg-white border overflow-hidden transition-all duration-[400ms] hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(26,92,92,.2)]" style={{ borderColor: TEAL }}>
                  <GlareHover glareColor={TEAL} glareOpacity={0.18} glareSize={280} borderRadius={0}>
                    <img src={d.img} alt={d.name} className="w-full h-[250px] object-cover" />
                  </GlareHover>
                  <div className="p-[30px]">
                    <h3 className="text-[20px] font-semibold tracking-[1px] mb-2.5" style={{ color: TEAL }}>{d.name}</h3>
                    <p className="text-[12px] uppercase tracking-[1px] mb-[15px]" style={{ color: GOLD }}>{d.cuisine}</p>
                    <p className="text-sm leading-[1.6] m-0">{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Spa */}
      <section id="spa" className="py-[100px]" style={{ background: CHARCOAL, color: CREAM }}>
        <div className="w-full max-w-[1400px] mx-auto px-5">
          <RevealSection variant="fadeUp">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-center">
              <div className="h-[400px] bg-cover bg-center border" style={{ backgroundImage: `url(${spaImg})`, borderColor: GOLD }} />
              <div>
                <h2 className="text-[clamp(2rem,4vw,48px)] font-light tracking-[1px] mb-[30px]" style={{ color: CREAM }}>One&Only Spa</h2>
                <p className="text-base leading-[1.8] mb-5">
                  Immerse yourself in our state-of-the-art wellness sanctuary, where ancient
                  African healing traditions meet contemporary spa science. Our expert therapists
                  create bespoke treatments tailored to your unique wellness journey.
                </p>
                <p className="text-base leading-[1.8] mb-5">
                  From rejuvenating facials to deep tissue massages, every treatment is designed
                  to restore balance to your mind, body, and spirit.
                </p>
                <div className="grid grid-cols-2 gap-5 mt-10">
                  {[
                    { name: 'African Ritual',    desc: 'Traditional healing practices honoring the continent\'s wisdom' },
                    { name: 'Ocean Therapy',     desc: 'Seaweed-infused treatments harnessing the sea\'s natural energy' },
                    { name: 'Mountain Escape',   desc: 'Grounding treatments inspired by Table Mountain\'s majesty' },
                    { name: 'Couples Sanctuary', desc: 'Romantic experiences for two in our private treatment suites' },
                  ].map(t => (
                    <div key={t.name} className="p-5 border" style={{ background: 'rgba(26,92,92,.3)', borderColor: GOLD }}>
                      <h4 className="text-sm font-semibold uppercase tracking-[1px] mb-2" style={{ color: GOLD }}>{t.name}</h4>
                      <p className="text-[13px] leading-[1.5] m-0" style={{ color: CREAM }}>{t.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Activities */}
      <section id="activities" className="py-[100px]" style={{ background: CREAM, color: CHARCOAL }}>
        <div className="w-full max-w-[1400px] mx-auto px-5">
          <RevealSection variant="fadeRight">
            <h2 className="font-['Times_New_Roman',Times,serif] text-[clamp(2.5rem,5vw,60px)] flex justify-center py-[50px] text-black">
              Unforgettable Experiences
            </h2>
          </RevealSection>
          <RevealSection variant="fadeUp" delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {[
                { img: event,  title: 'Table Mountain Hike', desc: 'Ascend one of the world\'s new seven wonders. Our expert guides lead you through breathtaking trails with panoramic views of the city, coast, and surrounding peaks.' },
                { img: event2, title: 'Cape Winelands Tour', desc: "Journey through South Africa's prestigious wine regions. Visit boutique estates, taste award-winning vintages, and savour gourmet cuisine with valley views." },
                { img: event3, title: 'Big Five Safari',     desc: "Embark on an exclusive game drive through pristine wildlife reserves. Witness Africa's most iconic animals in their natural habitat with experienced trackers." },
                { img: event4, title: 'Ocean Adventures',   desc: "Explore the Cape's pristine waters. From yacht cruises to shark cage diving, discover the Atlantic's wonders with unforgettable maritime experiences." },
              ].map((a, i) => (
                <div key={a.title} className={`grid gap-[30px] items-center p-10 bg-white border ${i % 2 === 1 ? 'direction-rtl' : ''}`}
                  style={{ gridTemplateColumns: '1fr 1fr', borderColor: TEAL }}
                >
                  <img src={a.img} alt={a.title} className={`w-full h-[250px] object-cover border ${i % 2 === 1 ? 'order-2' : ''}`} style={{ borderColor: TEAL }} />
                  <div className={i % 2 === 1 ? 'order-1' : ''}>
                    <h3 className="text-[24px] font-light tracking-[1px] mb-[15px]" style={{ color: TEAL }}>{a.title}</h3>
                    <p className="text-sm leading-[1.6] m-0">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 text-center" style={{ background: `linear-gradient(135deg,${TEAL} 0%,${DARK_TEAL} 100%)`, color: CREAM }}>
        <div className="w-full max-w-[1400px] mx-auto px-5">
          <RevealSection variant="fadeUp">
            <h2 className="text-[40px] font-light tracking-[1px] mb-[15px]">Subscribe to Our Newsletter</h2>
            <p className="text-base mb-10" style={{ color: GOLD }}>Discover exclusive offers and experiences from One&Only Cape Town</p>
            <form className="flex gap-2.5 max-w-[500px] mx-auto" onSubmit={handleSubscribe}>
              <input type="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} required
                className="flex-1 px-[15px] py-[15px] border-none text-sm outline-none" style={{ background: CREAM, color: CHARCOAL }} />
              <button type="submit" className="px-10 py-[15px] border-none font-semibold text-[13px] tracking-[1px] uppercase cursor-pointer transition-all duration-300 hover:-translate-y-0.5" style={{ background: GOLD, color: CHARCOAL }}
                onMouseOver={e => (e.currentTarget.style.background = CREAM)}
                onMouseOut={e => (e.currentTarget.style.background = GOLD)}
              >Subscribe</button>
            </form>
            {subscribed && <p className="mt-5" style={{ color: GOLD }}>Thank you for subscribing!</p>}
          </RevealSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-[60px] pb-[30px] border-t" style={{ background: CHARCOAL, color: CREAM, borderColor: `rgba(196,162,101,.2)` }}>
        <div className="w-full max-w-[1400px] mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-10">
            {[
              { title: 'About',       links: [['#about','Our Resort'],['#rooms','Accommodations'],['#dining','Restaurants'],['#spa','Wellness']] },
              { title: 'Experiences', links: [['#activities','Activities'],['#dining','Dining'],['#spa','Spa Treatments'],['#about','Events']] },
            ].map(col => (
              <div key={col.title}>
                <h4 className="text-[13px] font-semibold uppercase tracking-[1px] mb-5" style={{ color: GOLD }}>{col.title}</h4>
                <ul className="list-none p-0 m-0">
                  {col.links.map(([href,label]) => (
                    <li key={href}>
                      <a href={href} className="text-[13px] leading-[2] transition-colors duration-300" style={{ color: CREAM }}
                        onMouseOver={e => (e.currentTarget.style.color = GOLD)}
                        onMouseOut={e => (e.currentTarget.style.color = CREAM)}
                      >{label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h4 className="text-[13px] font-semibold uppercase tracking-[1px] mb-5" style={{ color: GOLD }}>Contact</h4>
              <p className="text-[13px] leading-[1.6] m-0" style={{ color: CREAM }}>
                V&A Waterfront<br />Cape Town, 8002<br />South Africa<br />
                <a href="tel:+27211300000" className="transition-colors duration-300" style={{ color: GOLD }}
                  onMouseOver={e => (e.currentTarget.style.color = CREAM)}
                  onMouseOut={e => (e.currentTarget.style.color = GOLD)}
                >+27 (0)21 130 0000</a>
              </p>
            </div>
            <div>
              <h4 className="text-[13px] font-semibold uppercase tracking-[1px] mb-5" style={{ color: GOLD }}>Follow Us</h4>
              <ul className="list-none p-0 m-0">
                {['Instagram','Facebook','Twitter','LinkedIn'].map(s => (
                  <li key={s}>
                    <a href="#" className="text-[13px] leading-[2] transition-colors duration-300" style={{ color: CREAM }}
                      onMouseOver={e => (e.currentTarget.style.color = GOLD)}
                      onMouseOut={e => (e.currentTarget.style.color = CREAM)}
                    >{s}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="pt-[30px] border-t flex justify-between items-center text-[12px]" style={{ borderColor: `rgba(196,162,101,.2)`, color: 'rgba(247,245,240,.7)' }}>
            <p>&copy; 2024 One&Only Cape Town. All rights reserved.</p>
            <div>
              <a href="#" className="transition-colors duration-300" style={{ color: GOLD }} onMouseOver={e => (e.currentTarget.style.textDecoration='underline')} onMouseOut={e => (e.currentTarget.style.textDecoration='none')}>Privacy Policy</a>
              {' | '}
              <a href="#" className="transition-colors duration-300" style={{ color: GOLD }} onMouseOver={e => (e.currentTarget.style.textDecoration='underline')} onMouseOut={e => (e.currentTarget.style.textDecoration='none')}>Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      <ScrollTop bg={TEAL} color="#fff" hoverBg={GOLD} hoverColor="#1a1a1a" />
    </div>
  )
}
