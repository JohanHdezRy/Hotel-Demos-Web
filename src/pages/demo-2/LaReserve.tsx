import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ScrollTop } from '../../components/ScrollTop'
import { useNavbarScroll } from '../../hooks/useNavbarScroll'
import { useGsapHero } from '../../hooks/useGsapHero'
import RevealSection from '../../components/animations/RevealSection'
import Marquee from '../../components/animations/Marquee'
import GlareHover from '../../components/animations/GlareHover'
import hotel from '../../styles/img/demo-2/hotel4.jpg'
import room from '../../styles/img/demo-2/room.jpg'
import location from '../../styles/img/demo-2/cozumel3.jpeg'
import fam from '../../styles/img/demo-2/family.jpg'
import fam2 from '../../styles/img/demo-2/fam2.jpg'
import news from '../../styles/img/demo-2/news.jpg'
import news2 from '../../styles/img/demo-2/yard2.jpg'
import news3 from '../../styles/img/demo-2/yard2.jpg'

const IMG = { hero: hotel, room, location, family1: fam, family2: fam2, news1: news, news2, news3 }

const apartments = [
  { name: '1 Bedroom Garden View and Balcony',        sqft: "1'500 sqft", sqm: '140 m²', floor: '1st floor' },
  { name: '2 Bedroom Partial Eiffel Tower View',      sqft: "1'700 sqft", sqm: '158 m²', floor: '2nd floor' },
  { name: '2 Bedroom Eiffel',                         sqft: "1'900 sqft", sqm: '176 m²', floor: '3rd floor' },
  { name: '2 Bedroom Duplex Eiffel',                  sqft: "2'200 sqft", sqm: '204 m²', floor: '4th floor' },
  { name: '3 Bedroom Partial Eiffel Tower View',      sqft: "2'500 sqft", sqm: '232 m²', floor: '2nd floor' },
  { name: '3 Bedroom Eiffel Tower View',              sqft: "2'800 sqft", sqm: '260 m²', floor: '5th floor' },
  { name: '3 Bedroom Terrace',                        sqft: "3'000 sqft", sqm: '279 m²', floor: '6th floor' },
  { name: '3 Bedroom Apartment with Garden',          sqft: "2'700 sqft", sqm: '251 m²', floor: 'Ground' },
  { name: '4 Bedroom Partial Eiffel Tower View',      sqft: "3'200 sqft", sqm: '297 m²', floor: '3rd floor' },
]

