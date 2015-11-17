import {SELECT_REPORTER} from "../actions/report";

export default function selectedReporter(state = null, action)  {
  switch (action.type) {
  case SELECT_REPORTER:
    return action.payload.reporter;
  default:
    return state;
  }
}
