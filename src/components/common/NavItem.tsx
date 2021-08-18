import "./navitem.scss"

import {Link} from "react-router-dom";
import React from "react";

class NavItem extends React.Component<any> {
  public render() {
    return (
      <li className="main-nav-item" onClick={this.props.navItem.onClick} >
        <Link to={this.props.navItem.link}>{this.props.navItem.item}</Link>
      </li>
    );
  }
}

export default NavItem;