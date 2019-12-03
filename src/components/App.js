import React from "react";
import Header from "./Header";
import Messages from "./Messages";
import Input from "./Input";
import Contacts from "./Contacts";
import data from "../../data/messages.json";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      key_count: 3,
      current_contact: 0,
      name: data[0].name,
      curr_data: data[0].history
    };
    this.send = this.send.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  send(value) {
    this.setState(prevState => {
      this.state.curr_data.push({
        m: value,
        key: prevState.key_count + 1,
        id: true
      });
      return { key_count: prevState.key_count + 1 };
    });
  }

  handleClick(id) {
    this.setState({
      current_contact: id,
      name: data[id].name,
      curr_data: data[id].history
    });
  }

  render() {
    return (
      <div className="app">
        <Contacts msgs={data} handleClick={this.handleClick} />
        <div className="app-body">
          <Header name={this.state.name} />
          <Messages msgs={this.state.curr_data} />
          <Input send={this.send} />
        </div>
      </div>
    );
  }
}

export default App;
