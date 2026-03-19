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
        className="group block bg-[#1a1a1a] overflow-hidden rounded-lg transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,.4)]"
      >
        {/* Image */}
        <div className="relative h-[240px] overflow-hidden">
          <img
            src={hotel.img}
            alt={hotel.name}
            className="w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-[1.08]"
          />
          <div className="absolute top-3 right-3 bg-black/55 text-gold text-[0.6rem] tracking-[2px] uppercase px-[10px] py-1 rounded-[3px] backdrop-blur-sm">
            DEMO {hotel.demo}
          </div>
        </div>

        {/* Body */}
        <div className="px-6 pt-6 pb-7">
          <p className="text-[0.6rem] tracking-[3px] uppercase text-gold mb-1.5">
            {hotel.loc}
          </p>
          <h3 className="font-[var(--font-serif)] text-2xl font-light text-white mb-2 leading-tight">
            {hotel.name}
          </h3>
          <p className="text-[0.8rem] text-[#888] mb-3.5">{hotel.style}</p>
          <div className="flex gap-1.5 mb-3">
            {hotel.colors.map((c, i) => (
              <div
                key={i}
                className="w-5 h-5 rounded-full border border-white/15"
                style={{ background: c }}
              />
            ))}
          </div>
          <p className="text-[0.65rem] text-[#666] tracking-[1px]">
            Inspirado en: {hotel.inspired}
          </p>
        </div>
      </Link>
    </div>
  )
}

export function Landing() {
  return (
    <div className="bg-[#111] min-h-screen">

      {/* Hero */}
      <header className="px-6 pt-24 pb-16 text-center bg-gradient-to-b from-[#0a0a0a] to-[#111] md:px-15 md:pt-[120px] md:pb-20">
        <p className="text-[0.7rem] tracking-[6px] uppercase text-gold mb-4">
          Portfolio de Demos
        </p>
        <h1 className="font-[var(--font-serif)] text-[clamp(2.4rem,6vw,3.8rem)] font-light text-white leading-[1.1] mb-5">
          Hotel Demo<br />Collection
        </h1>
        <div className="w-[60px] h-0.5 bg-gold mx-auto mb-5" />
        <p className="text-[#888] text-[0.95rem] max-w-xl mx-auto leading-[1.8]">
          Demos de páginas web para hoteles de lujo, construidos con React + TypeScript.
          Cada demo está inspirado en hoteles reales y adaptado para promoción.
        </p>
        <p className="text-[#555] text-[0.8rem] mt-3">
          {hotels.length} demos disponibles
        </p>
      </header>

      {/* Grid */}
      <section className="px-6 pt-10 pb-24 max-w-[1400px] mx-auto md:px-15">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7">
          {hotels.map((h, i) => (
            <Card key={h.path} hotel={h} index={i} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center px-6 py-10 border-t border-white/[0.06] text-[#555] text-[0.75rem]">
        <p>React + TypeScript + Vite · Tailwind CSS — {hotels.length} Demos para promoción hotelera</p>
      </footer>
    </div>
  )
}
