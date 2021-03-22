import * as React from "react";
import BookSearchInput from "../../components/book/add/BookSearchInput";
import BookSearchResultList from "../../components/book/add/BookSearchResultList";
import Layout from "../../components/common/Layout";
import api from '../../api';

class BookAddPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBooks: [],
      fetching: false,
      query: '',
      page: 1,
      pageSize: 10
    }
    window.addEventListener("scroll", this.handleScroll);
  }

  render() {
    return (
      <div>
        <Layout>
          <BookSearchInput onSearchButtonClick={this.onSearchButtonClick}/>
          <BookSearchResultList searchBooks={this.state.searchBooks}/>
        </Layout>
      </div>
    )
  }

  onSearchButtonClick = async (query) => {
    if (this.state.query !== query) {
      this.setState({
        query: query,
        page: 1,
      })
    }

    this.setState({
      fetching: true
    })

    const booksResponse = await api.get(`/books/?query=${this.state.query}&page=${this.state.page}`);
    const bookList = booksResponse.data.documents;

    this.setState({
      searchBooks: this.state.searchBooks.concat(...bookList),
      page: this.state.page + 1
    })
  }

  handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight && this.state.fetching === false) {
      // 페이지 끝에 도달하면 추가 데이터를 받아온다
      this.onSearchButtonClick(this.state.query);
    }
  };
}

export default BookAddPage