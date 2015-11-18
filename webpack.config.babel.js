import path from "path";
import webpack from "webpack";

let entry;
let plugins;

entry = "./index.js";

plugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  // new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),


  new webpack.BannerPlugin('require("source-map-support").install();', { raw: true, entryOnly: false }),
  new webpack.BannerPlugin('require("babel-polyfill");', { raw: true, entryOnly: true }),
  new webpack.BannerPlugin("#!/usr/bin/env node\n", { raw: true, entryOnly: true }),  
];

module.exports = {
  devtool: "source-map",

  target: "node",

  context: path.join(__dirname, "src"),

  entry,

  output: {
    libraryTarget: "commonjs",
    path: path.join(__dirname, "lib"),
    filename: "index.js",
  },

  module: {
    loaders: [
      { test: /\.js$/, include: path.join(__dirname, "src"), loaders: ["babel"] },
    ],
  },

  externals: [/^[a-z\-0-9]+$/],

  plugins,
};
