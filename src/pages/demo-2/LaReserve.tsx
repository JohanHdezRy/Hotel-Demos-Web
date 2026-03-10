import { Link } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react'
import { ScrollTop } from '../../components/ScrollTop'
import RevealSection from '../../components/animations/RevealSection'
import BlurText from '../../components/animations/BlurText'
import GlareHover from '../../components/animations/GlareHover'
import './LaReserve.css'
import hotel from '../../styles/img/demo-2/hotel4.jpg'
import room from '../../styles/img/demo-2/room.jpg'
import location from '../../styles/img/demo-2/cozumel3.jpeg'
import fam from '../../styles/img/demo-2/family.jpg'
import fam2 from '../../styles/img/demo-2/fam2.jpg'
import news from '../../styles/img/demo-2/news.jpg'
import news2 from '../../styles/img/demo-2/yard2.jpg'
import news3 from '../../styles/img/demo-2/yard2.jpg'

/* ---------- images ---------- */
const IMG = {
  hero: hotel,
  room: room,
  location: location,
  family1: fam,
  family2: fam2,
  news1: news,
  news2: news2,
  news3: news3,
}

/* ---------- Apartment types ---------- */
const apartments = [
  { name: '1 Bedroom Garden View and Balcony', sqft: "1'500 sqft", sqm: '140 m²', floor: '1st floor' },
  { name: '2 Bedroom Partial Eiffel Tower View', sqft: "1'700 sqft", sqm: '158 m²', floor: '2nd floor' },
  { name: '2 Bedroom Eiffel', sqft: "1'900 sqft", sqm: '176 m²', floor: '3rd floor' },
  { name: '2 Bedroom Duplex Eiffel', sqft: "2'200 sqft", sqm: '204 m²', floor: '4th floor' },
  { name: '3 Bedroom Partial Eiffel Tower View', sqft: "2'500 sqft", sqm: '232 m²', floor: '2nd floor' },
  { name: '3 Bedroom Eiffel Tower View', sqft: "2'800 sqft", sqm: '260 m²', floor: '5th floor' },
  { name: '3 Bedroom Terrace', sqft: "3'000 sqft", sqm: '279 m²', floor: '6th floor' },
  { name: '3 Bedroom Apartment with Garden', sqft: "2'700 sqft", sqm: '251 m²', floor: 'Ground' },
  { name: '4 Bedroom Partial Eiffel Tower View', sqft: "3'200 sqft", sqm: '297 m²', floor: '3rd floor' },
]

