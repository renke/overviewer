import "file?name=index.html!./index.html";

import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

ReactDOM.render(<App/>, document.getElementById("container"));
