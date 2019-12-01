import React from "react";
import ReactDOM from "react-dom";

class Input extends React.Component {
  constructor() {
    super();
    this.state = {
      text: " "
    };
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleKeyDown = e => {
    const { value } = e.target;
    //ReactDOM.findDOMNode("typing").addClass("show")
    if (e.key === "Enter" && value.length !== 0) {
      this.props.send(value);
      ReactDOM.findDOMNode(this.refs.textInput).value = "";
    }
  };

  render() {
    return (
      <div className="msg-input">
        <input
          type="text"
          ref="textInput"
          name="input"
          placeholder="iMessage"
          onKeyDown={this.handleKeyDown}
        />
      </div>
    );
  }
}

export default Input;
