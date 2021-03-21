import React, {Component} from "react";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import Index from "../../pages/main/Index";
import MyPage from "../../pages/user/MyPage";
import BookDetailPage from "../main/BookDetailPage";
import BookAddPage from "../main/BookAddPage";
import Login from "../../pages/main/Login";
import store from "../../store";
import api from "../../api";

class Routes extends React.Component {

  componentDidMount() {
    // TODO: 윤병, 페이지 렌더링 되기 전에 세션 체크하고 싶은데 비동기가 넘나 어려움...
    let isLogin = store.getState().isLogin;
    if (!isLogin) return ;

    api.get('/auth').then(response => {
      isLogin = response.data === 'AUTHORIZED';
      if (!isLogin) {
        store.dispatch({type: 'AUTHENTICATION', isLogin: false});
        alert('세션이 만료되었습니다.');
        window.location.href = '/login';
      }
    });
  }

  renderPage(component: Component, isLoginPage: Boolean) {
    const isLogin = store.getState().isLogin;
    if (isLoginPage) {
      return isLogin? <Redirect to='/'/> : component;
    }
    return isLogin ? component : <Redirect to='/login'/>;
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Route exact path="/" render={(props) => this.renderPage(<Index {...props} />)}/>
          <Route exact path="/login" render={(props) => this.renderPage(<Login {...props} />, true)}/>
          <Route exact path="/myPage" render={(props) => this.renderPage(<MyPage {...props} />)}/>
          <Route exact path="/books/new" render={(props) => this.renderPage(<BookAddPage {...props} />)}/>
          <Route exact path="/books/:bookId(\d+)" render={(props) => this.renderPage(<BookDetailPage {...props} />)}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default Routes;
