import React from "react";
import data from "../../data/messages.json";

class Contacts extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.handleClick(event.currentTarget.id);
  }

  render() {
    return (
      <div className="contacts">
        {this.props.msgs.map(person => (
          <div id={person.key} key={person.key} onClick={this.handleClick}>
            <span className="name">{person.name}</span>
            <br />
            <span className="contact-msg">{person.history[0].m}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default Contacts;
