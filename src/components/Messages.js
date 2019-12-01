import React from "react";

class Messages extends React.Component {
  render() {
    return (
      <div className="msgs">
        {this.props.msgs.map(msg => (
          <div key={msg.key} className={msg.id ? "to" : "from"}>
            {msg.m}
          </div>
        ))}
        <div className="to typing">
          <div className="typing-bubble"></div>
          <div className="typing-bubble"></div>
          <div className="typing-bubble"></div>
        </div>
      </div>
    );
  }
}

export default Messages;
