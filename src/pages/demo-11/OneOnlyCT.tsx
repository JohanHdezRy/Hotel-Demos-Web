import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import { FadeIn } from '../../components/FadeIn'
import { ScrollTop } from '../../components/ScrollTop'
import './OneOnlyCT.css'
import hotel from '../../styles/img/demo-11/hotel.jpg'
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


export const imagenes = {
  hotel: hotel
}

export const OneOnlyCT: React.FC = () => {
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
    <div className="oo-page">
      <Link to="/" style={{position:'fixed',top:16,left:16,zIndex:9999,background:'rgba(0,0,0,.65)',color:'#fff',padding:'7px 14px',fontSize:'.72rem',letterSpacing:1,borderRadius:3,backdropFilter:'blur(6px)',textDecoration:'none'}}>← Demos</Link>

      {/* Header */}
      <header className="oo-header">
        <div className="oo-container oo-header-content">
          <div className="oo-logo">One&Only</div>
          <nav>
            <ul className="oo-nav">
              <li><a href="#about">About</a></li>
              <li><a href="#rooms">Rooms</a></li>
              <li><a href="#dining">Dining</a></li>
              <li><a href="#spa">Spa</a></li>
              <li><a href="#activities">Activities</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="oo-hero">
        <div className="oo-hero-content">
          <h1>One&Only Cape Town</h1>
          <p className="oo-tagline">Ultra-Luxury Waterfront Resort</p>
          <button className="oo-hero-button">Explore Now</button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="oo-about">
        <div className="oo-container">
          <FadeIn>
            <div className="oo-about-grid">
              <div className="oo-about-image" />
              <div>
                <h2>Welcome to Paradise</h2>
                <p>
                  Nestled on the V&A Waterfront with breathtaking views of Table Mountain,
                  One&Only Cape Town redefines luxury in South Africa. Our contemporary African
                  architecture seamlessly blends with world-class hospitality, offering an
                  unparalleled escape for the most discerning travelers.
                </p>
                <p>
                  From the moment you arrive, you'll experience our commitment to excellence,
                  personalized service, and authentic South African warmth. Every detail has
                  been meticulously crafted to create an unforgettable journey.
                </p>
                <div className="oo-highlights">
                  <div className="oo-highlight">
                    <h3>V&A Waterfront</h3>
                    <p>Prime location at the iconic waterfront with stunning harbor views</p>
                  </div>
                  <div className="oo-highlight">
                    <h3>Nobu Restaurant</h3>
                    <p>Michelin-starred cuisine from Chef Nobu Matsuhisa</p>
                  </div>
                  <div className="oo-highlight">
                    <h3>Table Mountain</h3>
                    <p>Majestic views of one of the world's most iconic mountains</p>
                  </div>
                  <div className="oo-highlight">
                    <h3>5-Star Service</h3>
                    <p>Dedicated concierge and personalized experiences</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="oo-rooms">
        <div className="oo-container">
          <FadeIn>
            <h2 className="oo-section-title">Luxury Suites & Residences</h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="oo-rooms-grid">
              <div className="oo-room-card">
                <img
                  src={room1}
                  alt="Island Suite"
                  className="oo-room-image"
                />
                <div className="oo-room-overlay">
                  <h3 className="oo-room-name">Island Suite</h3>
                  <p className="oo-room-description">Waterfront luxury with private terraces and panoramic views</p>
                </div>
              </div>

              <div className="oo-room-card">
                <img
                  src={room2}
                  alt="Marina Suite"
                  className="oo-room-image"
                />
                <div className="oo-room-overlay">
                  <h3 className="oo-room-name">Marina Suite</h3>
                  <p className="oo-room-description">Modern elegance with direct marina access and yacht views</p>
                </div>
              </div>

              <div className="oo-room-card">
                <img
                  src={room3}
                  alt="Penthouse"
                  className="oo-room-image"
                />
                <div className="oo-room-overlay">
                  <h3 className="oo-room-name">Penthouse</h3>
                  <p className="oo-room-description">Ultimate indulgence with 360-degree Table Mountain views</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Dining Section */}
      <section id="dining" className="oo-dining">
        <div className="oo-container">
          <FadeIn>
            <h2 className="oo-section-title-dinner">World-Class Dining</h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="oo-dining-grid">
              <div className="oo-dining-card">
                <img
                  src={res}
                  alt="Nobu"
                  className="oo-dining-image"
                />
                <div className="oo-dining-content">
                  <h3 className="oo-dining-name">Nobu</h3>
                  <p className="oo-dining-cuisine">Japanese Fusion</p>
                  <p className="oo-dining-description">
                    Experience Chef Nobu Matsuhisa's legendary Japanese cuisine with Peruvian influences
                    in this iconic dining destination.
                  </p>
                </div>
              </div>

              <div className="oo-dining-card">
                <img
                  src={res2}
                  alt="Reuben's"
                  className="oo-dining-image"
                />
                <div className="oo-dining-content">
                  <h3 className="oo-dining-name">Reuben's</h3>
                  <p className="oo-dining-cuisine">Contemporary South African</p>
                  <p className="oo-dining-description">
                    Celebrate South African culinary heritage with innovative modern cuisine
                    prepared from the finest local ingredients.
                  </p>
                </div>
              </div>

              <div className="oo-dining-card">
                <img
                  src={res3}
                  alt="Vista Bar"
                  className="oo-dining-image"
                />
                <div className="oo-dining-content">
                  <h3 className="oo-dining-name">Vista Bar</h3>
                  <p className="oo-dining-cuisine">Craft Cocktails & Wine</p>
                  <p className="oo-dining-description">
                    Unwind with carefully crafted cocktails and an extensive wine selection
                    under the stars.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Spa Section */}
      <section id="spa" className="oo-spa">
        <div className="oo-container">
          <FadeIn>
            <div className="oo-spa-content">
              <div className="oo-spa-image" />
              <div>
                <h2>One&Only Spa</h2>
                <p>
                  Immerse yourself in our state-of-the-art wellness sanctuary, where ancient
                  African healing traditions meet contemporary spa science. Our expert therapists
                  create bespoke treatments tailored to your unique wellness journey.
                </p>
                <p>
                  From rejuvenating facials to deep tissue massages, every treatment is designed
                  to restore balance to your mind, body, and spirit.
                </p>
                <div className="oo-treatments">
                  <div className="oo-treatment">
                    <h4 className="oo-treatment-name">African Ritual</h4>
                    <p className="oo-treatment-description">Traditional healing practices honoring the continent's wisdom</p>
                  </div>
                  <div className="oo-treatment">
                    <h4 className="oo-treatment-name">Ocean Therapy</h4>
                    <p className="oo-treatment-description">Seaweed-infused treatments harnessing the sea's natural energy</p>
                  </div>
                  <div className="oo-treatment">
                    <h4 className="oo-treatment-name">Mountain Escape</h4>
                    <p className="oo-treatment-description">Grounding treatments inspired by Table Mountain's majesty</p>
                  </div>
                  <div className="oo-treatment">
                    <h4 className="oo-treatment-name">Couples Sanctuary</h4>
                    <p className="oo-treatment-description">Romantic experiences for two in our private treatment suites</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activities" className="oo-activities">
        <div className="oo-container">
          <FadeIn>
            <h2 className="oo-section-title-act">Unforgettable Experiences</h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="oo-activities-grid">
              <div className="oo-activity-card">
                <img
                  src={event}
                  alt="Table Mountain Adventure"
                  className="oo-activity-image"
                />
                <div className="oo-activity-content">
                  <h3>Table Mountain Hike</h3>
                  <p>
                    Ascend one of the world's new seven wonders. Our expert guides lead you through
                    breathtaking trails with panoramic views of the city, coast, and surrounding peaks.
                  </p>
                </div>
              </div>

              <div className="oo-activity-card">
                <img
                  src={event2}
                  alt="Cape Winelands"
                  className="oo-activity-image"
                />
                <div className="oo-activity-content">
                  <h3>Cape Winelands Tour</h3>
                  <p>
                    Journey through South Africa's prestigious wine regions. Visit boutique estates,
                    taste award-winning vintages, and savour gourmet cuisine with valley views.
                  </p>
                </div>
              </div>

              <div className="oo-activity-card">
                <img
                  src={event3}
                  alt="Safari Adventure"
                  className="oo-activity-image"
                />
                <div className="oo-activity-content">
                  <h3>Big Five Safari</h3>
                  <p>
                    Embark on an exclusive game drive through pristine wildlife reserves. Witness
                    Africa's most iconic animals in their natural habitat with experienced trackers.
                  </p>
                </div>
              </div>

              <div className="oo-activity-card">
                <img
                  src={event4}
                  alt="Ocean Adventures"
                  className="oo-activity-image"
                />
                <div className="oo-activity-content">
                  <h3>Ocean Adventures</h3>
                  <p>
                    Explore the Cape's pristine waters. From yacht cruises to shark cage diving,
                    discover the Atlantic's wonders with unforgettable maritime experiences.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="oo-newsletter">
        <div className="oo-container">
          <FadeIn>
            <h2>Subscribe to Our Newsletter</h2>
            <p>Discover exclusive offers and experiences from One&Only Cape Town</p>
            <form className="oo-newsletter-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Subscribe</button>
            </form>
            {subscribed && (
              <p style={{ marginTop: '20px', color: '#c4a265' }}>
                Thank you for subscribing!
              </p>
            )}
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="oo-footer">
        <div className="oo-container">
          <div className="oo-footer-content">
            <div className="oo-footer-section">
              <h4>About</h4>
              <ul>
                <li><a href="#about">Our Resort</a></li>
                <li><a href="#rooms">Accommodations</a></li>
                <li><a href="#dining">Restaurants</a></li>
                <li><a href="#spa">Wellness</a></li>
              </ul>
            </div>

            <div className="oo-footer-section">
              <h4>Experiences</h4>
              <ul>
                <li><a href="#activities">Activities</a></li>
                <li><a href="#dining">Dining</a></li>
                <li><a href="#spa">Spa Treatments</a></li>
                <li><a href="#about">Events</a></li>
              </ul>
            </div>

            <div className="oo-footer-section">
              <h4>Contact</h4>
              <p>
                V&A Waterfront<br />
                Cape Town, 8002<br />
                South Africa<br />
                <a href="tel:+27211300000">+27 (0)21 130 0000</a>
              </p>
            </div>

            <div className="oo-footer-section">
              <h4>Follow Us</h4>
              <ul>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">LinkedIn</a></li>
              </ul>
            </div>
          </div>

          <div className="oo-footer-bottom">
            <p>&copy; 2024 One&Only Cape Town. All rights reserved.</p>
            <div>
              <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <ScrollTop bg="#1a5c5c" color="#fff" hoverBg="#c4a265" hoverColor="#1a1a1a" />
    </div>
  )
}
