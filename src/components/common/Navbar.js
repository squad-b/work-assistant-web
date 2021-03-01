import React from "react";
import NavItem from "./NavItem";
import ago from "../../assets/img/ago.png";
import { Link } from "react-router-dom";
import "./navbar.scss";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: [
        {
          item: "책 등록",
          link: "#",
        },
        {
          item: "로그인",
          link: "#",
        }
      ],
    };
  }

  render() {
    return (
      <div className="main-nav">
        <div className="main-nav-logo">
          <Link to="/">
            <img src={ago} className="logo" alt="" />
          </Link>
        </div>
        <div className="main-nav-list">
          <ul className="main-nav-box">
            {this.state.navItems.map((navItem, i) => {
              return <NavItem navItem={navItem} key={i} />;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default NavBar;