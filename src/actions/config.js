import {readFile} from "fs";
import {parse} from "relaxed-json";

export const LOAD_REPORTERS = "LOAD_REPORTERS";
// export const SET_LAYOUT = "SET_LAYOUT";

const config = {
  reporters: [
    {
      title: "Linting",
      command: "node_modules/.bin/eslint src --color",
    },

    {
      title: "Babel Doctor",
      command: "babel-doctor --colors",
      success: "Found potential issues on your machine",
    },

    {
      title: "Dependency Usage Analysis",
      command: "depcheck",
    },

    {
      title: "Dependency Update Analysis",
      command: "ncu --error-level 2",
      success: "All dependencies match",
    },
  ],
};

const CONFIG_FILE_NAME = ".pedantrc";

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
    let config = await readConfig();

    dispatch({
      type: LOAD_REPORTERS,
      payload: {
        reporters: config.reporters,
      },
    });

    return config;
  };
}
