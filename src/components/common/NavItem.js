import React from "react";
import {Link} from "react-router-dom";
import "./navitem.scss"

class NavItem extends React.Component {
  render() {
    return (
      <li className="main-nav-item" onClick={this.props.navItem.onClick} >
        <Link to={this.props.navItem.link}>{this.props.navItem.item}</Link>
      </li>
    );
  }
}

export default NavItem;