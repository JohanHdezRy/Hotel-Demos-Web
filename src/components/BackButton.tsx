import { Link } from 'react-router-dom'

export function BackButton() {
  return (
    <Link
      to="/"
      className="fixed top-4 left-4 z-[9999] bg-black/65 text-white text-[.72rem] tracking-[1px] px-3.5 py-[7px] rounded-[3px] backdrop-blur-md hover:bg-black/80 transition-colors duration-200"
    >
      ← Demos
    </Link>
  )
}