export function LaReserve() {
  const scrolled = useNavbarScroll(80)
  const [activeApt, setActiveApt] = useState(0)
  const heroRef = useGsapHero<HTMLElement>()

  return (
    <div>
      <Link to="/" className="fixed top-4 left-4 z-[9999] bg-black/65 text-white text-[.72rem] tracking-[1px] px-3.5 py-[7px] rounded-[3px] backdrop-blur-md hover:bg-black/80 transition-colors duration-200">← Demos</Link>

      {/* ===== NAVBAR ===== */}
      <nav className={`fixed top-0 left-0 w-full z-[100] flex items-center justify-between px-10 transition-all duration-500 ${scrolled ? 'bg-white/[0.97] shadow-[0_1px_12px_rgba(0,0,0,.06)] py-4' : 'bg-transparent py-[18px]'}`}>
        <div className="flex flex-col gap-1.5 cursor-pointer w-10">
          <div className={`w-6 h-[1.5px] transition-colors duration-[400ms] ${scrolled ? 'bg-[#1C1C1A]' : 'bg-white'}`} />
          <div className={`w-6 h-[1.5px] transition-colors duration-[400ms] ${scrolled ? 'bg-[#1C1C1A]' : 'bg-white'}`} />
        </div>
        <div className={`font-[var(--font-cormorant)] text-[1.55rem] tracking-[3px] text-center transition-colors duration-[400ms] ${scrolled ? 'text-[#1C1C1A]' : 'text-white'}`}>
          la réserve
          <span className={`block text-[.55rem] tracking-[5px] uppercase text-center mt-0.5 font-[var(--font-source-sans)] ${scrolled ? 'text-[#1C1C1A]' : 'text-white'}`}>
            Apartments · Paris
          </span>
        </div>
        <button className={`text-[.7rem] tracking-[3px] uppercase px-6 py-2.5 border cursor-pointer bg-transparent transition-all duration-[400ms] font-[var(--font-source-sans)] ${scrolled ? 'border-[#1C1C1A] text-[#1C1C1A] hover:bg-[#1C1C1A] hover:text-white' : 'border-white/50 text-white hover:bg-white/15'}`}>
          BOOK NOW
        </button>
      </nav>

      {/* ===== HERO ===== */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        <img src={hotel} alt="La Réserve hero" className="gh-img absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1c1c1a]/25 to-[#1c1c1a]/50" />
        <div className="absolute inset-3 border border-[#C8AF8C]/35 pointer-events-none" />
        <div className="relative z-10 text-white max-w-[800px] mx-auto px-10">
          <p className="gh-label font-[var(--font-source-sans)] text-[.8rem] tracking-[2px] text-white/75 mb-6">
            20:59 &nbsp;·&nbsp; 14°C &nbsp;·&nbsp; clear sky
          </p>
          <div style={{ overflow: 'hidden' }}>
            <p className="gh-line font-[var(--font-cormorant)] text-[clamp(2rem,5vw,3.4rem)] font-light leading-[1.2]">
              At home in Paris,
            </p>
          </div>
          <div style={{ overflow: 'hidden' }} className="mb-8">
            <p className="gh-line font-[var(--font-cormorant)] text-[clamp(2rem,5vw,3.4rem)] font-light leading-[1.2]">
              with the Eiffel Tower as a neighbor
            </p>
          </div>
          <div className="gh-meta flex flex-col items-center gap-5">
            <div className="w-px h-[50px] bg-white/50" />
            <div className="w-[70px] h-[70px] rounded-full border border-white/60 flex items-center justify-center cursor-pointer transition-all duration-[400ms] hover:scale-110 hover:bg-white/12">
              <svg viewBox="0 0 24 24" className="fill-white w-[18px] ml-[3px]"><polygon points="8,5 19,12 8,19" /></svg>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MARQUEE ===== */}
      <Marquee items={['LA RÉSERVE', 'PARIS', 'PLACE DU TROCADÉRO', 'EIFFEL TOWER VIEW', 'PALACE HOTEL', '10 APARTMENTS', 'BUTLER SERVICE']} speed={30} />

      {/* ===== LEGENDARY ADDRESS ===== */}
      <RevealSection variant="fadeUp">
        <section className="px-10 py-[120px] text-center max-w-[850px] mx-auto">
          <p className="font-[var(--font-source-sans)] text-[.7rem] tracking-[4px] uppercase text-[#8A6D3B] mb-5">A Legendary Address</p>
          <h2 className="font-[var(--font-cormorant)] text-[clamp(1.8rem,4vw,2.8rem)] font-light leading-[1.3] mb-[25px] text-[#1C1C1A]">
            Ten contemporary apartments to experience the capital in an intensely private manner
          </h2>
          <div className="w-px h-10 bg-[#C8AF8C] mx-auto mb-5" />
          <p className="font-[var(--font-source-sans)] text-[.72rem] tracking-[3px] uppercase text-[#8A6D3B] mb-[18px]">10 Place du Trocadéro</p>
          <p className="font-[var(--font-cormorant)] text-[1.15rem] leading-[1.8] text-[#555] max-w-[680px] mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus vitae massa
            faucibus fermentum. Praesent a libero vitae nulla cursus aliquam at vel velit.
            Curabitur sed semper nisl, eget efficitur augue. Nulla facilisi in hac habitasse platea dictumst.
          </p>
        </section>
      </RevealSection>

      {/* ===== ACCOMMODATION ===== */}
      <RevealSection variant="scale">
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden">
          <img src={room} alt="Accommodation" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#1c1c1a]/55" />
          <div className="relative z-10 text-center px-10 py-20 w-full">
            <p className="font-[var(--font-source-sans)] text-[.7rem] tracking-[4px] uppercase text-[#C8AF8C] mb-[30px]">Accommodation</p>
            <h2 className="font-[var(--font-cormorant)] text-[clamp(1.6rem,4vw,2.5rem)] font-light text-white mb-2.5 transition-opacity duration-500">
              {apartments[activeApt].name}
            </h2>
            <p className="font-[var(--font-source-sans)] text-white/65 text-[.85rem] tracking-[1px] mb-10">
              {apartments[activeApt].sqft} &nbsp;|&nbsp; {apartments[activeApt].sqm} &nbsp;|&nbsp; {apartments[activeApt].floor}
            </p>
            <ul className="list-none flex flex-col gap-4 items-center">
              {apartments.map((apt, i) => (
                <li
                  key={i}
                  onClick={() => setActiveApt(i)}
                  className={`font-[var(--font-cormorant)] text-[clamp(1.1rem,2.5vw,1.8rem)] cursor-pointer transition-all duration-[400ms] font-light ${i === activeApt ? 'text-white scale-[1.03]' : 'text-white/35 hover:text-white hover:scale-[1.03]'}`}
                >
                  {apt.name}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </RevealSection>

      {/* ===== BOOKING BAR ===== */}
      <RevealSection variant="fadeUp">
        <section className="flex items-center justify-center flex-wrap bg-white px-10 py-[50px] gap-0">
          {[
            { label: 'Arrival Date',   value: '06 March 2026 📅' },
            { label: 'Departure Date', value: '07 March 2026 📅' },
            { label: 'Guests',         value: '2 Adults ▾' },
          ].map((f, i, arr) => (
            <div key={f.label} className={`flex flex-col items-center px-9 ${i < arr.length - 1 ? 'border-r border-[#e0dcd6]' : ''}`}>
              <span className="font-[var(--font-source-sans)] text-[.6rem] tracking-[3px] uppercase text-[#8A6D3B] mb-2">{f.label}</span>
              <span className="font-[var(--font-cormorant)] text-[1.2rem] text-[#1C1C1A]">{f.value}</span>
            </div>
          ))}
          <button className="font-[var(--font-source-sans)] text-[.65rem] tracking-[3px] uppercase px-[30px] py-3.5 border border-[#1C1C1A] bg-transparent text-[#1C1C1A] cursor-pointer ml-5 transition-all duration-[400ms] hover:bg-[#1C1C1A] hover:text-white">
            CHECK<br />AVAILABILITY
          </button>
        </section>
      </RevealSection>

      {/* ===== SERVICES ===== */}
      <RevealSection variant="fadeLeft">
        <section className="px-10 py-[120px] max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[60px] items-start">
          <div>
            <p className="font-[var(--font-source-sans)] text-[.7rem] tracking-[4px] uppercase text-[#8A6D3B] mb-5">Included Hotel Services</p>
            <h2 className="font-[var(--font-cormorant)] text-[clamp(1.8rem,3.5vw,2.6rem)] font-light leading-[1.25] text-[#1C1C1A]">
              Butler, concierge, housekeeper... just for you.
            </h2>
          </div>
          <div className="pt-[60px]">
            <p className="font-[var(--font-cormorant)] text-[1.05rem] leading-[1.9] text-[#555]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus libero vel
              sapien convallis, non tincidunt leo mattis. Etiam auctor, massa eget hendrerit
              dignissim, nisl nulla aliquet velit, vel lobortis ex ligula ac augue. Suspendisse
              in vestibulum felis, eget fermentum orci.
            </p>
            <a href="#" className="inline-block mt-[25px] font-[var(--font-source-sans)] text-[.7rem] tracking-[2px] uppercase text-[#1C1C1A] border-b border-[#1C1C1A] pb-1 transition-colors duration-300 hover:text-[#8A6D3B] hover:border-[#8A6D3B]">
              VIEW MORE &gt;
            </a>
          </div>
        </section>
      </RevealSection>

      {/* ===== LOCATION ===== */}
      <RevealSection variant="scale">
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          <img src={location} alt="Location" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/15" />
          <div className="relative z-10 text-center text-white px-10 py-[60px]">
            <p className="font-[var(--font-source-sans)] text-[.7rem] tracking-[4px] uppercase text-[#C8AF8C] mb-3.5">Location</p>
            <h2 className="font-[var(--font-cormorant)] text-[clamp(2rem,4vw,3rem)] font-light mb-5">Our address book</h2>
            <a href="#" className="font-[var(--font-source-sans)] text-[.7rem] tracking-[2px] uppercase text-white border-b border-white/50 pb-1">VIEW MORE &gt;</a>
          </div>
        </section>
      </RevealSection>

      {/* ===== FAMILY ===== */}
      <RevealSection variant="fadeUp">
        <section className="px-10 py-[120px] max-w-[1100px] mx-auto">
          <p className="font-[var(--font-source-sans)] text-[.7rem] tracking-[4px] uppercase text-[#8A6D3B] mb-5 text-center">As a Family</p>
          <h2 className="font-[var(--font-cormorant)] text-[clamp(1.8rem,3.5vw,2.6rem)] font-light text-center leading-[1.3] text-[#1C1C1A] mb-[50px]">
            Everyone feels at home here in a spirit of simplicity, to everyone's delight — and especially the kids!
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <GlareHover glareColor="#C8AF8C" glareOpacity={0.2} glareSize={280} borderRadius={0}>
                <img src={IMG.family1} alt="family living" className="rounded-[2px] w-full h-[380px] object-cover" />
              </GlareHover>
              <p className="font-[var(--font-cormorant)] text-[1.05rem] leading-[1.9] text-[#555] mt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae
                vestibulum vestibulum. Cras imperdiet nulla vitae diam egestas porta.
              </p>
            </div>
            <div>
              <p className="font-[var(--font-cormorant)] text-[1.05rem] leading-[1.9] text-[#555]">
                Fusce venenatis, libero vel luctus dignissim, enim nulla faucibus est, nec viverra
                magna augue vel odio. Praesent vitae erat id velit accumsan elementum.
              </p>
              <a href="#" className="inline-block mt-[15px] font-[var(--font-source-sans)] text-[.7rem] tracking-[2px] uppercase text-[#1C1C1A] border-b border-[#1C1C1A] pb-1 transition-colors duration-300 hover:text-[#8A6D3B] hover:border-[#8A6D3B]">
                VIEW MORE &gt;
              </a>
              <GlareHover glareColor="#C8AF8C" glareOpacity={0.2} glareSize={280} borderRadius={0}>
                <img src={IMG.family2} alt="family room" className="rounded-[2px] w-full h-[380px] object-cover mt-[25px]" />
              </GlareHover>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* ===== PALACE HOTEL ===== */}
      <RevealSection variant="fadeRight">
        <section className="bg-[#F9F4F1] px-10 py-[120px] text-center">
          <p className="font-[var(--font-source-sans)] text-[.7rem] tracking-[4px] uppercase text-[#8A6D3B] mb-5">The Advantages of a Palace Hotel</p>
          <h2 className="font-[var(--font-cormorant)] text-[clamp(1.8rem,3.5vw,2.6rem)] font-light leading-[1.3] text-[#1C1C1A] mb-5 max-w-[700px] mx-auto">
            Ideal synergies with La Réserve Paris — Hotel and Spa
          </h2>
          <div className="w-px h-[35px] bg-[#C8AF8C] mx-auto mb-5" />
          <p className="font-[var(--font-source-sans)] text-[.72rem] tracking-[3px] uppercase text-[#8A6D3B] mb-[18px]">A Complimentary Car Made Available</p>
          <p className="font-[var(--font-cormorant)] text-[1.1rem] leading-[1.85] text-[#555] max-w-[750px] mx-auto mb-[25px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent molestie
            lacus non risus faucibus, vel viverra sapien gravida. Fusce dignissim turpis
            vitae ante consequat, non blandit purus hendrerit. Integer sollicitudin orci
            vel erat vehicula, at convallis nulla dictum.
          </p>
          <button className="font-[var(--font-source-sans)] text-[.7rem] tracking-[2px] uppercase text-[#1C1C1A] border-b border-[#1C1C1A] pb-1 bg-transparent border-t-0 border-l-0 border-r-0 cursor-pointer transition-colors duration-300 hover:text-[#8A6D3B] hover:border-[#8A6D3B]">
            SEE THE WEBSITE OF LA RÉSERVE PARIS — HOTEL AND SPA &gt;
          </button>
        </section>
      </RevealSection>

      {/* ===== NEWS ===== */}
      <RevealSection variant="fadeUp">
        <section className="px-10 py-[100px] text-center">
          <p className="font-[var(--font-source-sans)] text-[.7rem] tracking-[4px] uppercase text-[#8A6D3B] mb-3.5">Discover Our</p>
          <h2 className="font-[var(--font-cormorant)] text-[clamp(1.8rem,3.5vw,2.6rem)] font-light text-[#1C1C1A] mb-[50px]">News</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] max-w-[1100px] mx-auto">
            {[
              { img: IMG.news1, date: 'January 2026',   title: 'Lorem ipsum dolor sit amet consectetur' },
              { img: IMG.news2, date: 'December 2025',  title: 'Praesent molestie lacus non risus' },
              { img: IMG.news3, date: 'November 2025',  title: 'Fusce dignissim turpis vitae ante' },
            ].map((n, i) => (
              <div key={i} className="text-left cursor-pointer transition-transform duration-[400ms] hover:-translate-y-1.5">
                <GlareHover glareColor="#C8AF8C" glareOpacity={0.18} glareSize={260} borderRadius={0}>
                  <img src={n.img} alt={n.title} className="w-full h-[240px] object-cover mb-4 rounded-[2px]" />
                </GlareHover>
                <p className="font-[var(--font-source-sans)] text-[.65rem] tracking-[2px] uppercase text-[#8A6D3B] mb-2">{n.date}</p>
                <h3 className="font-[var(--font-cormorant)] text-[1.2rem] font-normal text-[#1C1C1A] leading-[1.4]">{n.title}</h3>
              </div>
            ))}
          </div>
        </section>
      </RevealSection>

      {/* ===== NEWSLETTER ===== */}
      <section className="bg-[#1C1C1A] px-10 py-[100px] text-center">
        <h2 className="font-[var(--font-cormorant)] text-[clamp(1.6rem,3vw,2.2rem)] font-light text-white mb-[30px]">
          Receive our latest offers and news updates
        </h2>
        <button className="font-[var(--font-source-sans)] text-[.65rem] tracking-[3px] uppercase px-8 py-3.5 border border-white/40 text-white bg-transparent cursor-pointer transition-all duration-[400ms] hover:bg-white/10">
          REGISTER HERE &gt;
        </button>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-[#1C1C1A] px-10 pt-[50px] pb-[30px] text-center border-t border-white/[0.08]">
        <div className="font-[var(--font-cormorant)] text-[1.3rem] tracking-[3px] text-white mb-1.5">
          la réserve
          <span className="block text-[.5rem] tracking-[5px] uppercase font-[var(--font-source-sans)] text-white/50">Apartments · Paris</span>
        </div>
        <div className="flex justify-center gap-[30px] flex-wrap my-6 font-[var(--font-source-sans)] text-[.8rem] text-white/45">
          <span>+33 1 53 70 53 70</span>
          <span>|</span>
          <span>10 Place du Trocadéro, 75116 Paris</span>
          <span>|</span>
          <span>info@lareserve-paris.com</span>
        </div>
        <div className="flex justify-center gap-4 my-5">
          {['f', 'ig', 'tk'].map(s => (
            <a key={s} href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/50 text-[.85rem] transition-all duration-300 hover:border-white/50 hover:text-white">{s}</a>
          ))}
        </div>
        <p className="font-[var(--font-source-sans)] text-[.7rem] text-white/30 mt-5">
          © 2026 La Réserve Apartments Paris — Demo para promoción hotelera
        </p>
      </footer>

      <ScrollTop bg="#946E55" color="#fff" />
    </div>
  )
}
