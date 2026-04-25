interface BtnProps {
  href: string;
  variant: "outline" | "dark" | "burgundy";
  children: React.ReactNode;
}

export default function Btn({ href, variant, children }: BtnProps) {
  const base =
    "inline-block px-9 py-3 text-[.78rem] tracking-[2px] uppercase font-semibold rounded-[2px] cursor-pointer transition-all duration-300 text-center";
  const variants: Record<BtnProps["variant"], string> = {
    outline:
      "border-[1.5px] border-white/50 text-white bg-transparent hover:bg-white hover:text-[#1C1C1C]",
    dark: "border-[1.5px] border-[#1C1C1C] text-[#1C1C1C] bg-transparent hover:bg-[#1C1C1C] hover:text-white",
    burgundy:
      "border-none bg-[#A90023] text-white px-10 py-3.5 rounded-[24px] hover:bg-[#7d001a]",
  };
  return (
    <a href={href} className={`${base} ${variants[variant]}`}>
      {children}
    </a>
  );
}
