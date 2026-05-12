import { useMemo, useState } from "react";

const ALL = "All";

/**
 * Generic category filter: state + memoized filtered list. The category
 * comparison is case-insensitive against `item[catKey]`. The sentinel
 * "All" returns the full list.
 */
export function useCategoryFilter<T, K extends keyof T>(
  items: readonly T[],
  catKey: K,
  initial: string = ALL,
) {
  const [cat, setCat] = useState(initial);

  const filtered = useMemo(() => {
    if (cat === ALL) return items as T[];
    const needle = cat.toLowerCase();
    return items.filter(
      (item) => String(item[catKey]).toLowerCase() === needle,
    );
  }, [items, catKey, cat]);

  return { cat, setCat, filtered };
}
