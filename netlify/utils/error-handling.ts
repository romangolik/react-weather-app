import type { HandlerResponse } from "@netlify/functions";

function jsonErrorReplacer(key, value) {
  if (value instanceof Error) {
    return {
      ...value,
      name: value.name,
      message: value.message,
    }
  }

  return value;
}

export function errorHandling(error: any): HandlerResponse {
  if (error instanceof TypeError) {
    return {
      statusCode: 400,
      body: JSON.stringify(error, jsonErrorReplacer),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    };
  }
  return {
    statusCode: 500,
    body: JSON.stringify(error),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  };
}