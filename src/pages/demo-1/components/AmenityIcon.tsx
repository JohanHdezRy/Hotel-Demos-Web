interface AmenityIconProps {
  icon: string;
}

const ICONS: Record<string, React.ReactNode> = {
  wifi: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="w-7 h-7"
    >
      <path
        d="M1.5 8.5a15 15 0 0 1 21 0M5 12a11 11 0 0 1 14 0M8.5 15.5a7 7 0 0 1 7 0M12 19h.01"
        strokeLinecap="round"
      />
    </svg>
  ),
  pool: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="w-7 h-7"
    >
      <path
        d="M2 12c1.5 0 1.5-2 3-2s1.5 2 3 2 1.5-2 3-2 1.5 2 3 2 1.5-2 3-2 1.5 2 3 2M2 17c1.5 0 1.5-2 3-2s1.5 2 3 2 1.5-2 3-2 1.5 2 3 2 1.5-2 3-2 1.5 2 3 2M15 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
        strokeLinecap="round"
      />
    </svg>
  ),
  fitness: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="w-7 h-7"
    >
      <path
        d="M6 4v16M18 4v16M2 8h4M18 8h4M2 16h4M18 16h4M6 12h12"
        strokeLinecap="round"
      />
    </svg>
  ),
  breakfast: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="w-7 h-7"
    >
      <path
        d="M17 8h1a4 4 0 1 1 0 8h-1M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3"
        strokeLinecap="round"
      />
    </svg>
  ),
  view: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="w-7 h-7"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9" strokeLinecap="round" />
    </svg>
  ),
  bar: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="w-7 h-7"
    >
      <path
        d="M8 2l4 5 4-5M6 7h12l-2 13H8L6 7zM3 7h18"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  spa: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="w-7 h-7"
    >
      <path
        d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10c0-1-.2-2-.5-3"
        strokeLinecap="round"
      />
      <path d="M12 8c0 2.2-1.8 4-4 4s-4-1.8-4-4c0-2.2 1.8-4 4-4s4 1.8 4 4z" />
    </svg>
  ),
  butler: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="w-7 h-7"
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  wine: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="w-7 h-7"
    >
      <path
        d="M8 22h8M12 11v11M5 3h14l-2 8a5 5 0 0 1-10 0L5 3z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  wellness: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="w-7 h-7"
    >
      <path
        d="M12 22V12m0 0C12 7 7 4 2 6c0 5 4.5 9 10 6zm0 0c0-5 5-8 10-6-1 5-4.5 9-10 6z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

export default function AmenityIcon({ icon }: AmenityIconProps) {
  return <span className="text-[#A90023]">{ICONS[icon] ?? ICONS["wifi"]}</span>;
}
