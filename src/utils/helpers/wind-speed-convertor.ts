import { numberToFixed } from "./number-to-fixed";

import { WindSpeedEnum } from "@utils/enums/wind-speed";

export function windSpeedConvertor(
  value: number,
  speedScale: WindSpeedEnum = WindSpeedEnum.MS
): number {
  if (speedScale === WindSpeedEnum.KMH) {
    return numberToFixed(value * 3.6, 1);
  }

  if (speedScale === WindSpeedEnum.KNOTS) {
    return numberToFixed(value * 1.94384449244, 1);
  }

  return numberToFixed(value, 1);
}
