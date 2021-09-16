import { BrowserRouter, Redirect, Route } from "react-router-dom";
import React, {Component} from "react";

import BookAddPage from "../main/BookAddPage";
import BookDetailPage from "../main/BookDetailPage";
import Index from "../../pages/main/Index";
import Login from "../../pages/main/Login";
import MyPage from "../../pages/user/MyPage";
import api from "../../api";
import store from "../../store";

class Routes extends React.Component<any> {
  public componentDidMount() {
    // TODO: 윤병, 페이지 렌더링 되기 전에 세션 체크하고 싶은데 비동기가 넘나 어려움...
    const isLogin = store.getState().memberId;
    if (!isLogin) return;

    api.get('/auth').then(response => {
      if (response.data.result === 'SUCCESS') {
        store.dispatch({
          type: 'AUTHENTICATION',
          memberId: response.data.loginMember.id,
          memberType: response.data.loginMember.type
        });
      } else {
        store.dispatch({type: 'AUTHENTICATION'});
        localStorage.clear();
        alert('세션이 만료되었습니다.');
        window.location.href = '/login';
      }
    });
  }

  public renderPage(component: React.ReactNode, isLoginPage?: boolean) {
    const isLogin = store.getState().memberId;
    if (isLoginPage) {
      return isLogin ? <Redirect to='/'/> : component;
    }
    return isLogin ? component : <Redirect to='/login'/>;
  }

  public render() {
    return (
      <div>
        <BrowserRouter>
          <Route exact path="/" render={(props:any) => this.renderPage(<Index {...props} />)}/>
          <Route exact path="/login" render={(props:any) => this.renderPage(<Login {...props} />, true)}/>
          <Route exact path="/myPage" render={(props:any) => this.renderPage(<MyPage {...props} />)}/>
          <Route exact path="/books/new" render={(props:any) => this.renderPage(<BookAddPage {...props} />)}/>
          <Route exact path="/books/:bookId(\d+)" render={(props:any) => this.renderPage(<BookDetailPage {...props} />)}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default Routes;
