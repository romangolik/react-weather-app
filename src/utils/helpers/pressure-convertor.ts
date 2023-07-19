import { numberToFixed } from "./number-to-fixed";

import { PressureEnum } from "@utils/enums/pressure";

export function pressureConvertor(
  value: number,
  pressureScale: PressureEnum = PressureEnum.HPA
): number {
  if (pressureScale === PressureEnum.INCHES) {
    return numberToFixed(value * 0.02952998057228486, 2);
  }

  if (pressureScale === PressureEnum.KPA) {
    return numberToFixed(value * 0.1, 1);
  }

  if (pressureScale === PressureEnum.MM) {
    return numberToFixed(value * 0.75006375541921, 2);
  }

  return value;
}
