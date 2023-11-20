import axios from "axios";
import { Redis } from "ioredis";

import { errorHandling } from "../../utils/error-handling";

import { WeatherDto } from "./types/dto/weather.dto";
import type { Handler, HandlerEvent, HandlerResponse as Response } from "@netlify/functions";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const url = "https://api.openweathermap.org/data/3.0/onecall";
const redis = new Redis(process.env.DB_CONNECTION_URL as string);

function getSecondsToNextHour(): number {
  const date = new Date();
  const nextHourDate = new Date();
  nextHourDate.setHours(date.getHours() + 1);
  nextHourDate.setMinutes(0);
  nextHourDate.setSeconds(0);
  nextHourDate.setMilliseconds(0);

  return Math.ceil((nextHourDate.getTime() - date.getTime()) / 1000);
}

export const handler: Handler = async (event: HandlerEvent) => {
  if (!event.queryStringParameters) {
    throw new Error("No parameters passed!");
  }

  let { lat, lon } = event.queryStringParameters;

  if (!lat) {
    throw new Error("No 'lat' params passed!");
  }

  if (!lon) {
    throw new Error("No 'lon' params passed!");
  }

  try {
    const KEY = `${lat},${lon}`;
    const cachedResult = await redis.get(KEY);

    if (cachedResult) {
      return {
        statusCode: 200,
        body: JSON.stringify(JSON.parse(cachedResult)),
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      };
    }

    const { data } = await axios.get(url, {
      params: {
        appid: API_KEY,
        lat,
        lon,
        exclude: "alerts,current,minutely",
        limit: 6,
        units: "metric"
      }
    });

    const weatherDto = new WeatherDto(data);

    redis.set(KEY, JSON.stringify(weatherDto), 'EX', getSecondsToNextHour());

    return {
      statusCode: 200,
      body: JSON.stringify(weatherDto),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    };
  } catch(error) {
    return errorHandling(error);
  }
};
