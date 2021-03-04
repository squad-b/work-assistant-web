import * as React from "react";
import './search-book.scss';
import BookSearchListItem from "./BookSearchListItem";

class BookSearchList extends React.Component {

  render() {
    const searchBooks = this.props.searchBooks;
    return (
      <ul>
        {searchBooks.map((book, idx) => {
          return (
            <BookSearchListItem searchBook={book} key={idx}/>
          )
        })}
      </ul>
    )
  }
}

export default BookSearchList