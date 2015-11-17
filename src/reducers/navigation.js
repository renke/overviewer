import {NEXT_REPORT, PREVIOUS_REPORT} from "../actions/navigation";

export default function navigation(state, action) {
  switch (action.type) {
  case(NEXT_REPORT): {
    const {reporters, selectedReporter} = state;

    if (!selectedReporter) {
      return {...state, selectedReporter: reporters[0]};
    }

    const index = reporters.indexOf(selectedReporter);
    const newIndex = (index + 1) % reporters.length;
    return {...state, selectedReporter: reporters[newIndex]};
  }

  case(PREVIOUS_REPORT): {
    const {reporters, selectedReporter} = state;

    if (!selectedReporter) {
      return {...state, selectedReporter: reporters[reporters.length - 1]};
    }

    const index = reporters.indexOf(selectedReporter);
    let newIndex = index - 1;

    if (newIndex < 0) {
      newIndex = reporters.length - 1;
    }
    
    return {...state, selectedReporter: reporters[newIndex]};
  }

  default:
    return state;
  }
}
