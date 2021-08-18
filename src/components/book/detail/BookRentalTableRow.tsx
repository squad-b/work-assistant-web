import * as React from "react";

import {TableCell, TableRow} from "@material-ui/core";

class BookRentalTableRow extends React.Component<any> {
  public render() {
    const {bookRental} = this.props;
    return (
      <TableRow>
        <TableCell>{bookRental.borrowerName}</TableCell>
        <TableCell>{bookRental.isLongTerm ? '🅾️' : '❎'}</TableCell>
        <TableCell>{bookRental.startDate}</TableCell>
        <TableCell>{bookRental.endDate}</TableCell>
      </TableRow>
    )
  }
}

export default BookRentalTableRow