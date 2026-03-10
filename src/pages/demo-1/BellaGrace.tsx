import { useState, useEffect, useCallback } from 'react'
import { ScrollTop } from '../../components/ScrollTop'
import { Link } from 'react-router-dom'
import RevealSection from '../../components/animations/RevealSection'
import BlurText from '../../components/animations/BlurText'
import GlareHover from '../../components/animations/GlareHover'
import './BellaGrace.css'
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


/* ─── image pool ─── */
const IMG = {
  heroFacade  : hotel,
  lobby       : lobby,
  room1       : room1,
  room2       : room2,
  room3       : room3,
  room4       : room4,
  restaurant  : rst,
  spa         : spa,
  pool        : pool,
  city1       : city,
  city2       : city2,
  city3       : city3,
  lounge      : lounge,
  courtyard   : yard,
  suite       : suite,
  fitness     : fitness,
  dining2     : dinner,
}

/* ─── data ─── */
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

export function BellaGrace() {
  const [scrolled, setScrolled] = useState(false)
  const [roomSlide, setRoomSlide] = useState(0)
  const [gemSlide, setGemSlide] = useState(0)
  const [placeSlide, setPlaceSlide] = useState(0)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', h)
    window.scrollTo(0, 0)
    return () => window.removeEventListener('scroll', h)
  }, [])

  const nextRoom = useCallback(() => setRoomSlide(s => (s + 1) % (rooms.length - 1)), [])
  const prevRoom = useCallback(() => setRoomSlide(s => (s - 1 + rooms.length - 1) % (rooms.length - 1)), [])
  const nextGem  = useCallback(() => setGemSlide(s => (s + 1) % gemGallery.length), [])
  const prevGem  = useCallback(() => setGemSlide(s => (s - 1 + gemGallery.length) % gemGallery.length), [])
  const nextPlace = useCallback(() => setPlaceSlide(s => (s + 1) % placeGallery.length), [])
  const prevPlace = useCallback(() => setPlaceSlide(s => (s - 1 + placeGallery.length) % placeGallery.length), [])

  return (
    <div className="bg">
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display+SC:wght@400;700&family=Source+Sans+Pro:wght@300;400;600&family=Cormorant+Garamond:wght@300;400;600&display=swap" rel="stylesheet" />

      {/* ═══ NAVBAR ═══ */}
      <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
        <Link to="/" className="nav__back">← Demos</Link>
        <span className="nav__brand">HOTEL BELLA GRACE</span>
        <div className="nav__links">
          <a href="#rooms">Rooms</a>
          <a href="#dining">Dining</a>
          <a href="#explore">Explore</a>
          <a href="#amenities">Amenities</a>
          <a className="nav__cta" href="#contact">Check Availability</a>
        </div>
      </nav>

      {/* ═══ HERO ═══ */}
      <header className="hero">
        <img src={IMG.heroFacade} alt="Hotel Bella Grace facade" className="hero__img" />
        <div className="hero__overlay" />
        <div className="hero__content">
          <p className="hero__sub">Residence Inn by Marriott</p>
          <BlurText
            text="HOTEL BELLA GRACE / CHARLESTON HISTORIC DISTRICT"
            className="hero__title"
            animateBy="words"
            direction="top"
            delay={80}
            stepDuration={0.45}
          />
          <div className="hero__rating">
            <span className="hero__stars">●●●●○</span>
            <span>4.4 · 376 Reviews</span>
          </div>
        </div>
      </header>

      {/* ═══ WELCOME ═══ */}
      <section className="welcome">
        <RevealSection variant="fadeUp">
          <div className="welcome__line" />
          <p className="welcome__label">WELCOME TO HOTEL BELLA GRACE / CHARLESTON HISTORIC DISTRICT</p>
          <h2 className="welcome__title">HOTEL BELLA GRACE</h2>
          <p className="welcome__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </RevealSection>
      </section>

      {/* ═══ ROOMS CAROUSEL ═══ */}
      <section className="rooms" id="rooms">
        <RevealSection variant="fadeUp">
          <h2 className="sec-title">ROOMS & SUITES</h2>
          <div className="carousel">
            <button className="carousel__arrow carousel__arrow--left" onClick={prevRoom}>←</button>
            <span className="carousel__counter">{String(roomSlide + 1).padStart(2, '0')} / {String(rooms.length).padStart(2, '0')}</span>
            <button className="carousel__arrow carousel__arrow--right" onClick={nextRoom}>→</button>
          </div>
        </RevealSection>
        <div className="rooms__track" style={{ transform: `translateX(-${roomSlide * 52}%)` }}>
          {rooms.map((r, i) => (
            <div className="room-card" key={i}>
              <div className="room-card__img-wrap">
                <GlareHover glareColor="#D2AA00" glareOpacity={0.22} glareSize={320} transitionDuration={600}>
                  <img src={r.img} alt={r.name} />
                </GlareHover>
              </div>
              <h3 className="room-card__name">{r.name} <span className="room-card__chevron">›</span></h3>
              <div className="room-card__sep" />
              <button className="room-card__btn">View Rates</button>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ ARCHITECTURAL GEM ═══ */}
      <section className="gem">
        <RevealSection variant="fadeLeft">
          <h2 className="gem__title">AN ARCHITECTURAL GEM</h2>
          <p className="gem__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
        </RevealSection>
        <RevealSection variant="scale" delay={0.15}>
          <div className="gem__gallery">
            {gemGallery.map((img, i) => (
              <div key={i} className={`gem__slide${i === gemSlide ? ' gem__slide--active' : ''}`}>
                <img src={img} alt="Gallery" />
              </div>
            ))}
          </div>
          <div className="carousel carousel--center">
            <button className="carousel__arrow carousel__arrow--left" onClick={prevGem}>←</button>
            <span className="carousel__counter">{String(gemSlide + 1).padStart(2, '0')} / {String(gemGallery.length).padStart(2, '0')}</span>
            <button className="carousel__arrow carousel__arrow--right" onClick={nextGem}>→</button>
          </div>
        </RevealSection>
      </section>

      {/* ═══ OYSTER BAR ═══ */}
      <section className="oyster" id="dining">
        <div className="oyster__img-wrap">
          <img src={IMG.restaurant} alt="Delaney House Oyster Bar" />
        </div>
        <RevealSection variant="fadeRight">
          <div className="oyster__content">
            <h2 className="oyster__title">DELANEY HOUSE OYSTER BAR</h2>
            <p className="oyster__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <a href="#" className="btn btn--outline">Explore</a>
          </div>
        </RevealSection>
      </section>

      {/* ═══ A SENSE OF PLACE ═══ */}
      <section className="place" id="explore">
        <RevealSection variant="fadeLeft">
          <h2 className="place__title">A SENSE OF PLACE</h2>
          <p className="place__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <a href="#" className="btn btn--dark">Learn More</a>
        </RevealSection>
        <RevealSection variant="scale" delay={0.15}>
          <div className="place__gallery">
            {placeGallery.map((img, i) => (
              <div key={i} className={`place__slide${i === placeSlide ? ' place__slide--active' : ''}`}>
                <img src={img} alt="Charleston" />
              </div>
            ))}
          </div>
          <div className="carousel carousel--center">
            <button className="carousel__arrow carousel__arrow--left" onClick={prevPlace}>←</button>
            <span className="carousel__counter">{String(placeSlide + 1).padStart(2, '0')} / {String(placeGallery.length).padStart(2, '0')}</span>
            <button className="carousel__arrow carousel__arrow--right" onClick={nextPlace}>→</button>
          </div>
        </RevealSection>
      </section>

      {/* ═══ SUITE ESCAPE ═══ */}
      <section className="escape">
        <div className="escape__img-wrap">
          <img src={IMG.lounge} alt="Suite escape" />
        </div>
        <RevealSection variant="fadeRight">
          <div className="escape__content">
            <h2 className="escape__title">A SUITE ESCAPE</h2>
            <p className="escape__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <a href="#" className="btn btn--outline">Learn More</a>
          </div>
        </RevealSection>
      </section>

      {/* ═══ HISTORY & CULTURE ═══ */}
      <section className="history">
        <div className="history__img-wrap">
          <img src={IMG.suite} alt="History" />
        </div>
        <RevealSection variant="fadeLeft">
          <div className="history__content">
            <h2 className="history__title">ENTRENCHED IN HISTORY, ART, AND CULTURE</h2>
            <p className="history__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <a href="#" className="btn btn--dark">Learn More</a>
          </div>
        </RevealSection>
      </section>

      {/* ═══ MARRIOTT SECTION ═══ */}
      <section className="marriott">
        <RevealSection variant="fadeUp">
          <h2 className="marriott__title">A MARRIOTT HOTEL IN DOWNTOWN CHARLESTON</h2>
          <p className="marriott__sub">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </RevealSection>
      </section>

      {/* ═══ AMENITIES ═══ */}
      <section className="amenities" id="amenities">
        <RevealSection variant="fadeUp">
          <h2 className="sec-title">HOTEL AMENITIES</h2>
        </RevealSection>
        <div className="amenities__grid">
          {amenities.map((a, i) => (
            <RevealSection key={i} delay={i * 0.12} variant="scale">
              <div className="amenity-card">
                <GlareHover glareColor="#D2AA00" glareOpacity={0.25} glareSize={280} borderRadius={4}>
                  <img src={a.img} alt={a.title} />
                </GlareHover>
                <h3>{a.title}</h3>
              </div>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* ═══ CONTACT / CTA ═══ */}
      <section className="cta" id="contact">
        <RevealSection variant="fadeUp">
          <h2 className="cta__title">PLAN YOUR STAY</h2>
          <p className="cta__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <form className="cta__form" onSubmit={e => e.preventDefault()}>
            <input type="text" placeholder="Check-in" />
            <input type="text" placeholder="Check-out" />
            <input type="number" placeholder="Guests" min={1} defaultValue={2} />
            <button type="submit" className="btn btn--burgundy">Check Availability</button>
          </form>
        </RevealSection>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="footer">
        <div className="footer__inner">
          <div className="footer__col">
            <h4>Hotel Bella Grace</h4>
            <p>185 East Bay Street<br/>Charleston, SC 29401</p>
            <p>+1 (843) 990-7500</p>
          </div>
          <div className="footer__col">
            <h4>Quick Links</h4>
            <a href="#">Rooms & Suites</a>
            <a href="#">Dining</a>
            <a href="#">Explore Charleston</a>
            <a href="#">Meetings & Events</a>
          </div>
          <div className="footer__col">
            <h4>Amenities</h4>
            <a href="#">Pool & Terrace</a>
            <a href="#">Fitness Center</a>
            <a href="#">Concierge</a>
            <a href="#">Parking</a>
          </div>
          <div className="footer__col">
            <h4>Policies</h4>
            <a href="#">Pet Policy</a>
            <a href="#">Cancellation</a>
            <a href="#">Privacy</a>
            <a href="#">Accessibility</a>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© 2026 Hotel Bella Grace. Marriott Bonvoy.</span>
          <span>Demo — React + TypeScript</span>
        </div>
      </footer>

      <ScrollTop bg="#A90023" color="#fff" hoverBg="#D2AA00" hoverColor="#1C1C1C" />
    </div>
  )
}
