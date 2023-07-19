import { IWeatherHourly } from "@services/weather/types/weather-hourly.interface";

export function filterHourlyForecast(
  data: IWeatherHourly[] = [],
  step: number
): IWeatherHourly[] {
  return data.filter((_, index) => index % step === 0);
}
