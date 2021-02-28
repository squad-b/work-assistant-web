import * as React from "react";
import Book from "../../domain/Book";

class BookDetail extends React.Component {
  render() {
    const bookId = this.props.match.params.bookId;
    const book = new Book(bookId,
      '밥 잘하는 법',
      'http://image.kyobobook.co.kr/images/book/large/741/l9791185473741.jpg',
      ['개발', '밥']);
    return (
      <div>
        <img src={book.thumbnail} alt="책 썸네일"/>
        <h1>{book.name}</h1>
        <ul>
          <li>#{book.categories[0]}</li>
          <li>#{book.categories[1]}</li>
        </ul>
        대여 정보 : {!book.canRent() ? this.rentalInformation(book.bookRental): <button>대여 가능</button>}
      </div>
    );
  }

  rentalInformation(bookRental) {
    return `${bookRental.borrower} [${bookRental.startDate} ~ ${bookRental.endDate}]`
  }
}

export default BookDetail;