import { numberToFixed } from "./number-to-fixed";

import { TemperatureEnum } from "@utils/enums/temperature";

export function temperatureConvertor(
  value: number,
  tempFormat: TemperatureEnum = TemperatureEnum.CELSIUS
): number {
  if (tempFormat === TemperatureEnum.FAHRENHEIT) {
    return numberToFixed(value * 1.8 + 32);
  }

  return value;
}
