import React from "react";
import Profile from "../../components/user/Profile";
import BorrowingBookList from "../../components/user/BorrowingBookList";
import Layout from "../../components/common/Layout";
import Typography from "@material-ui/core/Typography";
import {Box} from "@material-ui/core";

export default class MyPage extends React.Component {
  render() {
    return (
      <Layout>
        <Box mt={5}>
          <Typography variant="h4">
            마이 페이지
          </Typography>
        </Box>
        <Box m={5}>
          <Profile profile={this.props.user}/>
          <BorrowingBookList bookList={this.props.user.bookList} />
        </Box>
      </Layout>
    );
  }
}
