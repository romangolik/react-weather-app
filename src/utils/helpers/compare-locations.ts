import { IWeather } from "@services/weather/types/weather.interface";
import { ILocation } from "@services/geocoding/types/location.interface";

export function compareLocations(
  firstLocation: ILocation | IWeather,
  secondLocation: ILocation | IWeather
): boolean {
  if (!firstLocation || !secondLocation) return false;

  return (
    firstLocation.lat === secondLocation.lat &&
    firstLocation.lon === secondLocation.lon
  );
}