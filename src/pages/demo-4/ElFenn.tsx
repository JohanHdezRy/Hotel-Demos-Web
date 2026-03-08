import { Link } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react'
import { FadeIn } from '../../components/FadeIn'
import { ScrollTop } from '../../components/ScrollTop'
import './ElFenn.css'
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


/* ── images ── */
const IMG = {
  hero: [
    hotel,
    hote2,
    hote3
  ],
  features: [
    { img: fea3, label: 'Retreats' },
    { img: fea2, label: 'Art @ El Fenn' },
    { img: fea5, label: 'Spa & Pools' },
    { img: fea1, label: 'Restaurant' },
    { img: fea4, label: 'Interior Styling' },
    { img: fea6, label: 'Our Ethos' },
  ],
  rooms: [
    { img: room1, name: 'Small Rooms', price: '€342' },
    { img: room2, name: 'Medium Rooms', price: '€428' },
    { img: room3, name: 'Large Rooms', price: '€523' },
    { img: room4, name: 'Extra Large Rooms', price: '€618' },
    { img: room5, name: 'XL with Terrace', price: '€950' },
    { img: room6, name: 'Family Suite (2 Bed)', price: '€950' },
    { img: room7, name: 'Family Suite (3 Bed)', price: '€1,140' },
    { img: room8, name: 'Cosy Rooms', price: '€342' },
  ],
  rooftop: fea6,
  activities: [
    { img: fea1, label: 'Eating', sub: 'Food & Drink' },
    { img: fea7, label: 'Drinking', sub: 'Rooftop Bar' },
    { img: fea5, label: 'Relaxing', sub: 'Spa & Pools' },
    { img: fea8, label: 'Shopping', sub: 'Boutique' },
  ],
  blog: [
    { img: art, title: 'Day Trips from Marrakech', excerpt: 'Discover the best excursions from the Red City, from Atlas Mountains to Essaouira coast.' },
    { img: fea4, title: 'Guide to Marrakech Districts', excerpt: 'Navigate the vibrant souks, palaces, and hidden gardens across the city\'s unique neighborhoods.' },
    { img: hotel, title: 'Art Exhibitions Spring 2026', excerpt: 'A curated guide to the most exciting contemporary art shows in Morocco this season.' },
  ],
  insta: [
    '../../styles/img/demo-4/marrakech-4772558.jpg',
    '../../styles/img/demo-4/art-2053428.jpg',
    '../../styles/img/demo-4/resort-4471852.jpg',
    '../../styles/img/demo-4/brick-wall-1834784.jpg',
    '../../styles/img/demo-4/hotel-1979406.jpg',
    '../../styles/img/demo-4/travel-1677347.jpg',
  ],
}

