import * as React from "react";
import BookTitle from "./BookTitle";
import Tags from "./Tags";
import BookRentalInformation from "./BookRentalInformation";
import './book-detail.scss'
import BookRentalGrid from "./BookRentalGrid";

class BookDetail extends React.Component {
  render() {
    const {book} = this.props;

    return (
      <div>
        <div className="book-detail-img-box">
          <img src={book.thumbnail} alt="책 썸네일"/>
        </div>
        <div className="book-detail">
          <BookTitle title={book.title} subTitle={book.subTitle} categories={book.categories}/>
          <Tags tags={book.categories}/>
          <BookRentalInformation rentalInformation = {book.bookRental} />
        </div>
        <BookRentalGrid/>
      </div>
    )
  }
}

export default BookDetail;