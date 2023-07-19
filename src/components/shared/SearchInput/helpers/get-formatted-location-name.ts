import { ILocation } from "@services/geocoding/types/location.interface";

export function getFormattedLocationName(data: ILocation): string {
  if (data.state) {
    return `${data.name}, ${data.state}, ${data.country}`;
  }

  return `${data.name}, ${data.country}`;
}