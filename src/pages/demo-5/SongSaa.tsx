import { Link } from 'react-router-dom'
import { ScrollTop } from '../../components/ScrollTop'
import RevealSection from '../../components/animations/RevealSection'
import BlurText from '../../components/animations/BlurText'
import GlareHover from '../../components/animations/GlareHover'
import './SongSaa.css'
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

const IMG = {
  hero: hotel,
  properties: [
    { img: prop, name: 'Song Saa Private Island', desc: 'Award-winning overwater and jungle villas in Cambodia\'s Koh Rong Archipelago. A sanctuary where luxury meets conservation.' },
    { img: prop2, name: 'Song Saa Reserve', desc: 'A regenerative mixed-use development combining reforestation, hospitality, and cultural preservation across 400 hectares.' },
    { img: prop3, name: 'Saraan Sanctuaries', desc: 'Holistic wellbeing concept integrating nature immersion, indigenous wisdom, and transformative healing journeys.' },
  ],
  villas: [
    { img: villa, name: 'Overwater Villa', detail: '1-2 bedrooms · Ocean views' },
    { img: villa2, name: 'Jungle Villa', detail: '1-2 bedrooms · Rainforest canopy' },
    { img: villa3, name: 'Royal Villa', detail: '2 bedrooms · Private pool & beach' },
    { img: villa4, name: 'Two-Bedroom Villa', detail: 'Family · Lagoon access' },
  ],
  wellness: well,
  awards: awa,
}

