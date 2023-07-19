import axios from "axios";

import { errorHandling } from "../../utils/error-handling";

import type { Handler } from "@netlify/functions";

const API_KEY = process.env.REACT_APP_IP_INFO_API_KEY;
const url = `https://ipinfo.io`;

export const handler: Handler = async () => {
  try {
    const { data } = await axios.get(url, {
      params: {
        token: API_KEY
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