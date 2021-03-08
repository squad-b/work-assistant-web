import * as React from "react";
import BookDescription from "./BookDescription";
import './book-detail.scss'
import BookRentalTable from "./BookRentalTable";

class BookDetail extends React.Component {
  render() {
    const {book} = this.props;

    return (
      <div>
        {/*책 이미지 상세 정보*/}
        <div className="book-detail">
          <img src={book.thumbnail} alt="책 썸네일"/>
          <BookDescription book={book}/>
        </div>
        {/* 대여자 리스트 */}
        <BookRentalTable/>
      </div>
    )
  }
}

export default BookDetail;