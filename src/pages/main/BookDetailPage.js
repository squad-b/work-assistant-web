import * as React from "react";
import Book from "../../domain/book/Book";
import BookDetail from "../../components/book/BookDetail";

class BookDetailPage extends React.Component {
  render() {
    const bookId = this.props.match.params.bookId;
    if (isNaN(Number(bookId))) {return (<div/>);}
    const book = new Book(bookId,
      '밥 잘하는 법',
      '밥이 이렇게 맛있다고?',
      'http://image.kyobobook.co.kr/images/book/large/741/l9791185473741.jpg',
      ['개발', '밥']);
    return (
      <div>
        <BookDetail book={book}/>
      </div>
    );
  }
}

export default BookDetailPage;