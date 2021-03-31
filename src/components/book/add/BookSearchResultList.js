import * as React from "react";
import './search-book.scss';
import BookCard from "../../main/BookCard";
import "./book-search-result.scss";

class BookSearchResultList extends React.Component {

  render() {
    const {searchBooks, onClickCard} = this.props;
    return (
        <div className="book-list-section">
          <div className={searchBooks.length <= 0 ? "no-result" : (searchBooks.length <= 5 ? "less-than-five-item-result" : "more-than-five-item-result")}>
            {searchBooks.map((book, idx) => {
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