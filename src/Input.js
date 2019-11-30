import React from "react";

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
    if (e.key === "Enter") {
      this.props.send(value);
      document.getElementsById("text-input").reset();
    }
  };

  render() {
    return (
      <div className="msg-input">
        <input
          type="text"
          id="text-input"
          name="input"
          placeholder="iMessage"
          onKeyDown={this.handleKeyDown}
        />
      </div>
    );
  }
}

export default Input;
