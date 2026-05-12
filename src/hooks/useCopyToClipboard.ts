import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Copy a string to the clipboard and expose the most recently copied value
 * for `resetMs` milliseconds so consumers can render "Copied!" feedback.
 */
export function useCopyToClipboard(resetMs = 2000) {
  const [copied, setCopied] = useState<string | null>(null);
  const timerRef = useRef<number | null>(null);

  const copy = useCallback(
    (value: string) => {
      navigator.clipboard?.writeText(value).catch(() => { });
      setCopied(value);
      if (timerRef.current) window.clearTimeout(timerRef.current);
      timerRef.current = window.setTimeout(() => setCopied(null), resetMs);
    },
    [resetMs],
  );

  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, []);

  return { copied, copy };
}
