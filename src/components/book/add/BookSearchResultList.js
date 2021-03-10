import * as React from "react";
import './search-book.scss';
import BookCard from "../../main/BookCard";

class BookSearchResultList extends React.Component {

  render() {
    const searchBooks = this.props.searchBooks;
    return (
      <div className={'book-list-section'}>
        {searchBooks.map((book, idx) => {
          return (
            <BookCard book={book} key={idx}/>
          )
        })}
      </div>
    )
  }
}

export default BookSearchResultList