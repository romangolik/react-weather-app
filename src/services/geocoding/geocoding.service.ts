import { HttpClient, httpClient } from "../http/http-client";

import { ILocation } from "./types/location.interface";

interface ILocationCoordinates {
  lat: number;
  lon: number;
}

class GeocodingService {
  constructor(private httpClient: HttpClient) {}

  async getLocationByName(cityName: string): Promise<ILocation[]> {
    const response = await this.httpClient.getAll<ILocation>("/api/geocoding-direct", { cityName });
    return response;
  }

  async getLocationsByCoordinates({ lat, lon }: ILocationCoordinates): Promise<ILocation[]> {
    const response = await this.httpClient.getAll<ILocation>("/api/geocoding-reverse", { lat, lon });
    return response;
  }

  async getLocationByCoordinates(data: ILocationCoordinates): Promise<ILocation> {
    const response = await this.getLocationsByCoordinates(data);
    return response[0];
  }
}

export const geocodingService = new GeocodingService(httpClient);
export type { GeocodingService };