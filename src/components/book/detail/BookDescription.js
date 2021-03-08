import * as React from "react";

class BookDescription extends React.Component {
  render() {
    const {book} = this.props;
    return(
      <div className="book-detail-description">
        <h1 className='title'>{book.title}</h1>
        <ul>
          <li>지은이 : <span>{book.author}</span></li>
          <li>출판사 : <span>{book.publisher}</span></li>
          <li>출판일 : <span>{book.publishingDate}</span></li>
          <li>등록일 : <span>{book.registrationDate}</span></li>
          <li>남은 수량 : <span>{book.stockQuantity}</span></li>
          <span className={""}>{book.description}</span>
        </ul>
      </div>
    )
  };
}

export default BookDescription;