import React from "react";
import Header from "./Header";
import Messages from "./Messages";
import Input from "./Input";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      msgs: [
        { m: "Hey there!", key: 1, id: false },
        { m: "whats up", key: 2, id: false },
        { m: "yooo", key: 3, id: true }
      ],
      key_count: 3
    };
    this.send = this.send.bind(this);
  }

  send(value) {
    this.setState(prevState => {
      this.state.msgs.push({
        m: value,
        key: prevState.key_count + 1,
        id: true
      });
      return { key_count: prevState.key_count + 1 };
    });
  }

  render() {
    return (
      <div className="app">
        <Header name="Natasha" />
        <Messages msgs={this.state.msgs} />
        <Input send={this.send} />
      </div>
    );
  }
}

export default App;
