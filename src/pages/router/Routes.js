import React, {Component} from "react";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import Index from "../../containers/Index";
import MyPage from "../../containers/MyPage";
import BookDetailPage from "../main/BookDetailPage";
import BookAddPage from "../main/BookAddPage";
import Login from "../../containers/Login";

class Routes extends React.Component {

  isLogin() {
    return this.props.user !== null;
  }

  renderPage(component: Component) {
    return this.isLogin() ? component : <Redirect to='/login'/>;
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Route exact path="/" render={(props) => this.renderPage(<Index {...props} />)}/>
          <Route exact path="/login" render={(props) => this.isLogin() ? <Redirect to='/'/> : <Login {...props}/>}/>
          <Route exact path="/myPage" render={(props) => this.renderPage(<MyPage {...props} />)}/>
          <Route exact path="/books/new" render={(props) => this.renderPage(<BookAddPage {...props} />)}/>
          <Route exact path="/books/:bookId(\d+)" render={(props) => this.renderPage(<BookDetailPage {...props} />)}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default Routes;
