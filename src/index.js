import "file?name=index.html!./index.html";

import React from "react";
import {render} from "react-blessed";
import {Provider} from "react-redux";

import createScreen from "./createScreen";
import store from "./store";
import App from "./components/App";
import {start} from "./actions/app";

store.dispatch(start()).then(() => {
  const screen = createScreen();

  const root = <Provider store={store}>
    <App screen={screen}/>
  </Provider>;

  render(root, screen);
}).catch(err => {
  console.error(err.message);
  process.exit(1);
});
