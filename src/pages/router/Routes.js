import React, {Component} from "react";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import Index from "../../pages/main/Index";
import MyPage from "../../pages/user/MyPage";
import BookDetailPage from "../main/BookDetailPage";
import BookAddPage from "../main/BookAddPage";
import Login from "../../pages/main/Login";
import store from "../../store";

class Routes extends React.Component {

  renderPage(component: Component) {
    return store.getState().isLogin ? component : <Redirect to='/login'/>;
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Route exact path="/" render={(props) => this.renderPage(<Index {...props} />)}/>
          <Route exact path="/login" render={(props) => this.props.isLogin ? <Redirect to='/'/> : <Login {...props}/>}/>
          <Route exact path="/myPage" render={(props) => this.renderPage(<MyPage {...props} />)}/>
          <Route exact path="/books/new" render={(props) => this.renderPage(<BookAddPage {...props} />)}/>
          <Route exact path="/books/:bookId(\d+)" render={(props) => this.renderPage(<BookDetailPage {...props} />)}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default Routes;
