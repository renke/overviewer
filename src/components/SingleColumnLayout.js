import React, {Component} from "react";

import ReportBox from "./ReportBox";

export default class SingleColumnLayout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {reporters} = this.props;

    const reportBoxes = reporters.map((reporter, index) => {
      const heightValue = 100 / reporters.length;
      const height = `${heightValue}%`;

      const topValue = index * (100 / reporters.length);
      const top = `${topValue}%`;

      const report = this.props.reports.get(reporter);
      const selected = this.props.selectedReporter === reporter;

      return <box height={height} top={top} key={index}>
        <ReportBox key={index} reporter={reporter} report={report}
                   selected={selected} onSelect={() => this.props.onSelectReporter(reporter)}/>
      </box>;
    });

    return <box>
        {reportBoxes}
    </box>;
  }
}