export function SongSaa() {
  return (
    <>
      <Link to="/" style={{position:'fixed',top:16,left:16,zIndex:9999,background:'rgba(0,0,0,.65)',color:'#fff',padding:'7px 14px',fontSize:'.72rem',letterSpacing:1,borderRadius:3,backdropFilter:'blur(6px)',textDecoration:'none'}}>← Demos</Link>

      {/* HEADER */}
      <header className="ss-header">
        <div className="ss-logo">Song Saa</div>
        <nav className="ss-nav">
          <a href="#properties">Properties</a>
          <a href="#villas">Villas</a>
          <a href="#wellness">Wellbeing</a>
          <a href="#sustain">Sustainability</a>
          <a href="#about">About</a>
        </nav>
        <div className="ss-header-actions">
          <button className="ss-btn-donate">Donate</button>
          <button className="ss-btn-book">Book</button>
        </div>
      </header>

      {/* HERO */}
      <section className="ss-hero">
        <img src={IMG.hero} alt="Song Saa Private Island" />
        <div className="ss-hero-ov">
          <h1>Song Saa</h1>
          <BlurText
            text="Building a future where business can heal, not harm"
            className="ss-hero-tagline"
            animateBy="words"
            direction="bottom"
            delay={70}
            stepDuration={0.4}
          />
        </div>
        <div className="ss-hero-scroll">
          Discover
          <span />
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="ss-philosophy" id="about">
        <RevealSection variant="fadeUp">
          <h2>Regenerative Luxury</h2>
          <div className="ss-leaf" />
          <p>
            Song Saa Collective is a pioneering force in regenerative tourism,
            weaving together luxury hospitality, environmental conservation, and
            community empowerment. Our vision is simple yet transformative: to prove
            that business can be a force for healing — restoring marine habitats,
            preserving ancient cultures, and nurturing human wellbeing.
          </p>
          <div className="ss-cert">
            <span>B-Corp Certified</span>
            <span>Regenerative Travel</span>
            <span>Virtuoso Member</span>
          </div>
        </RevealSection>
      </section>

      {/* PROPERTIES */}
      <section className="ss-properties" id="properties">
        <RevealSection variant="fadeUp"><h2>Our World</h2></RevealSection>
        <div className="ss-prop-grid">
          {IMG.properties.map((p, i) => (
            <RevealSection key={i} delay={i * 0.15} variant="fadeUp">
              <div className="ss-prop-card">
                <GlareHover glareColor="#798D77" glareOpacity={0.2} glareSize={320} borderRadius={0}><img src={p.img} alt={p.name} /></GlareHover>
                <div className="ss-prop-card-body">
                  <h3>{p.name}</h3>
                  <p>{p.desc}</p>
                  <span className="ss-prop-link">Explore →</span>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* VILLAS */}
      <section className="ss-villas" id="villas">
        <RevealSection variant="fadeUp">
          <h2>Island Retreats</h2>
          <p className="ss-villas-sub">Each villa is a private sanctuary surrounded by pristine nature</p>
        </RevealSection>
        <div className="ss-villa-grid">
          {IMG.villas.map((v, i) => (
            <RevealSection key={i} delay={i * 0.1} variant="fadeUp">
              <div className="ss-villa-card">
                <GlareHover glareColor="#b09a6f" glareOpacity={0.22} glareSize={300} borderRadius={0}><img src={v.img} alt={v.name} /></GlareHover>
                <div className="ss-villa-ov">
                  <h4>{v.name}</h4>
                  <span>{v.detail}</span>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* WELLNESS */}
      <section className="ss-wellness" id="wellness">
        <div className="ss-wellness-img">
          <img src={IMG.wellness} alt="Wellness" />
        </div>
        <RevealSection variant="fadeUp">
          <div className="ss-wellness-text">
            <h2>Saraan Wellbeing</h2>
            <p>
              Our holistic wellness philosophy draws from Cambodia's ancient healing
              traditions, blending them with contemporary practices. From sound
              healing ceremonies to forest bathing, every experience is designed
              to reconnect you with nature and yourself.
            </p>
            <span className="ss-wellness-link">Discover Wellbeing →</span>
          </div>
        </RevealSection>
      </section>

      {/* SUSTAINABILITY */}
      <section className="ss-sustain" id="sustain">
        <RevealSection variant="scale">
          <h2>Our Impact</h2>
          <p>
            Through the Song Saa Foundation, we've established Cambodia's first
            marine protected area, planted tens of thousands of mangroves, and
            provided education and healthcare to island communities. Every stay
            directly funds conservation and community programs.
          </p>
          <div className="ss-sustain-stats">
            <div className="ss-stat">
              <div className="ss-stat-num">400+</div>
              <div className="ss-stat-label">Hectares Protected</div>
            </div>
            <div className="ss-stat">
              <div className="ss-stat-num">50K+</div>
              <div className="ss-stat-label">Mangroves Planted</div>
            </div>
            <div className="ss-stat">
              <div className="ss-stat-num">2,000+</div>
              <div className="ss-stat-label">Community Members</div>
            </div>
            <div className="ss-stat">
              <div className="ss-stat-num">1st</div>
              <div className="ss-stat-label">Marine Reserve in Cambodia</div>
            </div>
          </div>
        </RevealSection>
      </section>

      {/* AWARDS */}
      <section className="ss-awards">
        <img src={IMG.awards} alt="Awards" />
        <RevealSection variant="fadeUp">
          <div className="ss-awards-ov">
            <h2>Recognition</h2>
            <div className="ss-awards-list">
              <span>Condé Nast Traveler — Gold List 2024</span>
              <span>Travel + Leisure — World's Best Awards</span>
              <span>Pure Life Experiences — Member</span>
              <span>B-Corp Certified — 2023</span>
              <span>Condé Nast Traveler Awards 2025</span>
            </div>
          </div>
        </RevealSection>
      </section>

      {/* NEWSLETTER */}
      <section className="ss-newsletter">
        <RevealSection variant="fadeUp">
          <h2>Stay Connected</h2>
          <p>Receive stories of conservation, travel inspiration, and exclusive offers.</p>
          <div className="ss-nl-form">
            <input type="email" placeholder="Your email address" />
            <button>Subscribe</button>
          </div>
        </RevealSection>
      </section>

      {/* FOOTER */}
      <footer className="ss-footer">
        <div className="ss-footer-logo">Song Saa Collective</div>
        <div className="ss-footer-addr">
          Koh Rong Archipelago<br />
          Sihanoukville, Cambodia<br />
          info@songsaa.com
        </div>
        <div className="ss-footer-social">
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">LinkedIn</a>
        </div>
        <div className="ss-footer-links">
          <a href="#properties">Properties</a>
          <a href="#villas">Villas</a>
          <a href="#wellness">Wellbeing</a>
          <a href="#sustain">Sustainability</a>
          <a href="#">Foundation</a>
          <a href="#">Careers</a>
          <a href="#">Privacy</a>
        </div>
        <div className="ss-footer-copy">© 2026 Song Saa Collective — Demo Concept Only</div>
      </footer>

      <ScrollTop bg="var(--ss-sage)" color="#fff" hoverBg="var(--ss-dark-sage)" hoverColor="#fff" />
    </>
  )
}
