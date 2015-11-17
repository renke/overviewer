import {LOAD_REPORTERS} from "../actions/config";

export default function reporters(state = [], action) {
  switch(action.type) {
  case LOAD_REPORTERS:
    return [...action.payload.reporters];

  default:
    return state;
  }
}
