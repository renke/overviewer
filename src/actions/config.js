import {readFile} from "fs";
import {parse} from "relaxed-json";

export const LOAD_REPORTERS = "LOAD_REPORTERS";
// export const SET_LAYOUT = "SET_LAYOUT";

const CONFIG_FILE_NAME = ".overviewerrc";

function readConfig() {
  return new Promise((resolve, reject) => {
    readFile(CONFIG_FILE_NAME, (err, data) => {

      if (err) {
        return reject(err);
      }

      resolve(parse(data.toString()));
    });
  });
}

export function loadConfig() {
  return async (dispatch) => {
    const config = await readConfig();

    dispatch({
      type: LOAD_REPORTERS,
      payload: {
        reporters: config.reporters,
      },
    });

    return config;
  };
}
