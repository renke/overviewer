import reduceReducers from "reduce-reducers";
import {combineReducers} from "redux";

import logging from "./logging";
import navigation from "./navigation";
import reporters from "./reporters";
import reports from "./reports";
import selectedReporter from "./selectedReporter";

const combinedReducer = combineReducers({
  reporters,
  reports,
  selectedReporter,

  logging,
});

const reducer = reduceReducers(
  combinedReducer,

  navigation,
);

export default reducer;
