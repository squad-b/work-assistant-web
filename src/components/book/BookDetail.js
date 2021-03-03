import * as React from "react";
import BookTitle from "./BookTitle";
import Tags from "./Tags";
import BookRentalInformation from "./BookRentalInformation";
import './book-detail.scss'

class BookDetail extends React.Component {
  render() {
    const {book} = this.props;

    return (
      <div className="book-detail">
        <BookTitle title={book.title} subTitle={book.subTitle} categories={book.categories}/>
        <Tags tags={book.categories}/>
        <BookRentalInformation rentalInformation = {book.bookRental} />
      </div>
    )
  }
}

export default BookDetail;