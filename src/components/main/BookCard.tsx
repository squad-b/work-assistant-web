import "./book-card.scss"

import {Link} from "react-router-dom";
import React from "react";

class BookCard extends React.Component<any> {

  getBorrowableStatusClassName = (book:any) => {
    return book.stockQuantity > 0 ? "borrow borrow-enable" : "borrow borrow-unable";
  }

  getBorrowableStatus = (book:any) => {
    return book.stockQuantity > 0 ? "대여가능" : "대여불가";
    // return this.book.stockQuantity > 0 ? `대여 가능(${this.book.stockQuantity}권)` : "대여 불가";
  }

  renderCardLinkedDetail = (book:any) => {
    return (
      <Link to={'/books/' + book.id}>
        <img className="book-thumbnail" src={book.imageUrl} alt="책 썸네일"/>
        <p className="book-title">{book.title}</p>
        <p className={this.getBorrowableStatusClassName(book)}>{this.getBorrowableStatus(book)}</p>
      </Link>
    )
  }

  renderCardForRegister = (book:any, onClick:(book:any)=>void) => {
    return (
      <div onClick={() => {onClick(book)}}>
        <img className="book-thumbnail" src={book.thumbnail} alt="책 썸네일"/>
        <p className="book-title">{book.title}</p>
        <p className="book-publisher">{book.publisher}</p>
        <p className="book-register">등록하기</p>
      </div>
    )
  }

  render() {
    const {book, register, onClick} = this.props
    if (!book.thumbnail) {book.thumbnail = 'https://resource.miricanvas.com/image/common/design-history-preview-placeholder.png';}
    if (book.title && book.title.length > 10) {book.title = book.title.substring(0, 15) + '...'}
    if (book.publisher && book.publisher.length > 10) {book.publisher = book.publisher.substring(0, 15) + '...'}
    return (
      <div className="book-card">
          {!register ? this.renderCardLinkedDetail(book) : this.renderCardForRegister(book, onClick)}
      </div>
    );
  }
}

export default BookCard