import store from "../store";

export const LOG_MESSAGE = "LOG_MESSAGE";

// Make sure we can use this function from everywhere
export function log(...args) {
  return store.dispatch(logMessage(...args));
}

export function logMessage(...args) {
  const message = args.join(" ");

  return {
    type: LOG_MESSAGE,
    payload: {
      message,
    },
  };
}
