import * as React from "react";
import './book-rental-information.scss';
import {Table, TableBody, TableCell, TableHead, TableRow} from "@material-ui/core";
import BookRentalTableRow from "./BookRentalTableRow";

class BookRentalTable extends React.Component {
  render() {
    const columns = ['이름', '장기 대여', '대여 시작', '대여 끝']

    const bookRentalList = [
      {
        id: 1,
        name: '오민호',
        isLongTerm : true,
        startDate: '2021-03-02'
      },
      {
        id: 2,
        name: '체윤병',
        isLongTerm : false,
        startDate: '2021-03-02',
        endDate: '2021-03-16'
      },
      {
        id: 3,
        name: '유인근',
        isLongTerm : false,
        startDate: '2021-01-01',
        endDate: '2021-01-15'
      },
    ]

    return (
      <div className='rental-table'>
        <h1 className='table-title'>대여 현황</h1>
        <Table>
          <TableHead>
            <TableRow>
            {columns.map((col, idx) => {return <TableCell key = {idx}>{col}</TableCell>})}
            </TableRow>
          </TableHead>
          <TableBody>
            {bookRentalList.map((bookRental, idx) => {return <BookRentalTableRow key = {idx} bookRental = {bookRental}/>})}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default BookRentalTable;