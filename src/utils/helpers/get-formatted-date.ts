export function getFormattedDate(): string {
  const today = new Date(Date.now());

  const month = today.toLocaleDateString("en", { month: "long" });
  const dayName = today.toLocaleDateString("en", { weekday: "long" });
  return `${dayName} | ${today.getDate()} ${month} ${today.getFullYear()}`;
}