import {inspect} from "util";

import {LOG_MESSAGE} from "../actions/logger";

export default function logging(state = {messages: []}, action) {
  switch (action.type) {
  case LOG_MESSAGE:
    return {messages: [...state.messages, action.payload.message]};
  default:
    const formattedPayload = inspect(action.payload, {colors: true});
    const message = `${action.type}: ${formattedPayload}`;
    return {messages: [...state.messages, message]};
    // return state;
  }
}
