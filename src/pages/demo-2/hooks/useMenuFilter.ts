import { useMemo, useState } from "react";
import type { MenuItem } from "../data/freshboxMenuData";

const ALL = "all";

/**
 * FreshBox menu filter: category state + hover index + memoized list.
 * The "all" sentinel returns the full list; other values match `item.cat`.
 */
export function useMenuFilter(items: readonly MenuItem[], initial: string = ALL) {
  const [active, setActive] = useState(initial);
  const [hovered, setHovered] = useState<number | null>(null);

  const filtered = useMemo(
    () => (active === ALL ? items : items.filter((m) => m.cat === active)),
    [items, active],
  );

  return { active, setActive, hovered, setHovered, filtered };
}
