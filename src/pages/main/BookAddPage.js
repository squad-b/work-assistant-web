import * as React from "react";
import BookSearchInput from "../../components/book/add/BookSearchInput";
import BookSearchList from "../../components/book/add/BookSearchList";
import Layout from "../../components/common/Layout";
import { searchBook } from '../../api/Index';

class BookAddPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBooks: [
        {
          thumbnail : 'http://image.kyobobook.co.kr/images/book/large/741/l9791185473741.jpg',
          title: '밥 잘하는법',
          publisher : '출판사'
        },
        {
          thumbnail : 'http://image.kyobobook.co.kr/images/book/large/741/l9791185473741.jpg',
          title: '밥 잘하는법',
          publisher : '출판사'
        },
        {
          thumbnail : 'http://image.kyobobook.co.kr/images/book/large/741/l9791185473741.jpg',
          title: '밥 잘하는법',
          publisher : '출판사'
        },
        {
          thumbnail : 'http://image.kyobobook.co.kr/images/book/large/741/l9791185473741.jpg',
          title: '밥 잘하는법',
          publisher : '출판사'
        },
        {
          thumbnail : 'http://image.kyobobook.co.kr/images/book/large/741/l9791185473741.jpg',
          title: '밥 잘하는법',
          publisher : '출판사'
        },
      ]
    }
  }

  render() {
    return (
      <div>
        <Layout>
          <BookSearchInput onSearchButtonClick={this.onSearchButtonClick}/>
          <BookSearchList searchBooks={this.state.searchBooks}/>
        </Layout>
      </div>
    )
  }

  onSearchButtonClick = () => {
    searchBook("리액트");
    this.setState({
      searchBooks: [
        {
          thumbnail : 'http://image.kyobobook.co.kr/images/book/large/741/l9791185473741.jpg',
          title: '밥 개 잘하는법',
          publisher : '출판사'
        },
        {
          thumbnail : 'http://image.kyobobook.co.kr/images/book/large/741/l9791185473741.jpg',
          title: '밥 개 잘하는법',
          publisher : '출판사'
        }
      ]
    })
  }
}

export default BookAddPage