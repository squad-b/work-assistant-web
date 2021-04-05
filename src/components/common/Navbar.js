import React from "react";
import NavItem from "./NavItem";
import {Link, withRouter} from "react-router-dom";
import "./navbar.scss";
import coin from "../../assets/img/coin.svg";
import api from "../../api";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    const logout = async () => {
      await api.post("/logout")
      window.location.href = "/"
    }

    this.state = {
      navItems: [
        {
          item: "책 등록",
          link: "/books/new",
        },
        {
          item: "마이 페이지",
          link: "/myPage",
        },
        {
          item: "로그아웃",
          onClick: logout
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

export default withRouter(NavBar);