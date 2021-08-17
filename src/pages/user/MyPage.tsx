import BorrowingBookList from "../../components/user/BorrowingBookList";
import {Box} from "@material-ui/core";
import Layout from "../../components/common/Layout";
import Profile from "../../components/user/Profile";
import React from "react";
import Typography from "@material-ui/core/Typography";
import api from "../../api";
import store from "../../store";

export default class MyPage extends React.Component<any,any> {
  constructor(props:any) {
    super(props);
    this.state = {
      user: {
        email: '',
        name: '',
      },
      borrowingBookList: []
    }
  }

  componentDidMount() {
    this.fetchOnRentalBooks();
    this.fetchProfile();
  }

  fetchProfile = async () => {
     await api.get(`/members/${store.getState().memberId}/profile`)
        .then(response => {
          this.setState({ user: {...this.state.user,email:response.data.email,name:response.data.name} });
        })
        .catch(error => {
          console.log("유저 프로필 조회 API 사용중 에러 발생");
          console.log(error);
        })
  }

  fetchOnRentalBooks = async () => {
    await api.get(`/members/${store.getState().memberId}/rentals?status=ON_RENTAL`)
        .then(response => {
          const borrowingBookList = response.data;
            borrowingBookList.forEach((book:any) => book.isLongTerm = book.isLongTerm ? '🅾️' : '❎');
            this.setState({ borrowingBookList: borrowingBookList });
        })
        .catch(error => {
          console.log("유저 대여 목록 조회 API 사용중 에러 발생");
          console.log(error);
        })
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
          <Profile user={this.state.user}/>
          <BorrowingBookList bookList={this.state.borrowingBookList} />
        </Box>
      </Layout>
    );
  }
}
