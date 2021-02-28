import * as React from "react";
import './book-rental-information.scss';

class BookRentalInformation extends React.Component {
  render() {
    const {rentalInformation} = this.props;
    return (
      <div className='rental-information'>
        대여 정보 : {rentalInformation ? this.rentalInformation(rentalInformation): <button>대여 가능</button>}
      </div>
    )
  }

  rentalInformation(bookRental) {
    return `${bookRental.borrower} [${bookRental.startDate} ~ ${bookRental.endDate}]`
  }
}

export default BookRentalInformation;