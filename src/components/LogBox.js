import React, {Component} from "react";

export default class LogBox extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.refs.log.focus();
  }

  render() {
    return <log label=" Log " border={{type: "line"}} ref="log" scrollable={true} alwaysScroll={true} keys={true}>
      {this.props.messages.join("\n")}
    </log>;
  }
}
