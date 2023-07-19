import { numberToFixed } from "./number-to-fixed";

import { DistanceEnum } from "@utils/enums/distance";

export function distanceConvertor(
  value: number,
  distanceScale: DistanceEnum = DistanceEnum.KILOMETERS
): number {
  if (distanceScale === DistanceEnum.INCHES) {
    return numberToFixed(value * 39370.07874, 2);
  }

  return value;
}