export function ElFenn() {
  /* ── Hero slider ── */
  const [slide, setSlide] = useState(0)
  const next = useCallback(() => setSlide(s => (s + 1) % IMG.hero.length), [])
  const prev = useCallback(() => setSlide(s => (s - 1 + IMG.hero.length) % IMG.hero.length), [])

  useEffect(() => {
    const t = setInterval(next, 5500)
    return () => clearInterval(t)
  }, [next])

  return (
    <>
      <Link to="/" style={{position:'fixed',top:16,left:16,zIndex:9999,background:'rgba(0,0,0,.65)',color:'#fff',padding:'7px 14px',fontSize:'.72rem',letterSpacing:1,borderRadius:3,backdropFilter:'blur(6px)',textDecoration:'none'}}>← Demos</Link>

      {/* ── HEADER ── */}
      <header className="ef-header">
        <div className="ef-logo">El Fenn</div>
        <nav className="ef-nav">
          <a href="#rooms">Rooms</a>
          <a href="#rooftop">Rooftop</a>
          <a href="#dining">Food &amp; Drink</a>
          <a href="#blog">Blog</a>
          <a href="#about">About</a>
        </nav>
        <button className="ef-book-btn">Book a Stay</button>
      </header>

      {/* ── HERO ── */}
      <section className="ef-hero">
        {IMG.hero.map((src, i) => (
          <div key={i} className={`ef-hero-slide${i === slide ? ' active' : ''}`}>
            <img src={src} alt={`El Fenn slide ${i + 1}`} />
          </div>
        ))}
        <div className="ef-hero-overlay">
          <h1 className="ef-hero-tagline">El Fenn</h1>
          <p className="ef-hero-sub">Luxury with Authenticity — Marrakech</p>
        </div>
        <div className="ef-hero-arrows">
          <button onClick={prev}>← Prev</button>
          <button onClick={next}>Next →</button>
        </div>
        <div className="ef-hero-dots">
          {IMG.hero.map((_, i) => (
            <span key={i} className={i === slide ? 'active' : ''} onClick={() => setSlide(i)} />
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="ef-about" id="about">
        <FadeIn>
          <h2>Luxury with Authenticity</h2>
          <div className="ef-gold-line" />
          <p>
            El Fenn is a boutique riad hotel nestled in the heart of Marrakech's medina.
            With 28 individually styled rooms and suites, three pools, a rooftop restaurant,
            spa, and a curated art collection, it offers an intimate escape blending
            mid-century European furniture with traditional Moroccan craftsmanship.
          </p>
          <p>
            Designed as a private home that welcomes guests, each space tells a story through
            vibrant colors, handpicked antiques, and contemporary art. The result is a sanctuary
            of warmth and character unlike any other in the Red City.
          </p>
          <div className="ef-accolade">Condé Nast Traveler Gold List — 2017, 2021, 2022, 2024</div>
        </FadeIn>
      </section>

      {/* ── FEATURES GRID ── */}
      <section className="ef-features">
        {IMG.features.map((f, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="ef-feat-card">
              <img src={f.img} alt={f.label} />
              <div className="ef-feat-ov">
                <h3>{f.label}</h3>
                <span>Discover →</span>
              </div>
            </div>
          </FadeIn>
        ))}
      </section>

      {/* ── ROOMS ── */}
      <section className="ef-rooms" id="rooms">
        <FadeIn>
          <h2>The Perfect Night's Sleep</h2>
          <p className="ef-rooms-sub">Discover Our Bedrooms</p>
        </FadeIn>
        <div className="ef-rooms-grid">
          {IMG.rooms.map((r, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="ef-room-card">
                <img src={r.img} alt={r.name} />
                <div className="ef-room-info">
                  <h4>{r.name}</h4>
                  <span>From {r.price}+</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── ROOFTOP ── */}
      <section className="ef-rooftop" id="rooftop">
        <img src={IMG.rooftop} alt="Rooftop terrace" />
        <FadeIn>
          <div className="ef-rooftop-ov">
            <h2>The Rooftop</h2>
            <p>
              Our celebrated rooftop terrace is open daily for non-residents.
              Enjoy panoramic views over the medina and Atlas Mountains while savoring
              craft cocktails and Moroccan-inspired sharing plates.
            </p>
            <div className="ef-hours">Open daily 12:30 — 23:00</div>
          </div>
        </FadeIn>
      </section>

      {/* ── ACTIVITIES ── */}
      <section className="ef-activities" id="dining">
        {IMG.activities.map((a, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="ef-act-card">
              <img src={a.img} alt={a.label} />
              <div className="ef-act-ov">
                <h3>{a.label}</h3>
                <span>{a.sub}</span>
              </div>
            </div>
          </FadeIn>
        ))}
      </section>

      {/* ── BLOG ── */}
      <section className="ef-blog" id="blog">
        <FadeIn><h2>The El Fenn Blog</h2></FadeIn>
        <div className="ef-blog-grid">
          {IMG.blog.map((b, i) => (
            <FadeIn key={i} delay={i * 0.12}>
              <div className="ef-blog-card">
                <img src={b.img} alt={b.title} />
                <div className="ef-blog-card-body">
                  <h4>{b.title}</h4>
                  <p>{b.excerpt}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section className="ef-newsletter">
        <FadeIn>
          <h2>Get the El Fenn Hotlist</h2>
          <p>Sign up for our fortnightly newsletter featuring travel tips, events, and insider guides to Marrakech.</p>
          <div className="ef-nl-form">
            <input type="email" placeholder="Your email address" />
            <button>Subscribe</button>
          </div>
        </FadeIn>
      </section>

      {/* ── INSTAGRAM ── */}
      <section className="ef-insta">
        <FadeIn>
          <h2>Follow Our Journey</h2>
          <span className="ef-insta-handle">@elfennmarrakech</span>
        </FadeIn>
        <div className="ef-insta-grid">
          {IMG.insta.map((src, i) => (
            <img key={i} src={src} alt={`Instagram ${i + 1}`} />
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="ef-footer">
        <div className="ef-footer-logo">El Fenn</div>
        <div className="ef-footer-addr">
          2 Derb Moulay Abdullah Ben Hezzian<br />
          Bab El Ksour, Medina<br />
          Marrakech 40000, Morocco<br />
          +212 524 44 1220
        </div>
        <div className="ef-footer-social">
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">Pinterest</a>
          <a href="#">TripAdvisor</a>
        </div>
        <div className="ef-footer-links">
          <a href="#">Find Us</a>
          <a href="#rooms">Rooms</a>
          <a href="#dining">Food &amp; Drink</a>
          <a href="#rooftop">Rooftop Bar</a>
          <a href="#">Spa</a>
          <a href="#">Boutique</a>
          <a href="#">Privacy</a>
        </div>
        <div className="ef-footer-copy">© 2026 El Fenn — Demo Concept Only</div>
      </footer>

      <ScrollTop bg="var(--ef-warm)" color="#fff" hoverBg="var(--ef-pink)" hoverColor="#fff" />
    </>
  )
}
