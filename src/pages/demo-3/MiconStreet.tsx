import { Link } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react'
import { FadeIn } from '../../components/FadeIn'
import './MiconStreet.css'
import location from '../../styles/img/demo-3/cozumel2.jpg'
import terrace from '../../styles/img/demo-3/terrace.jpg'
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

/* ---------- Pixabay images ---------- */
const IMG = {
  slides: [
    hotel,
    hote2,
    hote3
  ],
  terrace: terrace,
  location: location,
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
  gallery: [
    gal,
    gal2,
    gal3,
    gal4
  ],
}

const NAV_LINKS = ['HOME', '3ELEMENTS', 'BLOG', 'ROOMS', 'SERVICES', 'LOCATION', 'HIP HOTELS', 'PHOTO GALLERY', 'CONTACT']

export function MiconStreet() {
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setSlide(p => (p + 1) % IMG.slides.length), 5000)
    return () => clearInterval(timer)
  }, [])

  const goSlide = useCallback((i: number) => setSlide(i), [])

  return (
    <div>
      <Link to="/" style={{position:'fixed',top:16,left:16,zIndex:9999,background:'rgba(0,0,0,.65)',color:'#fff',padding:'7px 14px',fontSize:'.72rem',letterSpacing:1,borderRadius:3,backdropFilter:'blur(6px)',textDecoration:'none'}}>← Demos</Link>

      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Roboto:wght@300;400;500;700&family=Cormorant+Garamond:ital,wght@1,300&display=swap" rel="stylesheet" />

      {/* ===== NAVBAR ===== */}
      <nav className="mc-nav">
        <div className="mc-nav__top">
          <div className="mc-nav__logo">
            <span className="mc-nav__logo-num">18</span>
            <span className="mc-nav__logo-text">MICON</span>
            <span className="mc-nav__logo-script">Street</span>
          </div>
          <div className="mc-nav__right">
            <span className="mc-nav__lang">EN ▾</span>
            <button className="mc-nav__book">BOOK NOW</button>
            <div className="mc-nav__pin">📍</div>
          </div>
        </div>
        <div className="mc-nav__menu">
          {NAV_LINKS.map(l => (
            <a key={l} href="#" className="mc-nav__link">{l}</a>
          ))}
        </div>
      </nav>

      {/* ===== HERO SLIDER ===== */}
      <section className="mc-hero">
        {IMG.slides.map((src, i) => (
          <div key={i} className={`mc-hero__slide${i === slide ? ' active' : ''}`}>
            <img src={src} alt={`Slide ${i + 1}`} />
          </div>
        ))}
        <div className="mc-hero__award">World Boutique Hotels Awards 2018</div>
        <div className="mc-hero__dots">
          {IMG.slides.map((_, i) => (
            <div key={i} className={`mc-hero__dot${i === slide ? ' active' : ''}`} onClick={() => goSlide(i)} />
          ))}
        </div>
      </section>

      {/* ===== INTRO ===== */}
      <FadeIn>
        <section className="mc-intro">
          <p className="mc-intro__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus vitae massa
            faucibus fermentum. Praesent a libero vitae nulla cursus aliquam at vel velit.
            Curabitur sed semper nisl, eget efficitur augue. Nulla facilisi. In hac habitasse
            platea dictumst. Fusce dignissim enim vitae ante consequat, non blandit purus hendrerit.
            Integer sollicitudin orci vel erat vehicula, at convallis nulla dictum. Suspendisse
            potenti. Vivamus lacinia odio vitae vestibulum vestibulum.
          </p>
        </section>
      </FadeIn>

      {/* ===== FEATURES CARDS ===== */}
      <FadeIn>
        <section className="mc-features">
          <div className="mc-features__grid">
            <div className="mc-features__card">
              <img src={IMG.location} alt="Location" />
              <div className="mc-features__card-overlay">
                <h3 className="mc-features__card-title">Location</h3>
                <p className="mc-features__card-desc">
                  5 minutes walk from the Monastiraki Metro station, just under the Acropolis
                </p>
                <span className="mc-features__card-link">click for more...</span>
              </div>
            </div>
            <div className="mc-features__card">
              <img src={IMG.hipHotels} alt="Hip Hotels" />
              <div className="mc-features__card-overlay">
                <h3 className="mc-features__card-title">HIP Hotels</h3>
                <p className="mc-features__card-desc">
                  18 Micon Street is a member of the prestigious HIP HOTELS association
                </p>
                <span className="mc-features__card-link">click for more...</span>
              </div>
            </div>
            <div className="mc-features__card">
              <img src={IMG.services} alt="Services" />
              <div className="mc-features__card-overlay">
                <h3 className="mc-features__card-title">Services</h3>
                <p className="mc-features__card-desc">
                  Wide range of services and amenities i.e. breakfast, decompression lounge, etc.
                </p>
                <span className="mc-features__card-link">click for more...</span>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ===== 3ELEMENTS ===== */}
      <FadeIn>
        <section className="mc-elements">
          <p className="mc-elements__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus libero vel
            sapien convallis, non tincidunt leo mattis. Etiam auctor, massa eget hendrerit
            dignissim, nisl nulla aliquet velit, vel lobortis ex ligula ac augue. Suspendisse
            in vestibulum felis, eget fermentum orci. Curabitur ut turpis eget arcu consequat
            faucibus. Proin euismod risus in nunc eleifend, vel posuere magna fringilla.
            Integer accumsan magna vel enim suscipit, vel dignissim felis consequat.
          </p>
        </section>
      </FadeIn>

      {/* ===== ROOMS GRID ===== */}
      <FadeIn>
        <section className="mc-rooms">
          <h2 className="mc-rooms__title">Our Rooms & Suites</h2>
          <div className="mc-rooms__grid">
            {IMG.rooms.map((r, i) => (
              <div key={i} className="mc-rooms__card">
                <img src={r.img} alt={r.name} className="mc-rooms__card-img" />
                <p className="mc-rooms__card-name">{r.name}</p>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* ===== GALLERY STRIP ===== */}
      <FadeIn>
        <section className="mc-gallery">
          <div className="mc-gallery__strip">
            {IMG.gallery.map((g, i) => (
              <img key={i} src={g} alt={`Gallery ${i + 1}`} />
            ))}
          </div>
        </section>
      </FadeIn>

      {/* ===== FOOTER ===== */}
      <footer className="mc-footer">
        <div className="mc-footer__section">
          <h3 className="mc-footer__section-title">Contact us</h3>
          <div className="mc-footer__info">
            📍 Esopou 14 & Mikonos 18 - 10554 Athens - Greece<br />
            📞 Tel. +30 2103235307<br />
            ✉ concierge@18miconstr.com<br />
            ✉ reservations@18miconstr.com
          </div>
        </div>

        <div className="mc-footer__section">
          <h3 className="mc-footer__section-title">Social media</h3>
          <div className="mc-footer__socials">
            <a href="#" className="mc-footer__social">TA</a>
            <a href="#" className="mc-footer__social">f</a>
            <a href="#" className="mc-footer__social">ig</a>
          </div>
        </div>

        <div className="mc-footer__section">
          <h3 className="mc-footer__section-title">Reviews</h3>
          <p className="mc-footer__info">💬 Guest reviews on TripAdvisor</p>
        </div>

        <div className="mc-footer__section">
          <div className="mc-footer__links">
            <a href="#" className="mc-footer__link">Press</a>
            <a href="#" className="mc-footer__link">Psiri</a>
            <a href="#" className="mc-footer__link">Awards</a>
            <a href="#" className="mc-footer__link">Explore our other properties</a>
          </div>
        </div>
      </footer>

      <div className="mc-footer__bottom">
        <div className="mc-footer__scroll-top">
          <button className="mc-footer__scroll-btn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>⌃</button>
        </div>
        © 2026 18 Micon Street — Demo para promoción hotelera
      </div>
    </div>
  )
}
