import {spawn} from "child_process";

import {log} from "./logger";

export const START_REPORTER = "START_REPORTER";
export const START_REPORTER_FAILURE = "START_REPORTER_FAILURE";
export const EXIT_REPORTER = "EXIT_REPORTER";
export const RECEIVE_REPORT_DATA = "RECEIVE_REPORT_DATA";

export function startReporter(reporter) {
  return dispatch => {
    log(`Starting reporter '${reporter.title}'`);

    dispatch({
      type: START_REPORTER,
      payload: {reporter},
    });

    const command = "/bin/sh";
    const args = ["-c", reporter.command];

    const child = spawn(command, args, {pwd: process.cwd(), stdio:[0]});

    child.on("error", error => {
      log(`Failed to start reporter '${reporter.title}'`);

      dispatch({
        type: START_REPORTER_FAILURE,
        payload: {
          reporter,
          error,
        },
      });
    });

    child.stdout.on("data", data => {
      log(`Received stdout data from reporter '${reporter.title}'`);

      dispatch({
        type: RECEIVE_REPORT_DATA,
        payload: {
          kind: "output",
          reporter,
          data: data.toString(),
        },
      });

    });

    child.stderr.on("data", data => {
      log(`Received stderr data from reporter '${reporter.title}'`);

      dispatch({
        type: RECEIVE_REPORT_DATA,
        payload: {
          kind: "error",
          reporter,
          data: data.toString(),
        },
      });

    });

    child.on("exit", code => {
      log(`Received exit code ${code} from reporter '${reporter.title}'`);

      dispatch({
        type: EXIT_REPORTER,
        payload: {
          reporter,
          code,
        },
      });
    });
  };
}

export const SELECT_REPORTER = "SELECT_REPORTER";

export function selectReporter(reporter) {
  return {
    type: SELECT_REPORTER,
    payload: {
      reporter,
    },
  };
}
