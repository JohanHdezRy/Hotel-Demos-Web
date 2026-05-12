import { cn } from "../../../lib/utils";

interface BtnProps {
  href?: string;
  variant: "outline" | "dark" | "burgundy";
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Btn({ href, variant, children, onClick }: BtnProps) {
  const base =
    "inline-block px-9 py-3 text-[.78rem] tracking-[2px] uppercase font-semibold rounded-[2px] cursor-pointer transition-all duration-300 text-center";
  const variants: Record<BtnProps["variant"], string> = {
    outline:
      "border-[1.5px] border-white/50 text-white bg-transparent hover:bg-white hover:text-[#1C1C1C]",
    dark: "border-[1.5px] border-[#1C1C1C] text-[#1C1C1C] bg-transparent hover:bg-[#1C1C1C] hover:text-white",
    burgundy:
      "border-none bg-[#A90023] text-white px-10 py-3.5 rounded-[24px] hover:bg-[#7d001a]",
  };
  // Anchors are for navigation; buttons are for in-page actions. Falling back
  // to <button> when href is omitted keeps non-navigating CTAs accessible
  // (focusable + Enter/Space) without dead "#" anchors.
  return href ? (
    <a href={href} className={cn(base, variants[variant])}>
      {children}
    </a>
  ) : (
    <button
      type="button"
      onClick={onClick}
      className={cn(base, variants[variant])}
    >
      {children}
    </button>
  );
}
