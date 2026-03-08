import { Link } from 'react-router-dom'
import { FadeIn } from '../../components/FadeIn'
import { ScrollTop } from '../../components/ScrollTop'
import './BadruttsPalace.css'
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


const IMG = {
  hero: hotel,
  spa: spa,
  rooms: [
    { img: room, name: 'Grand Suites', desc: 'Opulent palace suites with Alpine views' },
    { img: room2, name: 'Junior Suites', desc: 'Elegant rooms with contemporary luxury' },
    { img: room3, name: 'Classic Rooms', desc: 'Refined mountain retreats' },
    { img: room4, name: 'Deluxe Rooms', desc: 'Premium comfort with valley vistas' },
    { img: room5, name: 'Palace Rooms', desc: 'Historic heritage accommodations' },
    { img: room6, name: 'Superior Rooms', desc: 'Spacious quarters with balconies' },
  ],
  dining: dinner,
  activities: [
    { img: act1, name: 'Alpine Skiing', desc: 'World-class slopes and pristine powder' },
    { img: act2, name: 'Polo & Equestrian', desc: 'Legendary St. Moritz polo tradition' },
    { img: act3, name: 'Lakeside Sailing', desc: 'Summer on the frozen lake turned summer' },
    { img: act1, name: 'Mountain Hiking', desc: 'Alpine trails with breathtaking vistas' },
  ],
}

export function BadruttsPalace() {
  return (
    <>
      <Link to="/" style={{position:'fixed',top:16,left:16,zIndex:9999,background:'rgba(0,0,0,.65)',color:'#fff',padding:'7px 14px',fontSize:'.72rem',letterSpacing:1,borderRadius:3,backdropFilter:'blur(6px)',textDecoration:'none'}}>← Demos</Link>

      <header className="bp-header">
        <div className="bp-logo">BADRUTT'S PALACE</div>
        <nav className="bp-nav">
          <a href="#rooms">Rooms</a>
          <a href="#dining">Dining</a>
          <a href="#spa">Wellness</a>
          <a href="#activities">Activities</a>
        </nav>
        <button className="bp-book-btn">Reserve</button>
      </header>

      <section className="bp-hero">
        <img src={IMG.hero} alt="Badrutt's Palace St. Moritz" />
        <div className="bp-hero-ov">
          <h1>BADRUTT'S PALACE</h1>
          <p>St. Moritz · Switzerland · Since 1896</p>
        </div>
      </section>

      <section className="bp-about">
        <FadeIn>
          <h2>Where Magic Happens</h2>
          <div className="bp-divider" />
          <p>
            Badrutt's Palace St. Moritz stands as a beacon of timeless luxury in the
            heart of the Swiss Alps. Since 1896, this legendary grand palace hotel has
            hosted royalty, celebrities, and discerning travelers from around the world.
            Nestled above the glittering frozen lake, our palace blends European heritage
            with contemporary elegance, offering an unparalleled experience of Alpine splendor.
          </p>
          <div className="bp-heritage">A Legacy of Excellence · Est. 1896</div>
        </FadeIn>
      </section>

      <section className="bp-rooms" id="rooms">
        <FadeIn><h2>Accommodations</h2></FadeIn>
        <div className="bp-room-grid">
          {IMG.rooms.map((r, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="bp-room-card">
                <img src={r.img} alt={r.name} />
                <div className="bp-room-card-body">
                  <h4>{r.name}</h4>
                  <span>{r.desc}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="bp-dining" id="dining">
        <img src={IMG.dining} alt="Dining at Badrutt's Palace" />
        <FadeIn>
          <div className="bp-dining-ov">
            <h2>Fine Dining & Gastronomy</h2>
            <p>
              Experience culinary excellence across our distinguished restaurants.
              From Michelin-starred cuisine to casual Alpine fare, each establishment
              showcases the finest ingredients and masterful preparation.
            </p>
            <div className="bp-dining-restaurants">
              <div className="bp-dining-rest-card">
                <h4>Le Restaurant</h4>
                <span>Haute Cuisine</span>
              </div>
              <div className="bp-dining-rest-card">
                <h4>Giardino</h4>
                <span>Italian Classics</span>
              </div>
              <div className="bp-dining-rest-card">
                <h4>King's Club</h4>
                <span>Casual Elegance</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="bp-spa" id="spa">
        <div className="bp-spa-content">
          <FadeIn>
            <div className="bp-spa-text">
              <h2>Spa & Wellness</h2>
              <div className="bp-divider" />
              <p>
                Retreat to our world-class spa and wellness sanctuary. Discover rejuvenating
                treatments inspired by Alpine traditions, state-of-the-art fitness facilities,
                and thermal pools with panoramic mountain views. Our expert therapists are
                dedicated to restoring your body and spirit.
              </p>
            </div>
          </FadeIn>
          <div className="bp-spa-img">
            <img src={IMG.spa} alt="Spa & Wellness" />
          </div>
        </div>
      </section>

      <section className="bp-activities" id="activities">
        <FadeIn><h2>Alpine Experiences</h2></FadeIn>
        <div className="bp-activities-grid">
          {IMG.activities.map((a, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bp-activity-card">
                <img src={a.img} alt={a.name} />
                <div className="bp-activity-ov">
                  <h4>{a.name}</h4>
                  <p>{a.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="bp-newsletter">
        <FadeIn>
          <h2>Discover More</h2>
          <p>Exclusive offers, Alpine experiences, and palace traditions delivered to your inbox.</p>
          <div className="bp-nl-form">
            <input type="email" placeholder="Your email address" />
            <button>Subscribe</button>
          </div>
        </FadeIn>
      </section>

      <footer className="bp-footer">
        <div className="bp-footer-logo">BADRUTT'S PALACE</div>
        <div className="bp-footer-addr">
          St. Moritz<br />Grisons, Switzerland<br />+41 81 837 1000
        </div>
        <div className="bp-footer-links">
          <a href="#rooms">Rooms</a>
          <a href="#dining">Dining</a>
          <a href="#spa">Wellness</a>
          <a href="#activities">Activities</a>
          <a href="#">Contact</a>
        </div>
        <div className="bp-footer-copy">© 2026 Badrutt's Palace — Demo Concept Only</div>
      </footer>

      <ScrollTop bg="var(--bp-gold)" color="var(--bp-navy)" hoverBg="var(--bp-navy)" hoverColor="var(--bp-gold)" />
    </>
  )
}
