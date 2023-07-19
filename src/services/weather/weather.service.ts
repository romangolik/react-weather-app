import { HttpClient, httpClient } from "../http/http-client";
import { GeocodingService, geocodingService } from "@services/geocoding/geocoding.service";

import { IWeather } from "./types/weather.interface";

interface GetWeatherDataParams {
  lat: number;
  lon: number;
}

class WeatherService {
  constructor(
    private httClient: HttpClient,
    private geocodingService: GeocodingService
  ) {}

  async getFullWeatherData({ lat, lon }: GetWeatherDataParams): Promise<IWeather> {
    const weatherResponse = await this.httClient.get<IWeather>("/api/weather", {
      lat,
      lon
    });

    const geocodingResponse = await this.geocodingService.getLocationByCoordinates({ lat, lon });

    return {
      ...weatherResponse,
      daily: weatherResponse.daily.slice(0, 7),
      name: geocodingResponse.name,
      lat, 
      lon
    };
  }

  /* async getWeekForecast({ lat, lon }: GetForecastParams): Promise<IWeather> {
    const response = await this.httClient.get<IWeather>("/api/get-weather", {
      lat,
      lon,
      exclude: "hourly"
    });
    return {
      ...response,
      daily: response.daily.slice(0, 7)
    };
  }

  async getHourlyForecast({ lat, lon }: GetForecastParams): Promise<IWeather> {
    const response = await this.httClient.get<IWeather>("/api/get-weather", {
      lat,
      lon,
      exclude: "daily"
    });
    return response;
  } */
}

export const weatherService = new WeatherService(httpClient, geocodingService);