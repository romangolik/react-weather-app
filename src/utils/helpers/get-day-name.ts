export function getDayName(time: string): string {
  const date = new Date(time);
  const today = new Date();

  if (date.toDateString() === today.toDateString()) {
    return "Today";
  }

  return date.toLocaleDateString("en", { weekday: "short" });
}