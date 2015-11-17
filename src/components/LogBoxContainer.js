import React, {Component} from "react";
import {connect} from "react-redux";

import LogBox from "./LogBox";

class LogBoxContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <LogBox messages={this.props.messages}/>;
  }
}

export default connect(state => ({messages: state.logging.messages}))(LogBoxContainer);
