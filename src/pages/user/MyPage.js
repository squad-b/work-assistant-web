import React from "react";
import Profile from "../../components/user/Profile";
import BorrowingBookList from "../../components/user/BorrowingBookList";

export default class MyPage extends React.Component {
  render() {
    return (
      <div>
        <h1>마이 페이지</h1>
        <Profile profile={this.props.user.profile}/>
        <BorrowingBookList bookList={this.props.user.bookList} />
      </div>
    );
  }
}
