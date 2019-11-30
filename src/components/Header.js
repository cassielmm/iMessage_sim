import React from "react";

class Header extends React.Component {
  render() {
    return <div className="header">To: {this.props.name}</div>;
  }
}

export default Header;
