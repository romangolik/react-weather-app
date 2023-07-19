import axios from "axios";

import { errorHandling } from "../../utils/error-handling";

import type { Handler, HandlerEvent } from "@netlify/functions";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const url = "http://api.openweathermap.org/geo/1.0/reverse";

export const handler: Handler = async (event: HandlerEvent) => {
  if (!event.queryStringParameters) {
    throw new Error("No parameters passed!");
  }

  const { lat, lon } = event.queryStringParameters;

  if (!lat) {
    throw new Error("No 'lat' params passed!");
  }

  if (!lon) {
    throw new Error("No 'lon' params passed!");
  }

  try {
    const { data } = await axios.get(url, {
      params: {
        appid: API_KEY,
        lat,
        lon,
        limit: 6
      }
    });

    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    };
  } catch(error) {
    return errorHandling(error);
  }
};
