import * as React from "react";
import BookSearchInput from "../../components/book/add/BookSearchInput";
import BookSearchResultList from "../../components/book/add/BookSearchResultList";
import Layout from "../../components/common/Layout";
import BookAddPopup from "../../components/book/add/BookAddPopup";
import api from "../../api";

class BookAddPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBooks: [],
      popupOpen: false,
      selectedBook: {}
    }
    this.fetching = false;
    this.isEnd = false;
    this.query = '';
    this.page = 1;
    this.size = 10;
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <div>
        <Layout>
          <BookSearchInput onSearchButtonClick={this.onSearchButtonClick}/>
          <BookSearchResultList searchBooks={this.state.searchBooks} onClickCard={this.onClickBookCard}/>
          <BookAddPopup open={this.state.popupOpen}  book={this.state.selectedBook} onClose={this.onClosePopup}/>
        </Layout>
      </div>
    )
  }

  onClickBookCard = (book) => {
    this.setState({
      popupOpen: true,
      selectedBook: book
    })
  }

  onClosePopup = () => {
    this.setState({
      popupOpen: false
    })
  }

  onSearchButtonClick = async (query) => {

    if (!query) {return;}
    this.fetching = true

    if (this.query !== query) {
      this.page = 1
      this.isEnd = false
    }

    const booksResponse = await api.get(`/search/books/?query=${query}&page=${this.page}&size=${this.size}`);
    const bookList = booksResponse.data.documents;

    const addBookList = this.query === query ? this.state.searchBooks.concat(...bookList) : bookList

    if (bookList) {
      this.setState({searchBooks: addBookList})
      if (bookList.length >= this.size) {
        this.page = this.page + 1
      } else {
        this.isEnd = true
      }
    }
    this.fetching = false
    this.query = query;
  }

  handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight && this.fetching === false && this.isEnd === false) {
      // 페이지 끝에 도달하면 추가 데이터를 받아온다
      this.onSearchButtonClick(this.query);
    }
  };
}

export default BookAddPage