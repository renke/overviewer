import {loadConfig} from "../actions/config";
import {log} from "../actions/logger";
import {startReporter, selectReporter} from "../actions/report";

export function start() {
  return async dispatch => {
    log("Loading reporters.");

    return dispatch(loadConfig()).then(config => {
      const {reporters} = config;
      log(`Loaded ${reporters.length} reporters.`);

      log("Starting reporters.");


      Promise.all(reporters.map(reporter => {
        dispatch(startReporter(reporter));
      })).then(() => {
        dispatch(selectReporter(reporters[0]));
      });
    });
  };
}
