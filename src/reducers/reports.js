import Immutable from "immutable";

import {
  START_REPORTER,
  START_REPORTER_FAILURE,
  EXIT_REPORTER,
  RECEIVE_REPORT_DATA,
} from "../actions/report";

export default function reports(state = Immutable.Map(), action) {
  switch (action.type) {

  case(START_REPORTER): {
    const report = {
      running: true,
      output: "",
      status: "unknown",
      code: null,
    };

    return state.set(action.payload.reporter, report);
  }

  case(START_REPORTER_FAILURE): {
    const {payload} = action;

    const report = state.get(payload.reporter);
    const newReport = {...report, running: false, status: 1};

    return state.set(payload.reporter, newReport);
  }

  case(RECEIVE_REPORT_DATA): {
    const {payload} = action;

    const report = state.get(payload.reporter);
    const newReport = {...report, output: report.output + payload.data};

    return state.set(payload.reporter, newReport);
  }

  case(EXIT_REPORTER): {
    const {reporter, code} = action.payload;

    const report = state.get(reporter);

    let status = code === 0 ? "success" : "failure";

    if (reporter.success || reporter.failure) {
      const lines = report.output.split("\n");


      if (reporter.success && lines.some(line => line.match(new RegExp(reporter.success)))) {
        status = "success";
      }


      if (reporter.failure && lines.some(line => line.match(new RegExp(reporter.failure)))) {
        status = "failure";
      }
    }

    const newReport = {...report, running: false, code, status};

    return state.set(reporter, newReport);
  }

  default:
    return state;
  }
}
