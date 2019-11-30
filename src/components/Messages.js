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
      </div>
    );
  }
}

export default Messages;
