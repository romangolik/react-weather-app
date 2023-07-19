import axios from "axios";

import { weatherService } from "@services/weather/weather.service";

import { IWeather } from "@services/weather/types/weather.interface";
import { ILocation } from "@services/geocoding/types/location.interface";

export class CitiesFacade {
  static async getWeatherByLocation(location: ILocation): Promise<IWeather> {
    const { lat, lon } = location;
    return await weatherService.getFullWeatherData({ lat, lon });
  }

  static async getCitiesWeather(history: ILocation[]): Promise<IWeather[]> {
    if (history.length === 0) {
      return [];
    }
  
    const requests = history.map((location) => CitiesFacade.getWeatherByLocation(location));
    return await axios.all(requests);
  }
}