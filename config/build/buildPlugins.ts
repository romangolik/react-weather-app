import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

import { BuildOptions } from "./types/config";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";

import dotenv from "dotenv";

export function buildPlugins(
  options: BuildOptions
): webpack.WebpackPluginInstance[] {
  const { paths } = options;

  const environment = dotenv.config().parsed ?? {};
  const envKeys = Object.keys(environment).reduce((prev, next) => {
    //@ts-ignore
    prev[`process.env.${next}`] = JSON.stringify(environment[next]);
    return prev;
  }, {});

  const plugins = [
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: paths.htmlTemplate,
    }),
    new webpack.DefinePlugin(envKeys),
  ];

  if (options.isDev) {
    plugins.push(new webpack.HotModuleReplacementPlugin());
    plugins.push(new ReactRefreshWebpackPlugin());
    // plugins.push(new BundleAnalyzerPlugin({}));
  }

  return plugins;
}
