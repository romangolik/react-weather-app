import { TimeFormatsEnum } from "@utils/enums/time-formats";

function toFixedDigit(value: number, countOfDigit: number = 2): string {
  const digitsFormat = "0".repeat(countOfDigit);
  const stringValue = value.toString();

  return digitsFormat.slice(stringValue.length) + stringValue;
}

export function dateConvertor(
  value: string | number,
  timezone: string,
  dateFormat: TimeFormatsEnum = TimeFormatsEnum.H24
): string {
  /* const timezone = localStorage.getItem("timezone") || 'Europe/London';
  const date = new Date(new Date(value).toLocaleString("en-US", {timeZone: timezone})); */

  return new Date(value).toLocaleString("en-US", {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: timezone,
    hour12: dateFormat === TimeFormatsEnum.H12
  });
  /* const date = new Date(value)
  let hours = date.getHours();
  let minutes = date.getMinutes();

  if (dateFormat === TimeFormatsEnum.H12) {
    const ampm = hours >= 12 ? "pm" : "am";
    hours %= 12;

    return `${toFixedDigit(hours)}:${toFixedDigit(minutes)} ${ampm}`;
  }

  return `${toFixedDigit(hours)}:${toFixedDigit(minutes)}`; */
}
