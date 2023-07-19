import { numberToFixed } from "../../../../utils/number-to-fixed";

import { ITemperatureResponse } from "../response/temperature";

export class TemperatureDto {
  day: number;
  min: number;
  max: number;
  night: number;
  eve: number;
  morn: number;

  constructor(data: ITemperatureResponse) {
    this.day = numberToFixed(data.day);
    this.min = numberToFixed(data.min);
    this.max = numberToFixed(data.max);
    this.night = numberToFixed(data.night);
    this.eve = numberToFixed(data.eve);
    this.morn = numberToFixed(data.morn);
  }
}