import React from "react";
import NavItem from "./NavItem";
import { Link } from "react-router-dom";
import "./navbar.scss";
import coin from "../../assets/img/coin.svg";

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
          item: "마이 페이지",
          link: "/myPage",
        }
      ],
    };
  }

  render() {
    return (
      <div className="main-nav">
        <div className="main-nav-logo">
          <Link to="/">
            <img src={coin} className="logo" alt="" />
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