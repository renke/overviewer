import path from "path";
import webpack from "webpack";

let entry;
let plugins;

if (process.env.NODE_ENV === "production") {
  entry = "./index.js";

  plugins = [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),

    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
  ];
} else {
  entry = [
    "webpack-hot-middleware/client?reload=true&noInfo=true",
    "./index.js",
  ];

  plugins = [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ];
}

module.exports = {
  devtool: "inline-source-map",

  context: path.join(__dirname, "src"),

  entry,

  output: {
    path: path.join(__dirname, "lib"),
    filename: "index.js",
  },

  module: {
    loaders: [
      { test: /\.js$/, include: path.join(__dirname, "src"), loaders: ["babel"] },
    ],
  },

  plugins,
};
