import * as React from "react";
import './search-book.scss';
import BookCard from "../../main/BookCard";

class BookSearchResultList extends React.Component {

  render() {
    const {searchBooks, onClickCard} = this.props;
    return (
      <div className={'book-list-section'}>
        {searchBooks.map((book, idx) => {
          return (
            <BookCard book={book} key={idx} register={true} onClick={onClickCard}/>
          )
        })}
      </div>
    )
  }
}

export default BookSearchResultList