import express from "express";
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";

import config from "./webpack.config.babel.js";

const app = express();
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,

  stats: {
    colors: true,
  },
}));

app.use(webpackHotMiddleware(compiler));

const PORT = 3000;

app.listen(PORT, "localhost", err => {
  if (err) {
    console.log(err); // eslint-disable-line no-console
    return;
  }

  console.log(`Listening at http://localhost:${PORT}`); // eslint-disable-line no-console
});
