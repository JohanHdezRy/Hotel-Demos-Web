import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Landing } from './pages/Landing'

const BellaGrace       = lazy(() => import('./pages/demo-1/BellaGrace').then(m => ({ default: m.BellaGrace })))
const RoomReservation  = lazy(() => import('./pages/demo-1/RoomReservation').then(m => ({ default: m.RoomReservation })))
const LaReserve      = lazy(() => import('./pages/demo-2/LaReserve').then(m => ({ default: m.LaReserve })))
const MiconStreet    = lazy(() => import('./pages/demo-3/MiconStreet').then(m => ({ default: m.MiconStreet })))
const ElFenn         = lazy(() => import('./pages/demo-4/ElFenn').then(m => ({ default: m.ElFenn })))
const SongSaa        = lazy(() => import('./pages/demo-5/SongSaa').then(m => ({ default: m.SongSaa })))
const BadruttsPalace = lazy(() => import('./pages/demo-8/BadruttsPalace').then(m => ({ default: m.BadruttsPalace })))
const OneOnlyCT      = lazy(() => import('./pages/demo-11/OneOnlyCT').then(m => ({ default: m.OneOnlyCT })))

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#111]">
      <span className="text-white/30 text-sm tracking-[4px] uppercase animate-pulse">Loading…</span>
    </div>
  )
}

export default function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/"        element={<Landing />} />
        <Route path="/demo-1"           element={<BellaGrace />} />
        <Route path="/demo-1/reserve"  element={<RoomReservation />} />
        <Route path="/demo-2"  element={<LaReserve />} />
        <Route path="/demo-3"  element={<MiconStreet />} />
        <Route path="/demo-4"  element={<ElFenn />} />
        <Route path="/demo-5"  element={<SongSaa />} />
        <Route path="/demo-8"  element={<BadruttsPalace />} />
        <Route path="/demo-11" element={<OneOnlyCT />} />
      </Routes>
    </Suspense>
  )
}
