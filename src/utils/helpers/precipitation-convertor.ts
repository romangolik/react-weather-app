import { numberToFixed } from "./number-to-fixed";

import { PrecipitationEnum } from "@utils/enums/precipitation";

export function precipitationConvertor(
  value: number,
  precipitationScale: PrecipitationEnum = PrecipitationEnum.MILIMETERS
): number {
  if (precipitationScale === PrecipitationEnum.INCHES) {
    return numberToFixed(value * 0.0393700787, 2);
  }

  return value;
}
