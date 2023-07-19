import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types/config";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  const { port } = options;

  return {
    port,
    hot: true,
    open: true,
    historyApiFallback: true,
    proxy: [
      {
        path: "/api",
        target: "http://localhost:8888/api/",
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
      /* {
        path: "/ipinfo",
        target: "https://ipinfo.io",
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          "^/ipinfo": "",
        },
      },
      {
        path: "/api",
        target: "http://api.openweathermap.org/geo/1.0",
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
      {
        path: "/api1",
        target: "/.netlify/functions/ip-info",
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          "^/api1": "",
        },
      }, */
    ],
  };
}
