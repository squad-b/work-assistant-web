import * as React from "react";

class BookRentalInformation extends React.Component {
  render() {
    const {rentalInformation} = this.props;
    return (
      <div>
        대여 정보 : {rentalInformation ? this.rentalInformation(rentalInformation): <button>대여 가능</button>}
      </div>
    )
  }

  rentalInformation(bookRental) {
    return `${bookRental.borrower} [${bookRental.startDate} ~ ${bookRental.endDate}]`
  }
}

export default BookRentalInformation;