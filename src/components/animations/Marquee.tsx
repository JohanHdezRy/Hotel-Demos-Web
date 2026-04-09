interface MarqueeProps {
  items?: string[]
  speed?: number
  separator?: string
  className?: string
}

const DEFAULT_ITEMS = [
  'BELLA GRACE',
  'LA RÉSERVE',
  'MICON STREET',
  'EL FENN',
  'SONG SAA',
  "BADRUTT'S PALACE",
  'ONE&ONLY CAPE TOWN',
]

export default function Marquee({
  items = DEFAULT_ITEMS,
  speed = 35,
  separator = '✦',
  className = '',
}: MarqueeProps) {
  const doubled = [...items, ...items]

  return (
    <div className={`overflow-hidden bg-[#111] border-y border-white/[0.06] py-[13px] ${className}`}>
      <div
        className="flex whitespace-nowrap"
        style={{ animation: `marquee ${speed}s linear infinite` }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-8 px-4 text-[0.58rem] tracking-[5px] text-[#4a4a4a] uppercase"
          >
            {item}
            <span className="text-gold text-[0.45rem]">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
