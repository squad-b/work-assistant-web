import * as React from "react";
import Book from "../../domain/book/Book";
import BookThumbnail from "../../components/book/BookThumbnail";
import BookDetailHeader from "../../components/book/BookDetailHeader";
import BookRentalInformation from "../../components/book/BookRentalInformation";

class BookDetail extends React.Component {
  render() {
    const bookId = this.props.match.params.bookId;
    const book = new Book(bookId,
      '밥 잘하는 법',
      'http://image.kyobobook.co.kr/images/book/large/741/l9791185473741.jpg',
      ['개발', '밥']);
    return (
      <div>
        <BookThumbnail imgUrl={book.thumbnail}/>
        <BookDetailHeader title={book.title} categories={book.categories}/>
        <BookRentalInformation rentalInformation = {book.bookRental} />
      </div>
    );
  }
}

export default BookDetail;