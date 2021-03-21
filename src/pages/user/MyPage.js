import React from "react";
import Profile from "../../components/user/Profile";
import BorrowingBookList from "../../components/user/BorrowingBookList";
import Layout from "../../components/common/Layout";
import Typography from "@material-ui/core/Typography";
import {Box} from "@material-ui/core";

export default class MyPage extends React.Component {
  constructor() {
    super();
    // TODO: 윤병, GET /myInfo API 날리기
    this.state = {
      user: {
        email: 'test@test.com',
        name: '아고',
        bookList: [
          { id: 1, title: 'test title 1', rentalDate: new Date().toDateString()},
          { id: 2, title: 'test title 2', rentalDate: new Date().toDateString()},
          { id: 3, title: 'test title 3', rentalDate: new Date().toDateString()}
        ]
      }
    }
  }

  render() {
    return (
      <Layout>
        <Box mt={5}>
          <Typography variant="h4">
            마이 페이지
          </Typography>
        </Box>
        <Box m={5}>
          <Profile profile={this.state.user}/>
          <BorrowingBookList bookList={this.state.user.bookList} />
        </Box>
      </Layout>
    );
  }
}
