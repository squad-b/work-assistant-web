import React from "react";
import Profile from "../../components/user/Profile";
import BorrowingBookList from "../../components/user/BorrowingBookList";

class MyPage extends React.Component {
  constructor(props) {
    super(props);
    const rentalDate = new Date().toDateString();
    this.state = {
      user: {
        profile: {
          name: '채윤병',
          email: 'yunbchae@miridih.com'
        },
        bookList: [
          {id: 1, title: 'title 1', rentalDate: rentalDate},
          {id: 2, title: 'title 2', rentalDate: rentalDate},
          {id: 3, title: 'title 3', rentalDate: rentalDate}
        ]
      }
    }
  }

  render() {
    return (
      <div>
        <h1>마이 페이지</h1>
        <Profile profile={this.state.user.profile}/>
        <BorrowingBookList bookList={this.state.user.bookList} />
      </div>
    );
  }
}

export default MyPage;