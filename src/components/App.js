import React from "react";
import Header from "./Header";
import Messages from "./Messages";
import Input from "./Input";
import Contacts from "./Contacts";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      msgs: [
        {name: "💖Natasha✨",
        key: 0, 
        history: [
          { m: "Hey there!", key: 1, id: false },
          { m: "whats up", key: 2, id: false },
          { m: "yooo", key: 3, id: true }]
        },
        {name: "Absinthe",
        key: 1, 
        history: [
          {m: "Hey how's it going", key: 1, id: false}
        ]},
        {name: "Nirupama", 
        key: 2,
        history: [
          {m: "Last night was lame", key: 1, id: false}
        ]}
      ],
      key_count: 3,
      current_contact: 0
    };
    this.send = this.send.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  send(value) {
    this.setState(prevState => {
      this.state.msgs[this.state.current_contact].history.push({
        m: value,
        key: prevState.key_count + 1,
        id: true
      });
      return { key_count: prevState.key_count + 1 };
    });
  }

  handleClick(id) {
    console.log(id)
    this.setState = {current_contact: id}
  }

  render() {
    return (
      <div className="app">
        <Contacts msgs={this.state.msgs} handleClick={this.handleClick}/>
        <div className="app-body">
          <Header name={this.state.msgs[this.state.current_contact].name} />
          <Messages msgs={this.state.msgs[this.state.current_contact].history} />
          <Input send={this.send} />
        </div>
      </div>
    );
  }
}

export default App;
