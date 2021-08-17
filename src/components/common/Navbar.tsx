import "./navbar.scss";

import {Link, withRouter} from "react-router-dom";

import NavItem from "./NavItem";
import React from "react";
import api from "../../api";
import coin from "../../assets/img/coin.svg";
import store from "../../store";

class NavBar extends React.Component<any,any> {
  constructor(props:any) {
    super(props);

    const logout = async () => {
      await api.post("/logout")
      localStorage.clear();
      window.location.href = "/"
    }

    const isAdmin = !!store.getState().memberType && store.getState().memberType === 'ADMIN';

    const adminNavItems = [{
      item: "책 등록",
      link: "/books/new",
      onClick: ()=>{}
    }]

    const normalNavItems = [
      {
        item: "마이 페이지",
        link: "/myPage",
        onClick: ()=>{}
      },
      {
        item: "로그아웃",
        link: "/",
        onClick: logout
      }
    ]

    this.state = {navItems: isAdmin ? adminNavItems.concat(normalNavItems) : normalNavItems};
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
            {this.state.navItems.map((navItem: any, i:number) => {
              return <NavItem navItem={navItem} key={i} />;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(NavBar);