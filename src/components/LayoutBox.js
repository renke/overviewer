import React, {Component} from "react";
import SingleColumnLayout from "./SingleColumnLayout";
import MultiColumnLayout from "./MultiColumnLayout";

export default class LayoutBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <box>
      <MultiColumnLayout reports={this.props.reports} reporters={this.props.reporters}
                          selectedReporter={this.props.selectedReporter}
                          onSelectReporter={this.props.onSelectReporter}/>
    </box>;
  }
}