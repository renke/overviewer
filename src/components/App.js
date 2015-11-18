import React, {Component} from "react";
import {connect} from "react-redux";

import LogBoxContainer from "../components/LogBoxContainer";
import ReportsContainer from "../components/ReportsContainer";
import {nextReport, previousReport} from "../actions/navigation";

class App extends Component {
  componentDidMount() {
    this.setupKeybinding();
  }

  setupKeybinding() {
    const {dispatch} = this.props;

    this.props.screen.key(["escape", "q", "C-c"], () => {
      return process.exit(0);
    });

    this.props.screen.key(["tab"], () => {
      dispatch(nextReport());
    });

    this.props.screen.key(["S-tab"], () => {
      dispatch(previousReport());
    });
  }

  render() {
    return <box>
    <box top="80%" height="20%">
      <LogBoxContainer/>
    </box>

      <box height="100%">
        <ReportsContainer/>
      </box>
    </box>;
  }
}

export default connect()(App);
