import React from "react";
import {Box} from "@material-ui/core";
import {DataGrid} from "@material-ui/data-grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import api from "../../api";
import store from "../../store";

class BorrowingBookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: this.props.bookList,
      selectedRentals: []
    }
  }

  selectRentals = (rentalList) => {
    this.setState({selectedRentals: rentalList.selectionModel});
  }

  returnBooks = async () => {
    const returnList = this.state.selectedRentals;
    if (returnList.length < 1) {
      alert('반납할 도서를 선택해주세요 📖');
      return;
    }
    // TODO: 윤병, 한번에 여러 도서를 반납 가능하도록 수정 필요
    for (const rentalId of returnList) {
      await this.returnBook(rentalId);
    }
    const response = await api.get(`/members/${store.getState().memberId}/rentals`)
    const borrowingBookList = response.data;
    this.setState({ borrowingBookList: borrowingBookList });
  }

  returnBook = async (rentalId) => {
    const response = await api.put(`/rentals/${rentalId}`, {status: 'RETURN'});
    if (response.result !== 'SUCCESS') console.log(`책 반납 중 error 발생. rentalId: ${rentalId}`);
  }

  render() {
    const {bookList} = this.props;
    const columns = [
      {field: 'id', headerName: 'ID', width: 70},
      {field: 'bookTitle', headerName: '책 제목', width: 130},
      {field: 'isLongTerm', headerName: '장기대여', width: 150},
      {field: 'startDate', headerName: '대여 시작', width: 150},
      {field: 'endDate', headerName: '대여 끝', width: 150}
    ];

    return (
      <Box m={5}>
        <Typography variant="h5">
          대여 목록
        </Typography>
        <Box style={{height: 350, width: '100%'}} mt={2}>
          <DataGrid
            rows={bookList}
            columns={columns}
            pageSize={5}
            checkboxSelection
            onSelectionModelChange={this.selectRentals.bind(this)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={this.returnBooks.bind(this)}
          >
            반납
          </Button>
        </Box>
      </Box>
    );
  }
}

export default BorrowingBookList;