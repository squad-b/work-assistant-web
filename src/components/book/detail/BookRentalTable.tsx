import './book-rental-information.scss';

import * as React from "react";

import {Table, TableBody, TableCell, TableHead, TableRow} from "@material-ui/core";

import BookRentalTableRow from "./BookRentalTableRow";
import api from "../../../api";

class BookRentalTable extends React.Component<any,any> {

  constructor(props:any) {
    super(props);

    this.state = {
      bookRentalList: [],
    }
  }

  public componentDidMount() {
    this.fetchBookRentalList();
  }

  public fetchBookRentalList(){
    api.get(`/rentals/books/` + this.props.bookId)
        .then(response => {
          this.setState({bookRentalList:response.data});
        })
        .catch(error => {
          console.log("책 대여 정보 조회 API 사용중 에러 발생");
          console.log(error);
        })
  }

  public render() {
    const columns = ['이름', '장기 대여', '대여 시작', '대여 끝']

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
            {this.state.bookRentalList.map((bookRental:any, idx:number) => {return <BookRentalTableRow key = {idx} bookRental = {bookRental}/>})}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default BookRentalTable;