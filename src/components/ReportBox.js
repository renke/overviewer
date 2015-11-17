import React, {Component} from "react";

export default class ReportBox extends Component {
  constructor(props) {
    super(props);
  }

  componentWillUpdate(nextProps) {
    if (nextProps.selected) {
      this.refs.box.focus();
    }
  }

  render() {
    const {reporter, report} = this.props;

    let content = "";
    let boxType = "log";
    let borderColor = "blue";

    if (report) {
      content = report.output.trim();

      if (!report.running) {
        boxType = "log";

        switch (report.status) {
        case "success":
          borderColor = "green";
          break;
        case "failure":
          borderColor = "red";
          break;
        }
      }
    }

    let label = ` ${reporter.title} `;

    if (this.props.selected) {
      label = `{bold}${label}{/bold}`;
    }

    const box = React.createElement(boxType, {
      ref: "box",

      label,
      tags: true,

      keys: true,
      scrollbar: true,
      scrollable: true,

      border: {type: "line"},

      style: {
        border: {fg: borderColor},
        scrollbar: {bg: borderColor},
      },

      onClick: () => this.props.onSelect(),
    }, content);

    return box;
  }
}