export function LaReserve() {
  const [scrolled, setScrolled] = useState(false)
  const [activeApt, setActiveApt] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleAptClick = useCallback((i: number) => setActiveApt(i), [])

  return (
    <div>
      <Link to="/" style={{position:'fixed',top:16,left:16,zIndex:9999,background:'rgba(0,0,0,.65)',color:'#fff',padding:'7px 14px',fontSize:'.72rem',letterSpacing:1,borderRadius:3,backdropFilter:'blur(6px)',textDecoration:'none'}}>← Demos</Link>

      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300&family=Source+Sans+3:wght@300;400;600&display=swap" rel="stylesheet" />

      {/* ===== NAVBAR ===== */}
      <nav className={`lr-nav${scrolled ? ' scrolled' : ''}`}>
        <div style={{ width: 40, display: 'flex', flexDirection: 'column', gap: 6, cursor: 'pointer' }}>
          <div style={{ width: 24, height: 1.5, background: scrolled ? '#1C1C1A' : '#fff', transition: 'background .4s' }} />
          <div style={{ width: 24, height: 1.5, background: scrolled ? '#1C1C1A' : '#fff', transition: 'background .4s' }} />
        </div>
        <div className="lr-nav__logo">
          la réserve
          <span>Apartments · Paris</span>
        </div>
        <button className="lr-nav__book">BOOK NOW</button>
      </nav>

      {/* ===== HERO ===== */}
      <section className="lr-hero">
        <div className="lr-hero__bg" />
        <div className="lr-hero__overlay" />
        <div className="lr-hero__border" />
        <div className="lr-hero__content">
          <p className="lr-hero__weather">20:59 &nbsp; 14°C &nbsp; clear sky</p>
          <BlurText
            text="At home in Paris, with the Eiffel Tower as a neighbor"
            className="lr-hero__title"
            animateBy="words"
            direction="top"
            delay={60}
            stepDuration={0.45}
          />
          <div className="lr-hero__line" />
          <div className="lr-hero__play">
            <svg viewBox="0 0 24 24"><polygon points="8,5 19,12 8,19" /></svg>
          </div>
        </div>
      </section>

      {/* ===== LEGENDARY ADDRESS ===== */}
      <RevealSection variant="fadeUp">
        <section className="lr-legendary">
          <p className="lr-legendary__label">A Legendary Address</p>
          <h2 className="lr-legendary__title">
            Ten contemporary apartments to experience the capital in an intensely private manner
          </h2>
          <div className="lr-legendary__line" />
          <p className="lr-legendary__subtitle">10 Place du Trocadéro</p>
          <p className="lr-legendary__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus vitae massa
            faucibus fermentum. Praesent a libero vitae nulla cursus aliquam at vel velit.
            Curabitur sed semper nisl, eget efficitur augue. Nulla facilisi in hac habitasse platea dictumst.
          </p>
        </section>
      </RevealSection>

      {/* ===== ACCOMMODATION ===== */}
      <RevealSection variant="scale">
        <section className="lr-accommodation">
          <div className="lr-accommodation__bg" style={{ backgroundImage: `url(${IMG.room})` }} />
          <div className="lr-accommodation__overlay" />
          <div className="lr-accommodation__content">
            <p className="lr-accommodation__label">Accommodation</p>
            <h2 className="lr-accommodation__active">{apartments[activeApt].name}</h2>
            <p className="lr-accommodation__meta">
              {apartments[activeApt].sqft} &nbsp;|&nbsp; {apartments[activeApt].sqm} &nbsp;|&nbsp; {apartments[activeApt].floor}
            </p>
            <ul className="lr-accommodation__list">
              {apartments.map((apt, i) => (
                <li
                  key={i}
                  className={`lr-accommodation__item${i === activeApt ? ' active' : ''}`}
                  onClick={() => handleAptClick(i)}
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
        <section className="lr-booking">
          <div className="lr-booking__field">
            <span className="lr-booking__field-label">Arrival Date</span>
            <span className="lr-booking__field-value">06 March 2026 📅</span>
          </div>
          <div className="lr-booking__field">
            <span className="lr-booking__field-label">Departure Date</span>
            <span className="lr-booking__field-value">07 March 2026 📅</span>
          </div>
          <div className="lr-booking__field" style={{ borderRight: 'none' }}>
            <span className="lr-booking__field-label">Guests</span>
            <span className="lr-booking__field-value">2 Adults ▾</span>
          </div>
          <button className="lr-booking__btn">CHECK<br />AVAILABILITY</button>
        </section>
      </RevealSection>

      {/* ===== SERVICES ===== */}
      <RevealSection variant="fadeLeft">
        <section className="lr-services">
          <div className="lr-services__left">
            <p className="lr-services__label">Included Hotel Services</p>
            <h2 className="lr-services__title">
              Butler, concierge, housekeeper... just for you.
            </h2>
          </div>
          <div className="lr-services__right">
            <p className="lr-services__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus libero vel
              sapien convallis, non tincidunt leo mattis. Etiam auctor, massa eget hendrerit
              dignissim, nisl nulla aliquet velit, vel lobortis ex ligula ac augue. Suspendisse
              in vestibulum felis, eget fermentum orci.
            </p>
            <a href="#" className="lr-services__link">VIEW MORE &gt;</a>
          </div>
        </section>
      </RevealSection>

      {/* ===== LOCATION ===== */}
      <RevealSection variant="scale">
        <section className="lr-location">
          <div className="lr-location__bg" />
          <div className="lr-location__overlay" />
          <div className="lr-location__content">
            <p className="lr-location__label">Location</p>
            <h2 className="lr-location__title">Our address book</h2>
            <a href="#" className="lr-location__link">VIEW MORE &gt;</a>
          </div>
        </section>
      </RevealSection>

      {/* ===== FAMILY ===== */}
      <RevealSection variant="fadeUp">
        <section className="lr-family">
          <p className="lr-family__label">As a Family</p>
          <h2 className="lr-family__title">
            Everyone feels at home here in a spirit of simplicity, to everyone's delight — and especially the kids!
          </h2>
          <div className="lr-family__grid">
            <div className="lr-family__col">
<GlareHover glareColor="#C8AF8C" glareOpacity={0.2} glareSize={280} borderRadius={0}><img src={IMG.family1} alt="family living" className="lr-family__img" /></GlareHover>
              <p className="lr-family__text" style={{ marginTop: 20 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae
                vestibulum vestibulum. Cras imperdiet nulla vitae diam egestas porta.
              </p>
            </div>
            <div className="lr-family__col">
              <p className="lr-family__text">
                Fusce venenatis, libero vel luctus dignissim, enim nulla faucibus est, nec viverra
                magna augue vel odio. Praesent vitae erat id velit accumsan elementum.
              </p>
              <a href="#" className="lr-family__link">VIEW MORE &gt;</a>
<GlareHover glareColor="#C8AF8C" glareOpacity={0.2} glareSize={280} borderRadius={0}><img src={IMG.family2} alt="family room" className="lr-family__img" style={{ marginTop: 25 }} /></GlareHover>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* ===== PALACE HOTEL ===== */}
      <RevealSection variant="fadeRight">
        <section className="lr-palace">
          <p className="lr-palace__label">The Advantages of a Palace Hotel</p>
          <h2 className="lr-palace__title">
            Ideal synergies with La Réserve Paris — Hotel and Spa
          </h2>
          <div className="lr-palace__line" />
          <p className="lr-palace__sub">A Complimentary Car Made Available</p>
          <p className="lr-palace__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent molestie
            lacus non risus faucibus, vel viverra sapien gravida. Fusce dignissim turpis
            vitae ante consequat, non blandit purus hendrerit. Integer sollicitudin orci
            vel erat vehicula, at convallis nulla dictum.
          </p>
          <button className="lr-palace__cta">SEE THE WEBSITE OF LA RÉSERVE PARIS — HOTEL AND SPA &gt;</button>
        </section>
      </RevealSection>

      {/* ===== NEWS ===== */}
      <RevealSection variant="fadeUp">
        <section className="lr-news">
          <p className="lr-news__label">Discover Our</p>
          <h2 className="lr-news__title">News</h2>
          <div className="lr-news__grid">
            {[
              { img: IMG.news1, date: 'January 2026', title: 'Lorem ipsum dolor sit amet consectetur' },
              { img: IMG.news2, date: 'December 2025', title: 'Praesent molestie lacus non risus' },
              { img: IMG.news3, date: 'November 2025', title: 'Fusce dignissim turpis vitae ante' },
            ].map((n, i) => (
              <div key={i} className="lr-news__card">
                <GlareHover glareColor="#C8AF8C" glareOpacity={0.18} glareSize={260} borderRadius={0}>
                  <img src={n.img} alt={n.title} className="lr-news__card-img" />
                </GlareHover>
                <p className="lr-news__card-date">{n.date}</p>
                <h3 className="lr-news__card-title">{n.title}</h3>
              </div>
            ))}
          </div>
        </section>
      </RevealSection>

      {/* ===== NEWSLETTER ===== */}
      <section className="lr-newsletter">
        <h2 className="lr-newsletter__title">Receive our latest offers and news updates</h2>
        <button className="lr-newsletter__btn">REGISTER HERE &gt;</button>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="lr-footer">
        <div className="lr-footer__logo">
          la réserve
          <span>Apartments · Paris</span>
        </div>
        <div className="lr-footer__info">
          <span>+33 1 53 70 53 70</span>
          <span>|</span>
          <span>10 Place du Trocadéro, 75116 Paris</span>
          <span>|</span>
          <span>info@lareserve-paris.com</span>
        </div>
        <div className="lr-footer__socials">
          <a href="#" className="lr-footer__social">f</a>
          <a href="#" className="lr-footer__social">ig</a>
          <a href="#" className="lr-footer__social">tk</a>
        </div>
        <p className="lr-footer__copy">© 2026 La Réserve Apartments Paris — Demo para promoción hotelera</p>
      </footer>

      <ScrollTop bg="#946E55" color="#fff" />
    </div>
  )
}
