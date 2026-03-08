import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView'
import imagendemo1 from '../styles/img/demo-1/hotel.jpg'
import imagendemo2 from '../styles/img/demo-2/hotel4.jpg'
import imagendemo3 from '../styles/img/demo-3/hotel3.jpg'
import imagendemo4 from '../styles/img/demo-4/hotel.jpg'
import imagendemo5 from '../styles/img/demo-5/hotel.jpg'
import imagendemo6 from '../styles/img/demo-8/hotel.jpg'
import imagendemo7 from '../styles/img/demo-11/hotel.jpg'


const hotels = [
  {
    path: '/demo-1',
    name: 'Bella Grace Charleston',
    loc: 'Charleston, SC · USA',
    style: 'Elegancia Sureña',
    colors: ['#A90023', '#D2AA00', '#FAF7F2'],
    img: imagendemo1,
    inspired: 'Marriott Bella Grace',
    demo: '01',
  },
  {
    path: '/demo-2',
    name: 'La Réserve Paris',
    loc: 'París, Francia',
    style: 'Apartamentos de lujo',
    colors: ['#1C1C1A', '#C8AF8C', '#F7F5EF'],
    img: imagendemo2,
    inspired: 'La Réserve Paris',
    demo: '02',
  },
  {
    path: '/demo-3',
    name: 'Micon Street Hotel',
    loc: 'Atenas, Grecia',
    style: 'Boutique urbano',
    colors: ['#222222', '#888888', '#FFFFFF'],
    img: imagendemo3,
    inspired: 'Micon Street Hotel Athens',
    demo: '03',
  },
  {
    path: '/demo-4',
    name: 'El Fenn Marrakech',
    loc: 'Marrakech, Marruecos',
    style: 'Riad de lujo',
    colors: ['#c2956b', '#d1647a', '#2a7e73'],
    img: imagendemo4,
    inspired: 'El Fenn',
    demo: '04',
  },
  {
    path: '/demo-5',
    name: 'Song Saa Private Island',
    loc: 'Koh Rong, Camboya',
    style: 'Island retreat',
    colors: ['#798D77', '#b09a6f', '#fdfdf7'],
    img: imagendemo5,
    inspired: 'Song Saa Private Island',
    demo: '05',
  },
  {
    path: '/demo-8',
    name: "Badrutt's Palace",
    loc: 'St. Moritz, Suiza',
    style: 'Palacio alpino',
    colors: ['#1a2744', '#c9a96e', '#f8f6f2'],
    img: imagendemo6,
    inspired: "Badrutt's Palace Hotel",
    demo: '06',
  },
  {
    path: '/demo-11',
    name: 'One&Only Cape Town',
    loc: 'Ciudad del Cabo, Sudáfrica',
    style: 'Lujo contemporáneo',
    colors: ['#1a5c5c', '#c4a265', '#f7f5f0'],
    img: imagendemo7,
    inspired: 'One&Only Cape Town',
    demo: '07',
  },
]

function Card({ hotel, index }: { hotel: typeof hotels[0]; index: number }) {
  const [ref, vis] = useInView(0.1)
  return (
    <div
      ref={ref}
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? 'translateY(0)' : 'translateY(40px)',
        transition: `all .6s ease ${index * 0.06}s`,
      }}
    >
      <Link
        to={hotel.path}
        style={{
          display: 'block',
          background: '#1a1a1a',
          overflow: 'hidden',
          borderRadius: 8,
          transition: 'transform .4s, box-shadow .4s',
          textDecoration: 'none',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-8px)'
          e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,.4)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = ''
          e.currentTarget.style.boxShadow = ''
        }}
      >
        {/* Demo badge */}
        <div style={{
          position: 'relative',
          height: 240,
          overflow: 'hidden',
        }}>
          <img
            src={hotel.img}
            alt={hotel.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .6s' }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.08)')}
            onMouseLeave={e => (e.currentTarget.style.transform = '')}
          />
          <div style={{
            position: 'absolute',
            top: 12,
            right: 12,
            background: 'rgba(0,0,0,.55)',
            color: '#C19D68',
            fontSize: '.6rem',
            letterSpacing: 2,
            padding: '4px 10px',
            borderRadius: 3,
            backdropFilter: 'blur(4px)',
          }}>
            DEMO {hotel.demo}
          </div>
        </div>

        {/* Card body */}
        <div style={{ padding: '24px 24px 28px' }}>
          <div style={{ fontSize: '.6rem', letterSpacing: 3, textTransform: 'uppercase', color: '#C19D68', marginBottom: 6 }}>
            {hotel.loc}
          </div>
          <h3 style={{
            fontFamily: "'Cormorant Garamond',Georgia,serif",
            fontSize: '1.5rem',
            fontWeight: 300,
            color: '#fff',
            marginBottom: 8,
          }}>
            {hotel.name}
          </h3>
          <p style={{ fontSize: '.8rem', color: '#888', marginBottom: 14 }}>{hotel.style}</p>
          <div style={{ display: 'flex', gap: 6, marginBottom: 12 }}>
            {hotel.colors.map((c, i) => (
              <div
                key={i}
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: '50%',
                  background: c,
                  border: '1px solid rgba(255,255,255,.15)',
                }}
              />
            ))}
          </div>
          <div style={{ fontSize: '.65rem', color: '#666', letterSpacing: 1 }}>
            Inspirado en: {hotel.inspired}
          </div>
        </div>
      </Link>
    </div>
  )
}

export function Landing() {
  return (
    <div style={{ background: '#111', minHeight: '100vh' }}>
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=Raleway:wght@300;400;600&display=swap"
        rel="stylesheet"
      />

      {/* Hero */}
      <header style={{
        padding: '120px 60px 80px',
        textAlign: 'center',
        background: 'linear-gradient(180deg,#0a0a0a 0%,#111 100%)',
      }}>
        <div style={{ fontSize: '.7rem', letterSpacing: 6, textTransform: 'uppercase', color: '#C19D68', marginBottom: 16 }}>
          Portfolio de Demos
        </div>
        <h1 style={{
          fontFamily: "'Cormorant Garamond',Georgia,serif",
          fontSize: '3.8rem',
          fontWeight: 300,
          color: '#fff',
          lineHeight: 1.1,
          marginBottom: 20,
        }}>
          Hotel Demo<br />Collection
        </h1>
        <div style={{ width: 60, height: 2, background: '#C19D68', margin: '0 auto 20px' }} />
        <p style={{ color: '#888', fontSize: '.95rem', maxWidth: 600, margin: '0 auto', lineHeight: 1.8 }}>
          Demos de páginas web para hoteles de lujo, construidos con React + TypeScript.
          Cada demo está inspirado en hoteles reales y adaptado para promoción.
        </p>
        <p style={{ color: '#555', fontSize: '.8rem', marginTop: 12 }}>
          {hotels.length} demos disponibles
        </p>
      </header>

      {/* Grid */}
      <section style={{ padding: '40px 60px 100px', maxWidth: 1400, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: 30,
        }}>
          {hotels.map((h, i) => (
            <Card key={h.path} hotel={h} index={i} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        textAlign: 'center',
        padding: '40px 60px',
        borderTop: '1px solid rgba(255,255,255,.06)',
        color: '#555',
        fontSize: '.75rem',
      }}>
        <p>React + TypeScript + Vite — {hotels.length} Demos para promoción hotelera</p>
      </footer>
    </div>
  )
}
