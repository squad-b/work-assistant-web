import React from "react";
import Profile from "../../components/user/Profile";
import BorrowingBookList from "../../components/user/BorrowingBookList";
import Layout from "../../components/common/Layout";
import Typography from "@material-ui/core/Typography";
import {Box} from "@material-ui/core";
import api from "../../api";
import store from "../../store";

export default class MyPage extends React.Component {
  constructor() {
    super();
    const dummyBookList = [
      { id: 1, title: 'test title 1', rentalDate: new Date().toDateString()},
      { id: 2, title: 'test title 2', rentalDate: new Date().toDateString()},
      { id: 3, title: 'test title 3', rentalDate: new Date().toDateString()}
    ];
    this.state = {
      user: {
        email: '',
        name: '',
        bookList: dummyBookList
      }
    }
    const memberId = store.getState().memberId;
    api.get(`/members/${memberId}/profile`).then(response => {
      this.setState({
        user: {
          email: response.data.email,
          name: response.data.name,
          bookList: dummyBookList
        }
      });
    });
  }

  // getProfile = async () => {
  //   const memberId = store.getState().memberId;
  //   const response = await api.get(`/members/${memberId}/profile`);
  //   return {
  //     email: response.data.email,
  //     name: response.data.name
  //   };
  // }

  render() {
    return (
      <Layout>
        <Box mt={5}>
          <Typography variant="h4">
            마이 페이지
          </Typography>
        </Box>
        <Box m={5}>
          <Profile user={this.state.user}/>
          <BorrowingBookList bookList={this.state.user.bookList} />
        </Box>
      </Layout>
    );
  }
}
