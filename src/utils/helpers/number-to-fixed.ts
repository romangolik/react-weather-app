export function numberToFixed(value: number, fractionDigits: number = 0): number {
  return +value.toFixed(fractionDigits);
}