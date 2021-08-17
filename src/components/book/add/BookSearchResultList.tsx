import './search-book.scss';
import "./book-search-result.scss";

import * as React from "react";

import BookCard from "../../main/BookCard";

class BookSearchResultList extends React.Component<any> {

  render() {
    const {searchBooks, onClickCard} = this.props;
    return (
      <div className="book-list-section">
        <div className={searchBooks.length <= 0 ? "no-result" : (searchBooks.length <= 5 ? "less-than-five-item-result" : "more-than-five-item-result")}>
          {searchBooks.map((book:any, idx:any) => {
            return (
                <BookCard book={book} key={idx} register={true} onClick={onClickCard}/>
            )
          })}
        </div>
      </div>
    )
  }
}

export default BookSearchResultList