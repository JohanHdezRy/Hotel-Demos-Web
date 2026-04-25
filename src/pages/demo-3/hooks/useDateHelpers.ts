export const MONTHS_FULL = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const DAYS_SHORT = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

export const TODAY = (() => {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
})();

export function addDays(d: Date, n: number): Date {
  const r = new Date(d);
  r.setDate(r.getDate() + n);
  return r;
}

export function fmtDate(d: Date): string {
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function fmtWeekday(d: Date): string {
  return d.toLocaleDateString("en-US", { weekday: "long" });
}

export function nightsCount(a: Date, b: Date): number {
  return Math.max(1, Math.round((b.getTime() - a.getTime()) / 86400000));
}
