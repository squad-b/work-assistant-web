import * as React from "react";
import BookSearchInput from "../../components/book/add/BookSearchInput";
import BookSearchResultList from "../../components/book/add/BookSearchResultList";
import Layout from "../../components/common/Layout";
import BookAddPopup from "../../components/book/add/BookAddPopup";

class BookAddPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBooks: [],
      popupOpen: false
    }
  }

  render() {
    return (
      <div>
        <Layout>
          <BookSearchInput onSearchButtonClick={this.onSearchButtonClick}/>
          <BookSearchResultList searchBooks={this.state.searchBooks}/>
          <BookAddPopup open={this.state.popupOpen}/>
        </Layout>
      </div>
    )
  }

  onSearchButtonClick = async (query) => {
    // const bookList = await api.get(`/books/?query=${query}`);
    // console.log(bookList);
    // this.setState({
    //   searchBooks: bookList
    // })
    this.setState({
      popupOpen: !this.state.popupOpen
    })
  }
}

export default BookAddPage