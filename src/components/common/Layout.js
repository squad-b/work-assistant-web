import React from "react";
import NavBar from "./Navbar";
import "./base.scss";

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavBar/>
        {this.props.children}
      </div>
    );
  }
}

export default Layout;