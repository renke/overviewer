import blessed from "blessed";

export default function createScreen() {
  return blessed.screen({
    autoPadding: true,
    smartCSR: true,
    title: "Pedant",
    debug: true,
  });
}
