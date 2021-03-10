import * as React from "react";
import BookSearchInput from "../../components/book/add/BookSearchInput";
import BookSearchResultList from "../../components/book/add/BookSearchResultList";
import Layout from "../../components/common/Layout";
import {searchBook} from '../../api/Index';

class BookAddPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBooks: []
    }
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
    console.log(`query:${query}`)
    const bookList = await searchBook("리액트");
    this.setState({
      searchBooks: bookList
    })
  }
}

export default BookAddPage