import thunk from "redux-thunk";
import {createStore, applyMiddleware } from "redux";

import reducer from "./reducers";

const createStoreWithMiddleware = applyMiddleware(
  thunk,
)(createStore);

const store = createStoreWithMiddleware(reducer);

export default store;
