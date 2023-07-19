import { numberToFixed } from "../../../../utils/number-to-fixed";

import { IFeelsLikeResponse } from "../response/feels-like";

export class FeelsLikeDto {
  day: number;
  night: number;
  eve: number;
  morn: number;

  constructor(data: IFeelsLikeResponse) {
    this.day = numberToFixed(data.day);
    this.night = numberToFixed(data.night);
    this.eve = numberToFixed(data.eve);
    this.morn = numberToFixed(data.morn);
  }
}