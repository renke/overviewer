export const NEXT_REPORT = "NEXT_REPORT";

export function nextReport() {
  return {
    type: NEXT_REPORT,
  };
}

export const PREVIOUS_REPORT = "PREVIOUS_REPORT";

export function previousReport() {
  return {
    type: PREVIOUS_REPORT,
  };
}
