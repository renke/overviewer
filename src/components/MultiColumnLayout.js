import React, {Component} from "react";

import groupBy from "lodash.groupby";


import ReportBox from "./ReportBox";

export default class MultiColumnLayout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {reporters, numberOfColumns} = this.props;

    const columns = groupBy(reporters, (reporter, index) => {
      return index % numberOfColumns;
    });

    const reportBoxes = [];

    for (let i = 0; i < numberOfColumns; i++) {
      const column = columns[i];

      column.forEach((reporter, j) => {

        const heightValue = 100 / column.length;
        const height = `${heightValue}%`;

        const topValue = j * (heightValue);
        const top = `${topValue}%`;

        const widthValue = 100 / numberOfColumns;
        const width = `${widthValue}%`;

        const leftValue = i * widthValue;
        const left = `${leftValue}%`;

        const report = this.props.reports.get(reporter);
        const selected = this.props.selectedReporter === reporter;

        const reportBox = <box height={height} top={top}
                              left={left} width={width}
                              key={`${i}.${j}`}>

          <ReportBox reporter={reporter} report={report}
                     selected={selected} onSelect={() => this.props.onSelectReporter(reporter)}/>
        </box>;

        reportBoxes.push(reportBox);
      });
    }

    return <box>
      {reportBoxes}
    </box>;
  }
}

MultiColumnLayout.defaultProps = {numberOfColumns: 2};
