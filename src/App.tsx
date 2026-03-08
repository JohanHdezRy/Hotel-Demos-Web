import { Routes, Route } from 'react-router-dom'
import { Landing } from './pages/Landing'

// Demo pages
import { BellaGrace }     from './pages/demo-1/BellaGrace'
import { LaReserve }      from './pages/demo-2/LaReserve'
import { MiconStreet }    from './pages/demo-3/MiconStreet'
import { ElFenn }         from './pages/demo-4/ElFenn'
import { SongSaa }        from './pages/demo-5/SongSaa'
import { BadruttsPalace } from './pages/demo-8/BadruttsPalace'
import { OneOnlyCT }      from './pages/demo-11/OneOnlyCT'

export default function App() {
  return (
    <Routes>
      <Route path="/"        element={<Landing />} />
      <Route path="/demo-1"  element={<BellaGrace />} />
      <Route path="/demo-2"  element={<LaReserve />} />
      <Route path="/demo-3"  element={<MiconStreet />} />
      <Route path="/demo-4"  element={<ElFenn />} />
      <Route path="/demo-5"  element={<SongSaa />} />
      <Route path="/demo-8"  element={<BadruttsPalace />} />
      <Route path="/demo-11" element={<OneOnlyCT />} />
    </Routes>
  )
}
