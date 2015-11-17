import React, {Component} from "react";
import {connect} from "react-redux";

import LayoutBox from "./LayoutBox";
import {selectReporter} from "../actions/report";

class ReportsContainer extends Component {
  constructor(props) {
    super(props);
  }

  handleSelectReporter(reporter) {
    this.props.dispatch(selectReporter(reporter));
  }

  render() {
    return <LayoutBox reports={this.props.reports} reporters={this.props.reporters}
                      selectedReporter={this.props.selectedReporter}
                      onSelectReporter={this.handleSelectReporter.bind(this)}/>;
  }
}

function selector(state) {
  return {reports: state.reports, reporters: state.reporters, selectedReporter: state.selectedReporter};
}

export default connect(selector)(ReportsContainer);
