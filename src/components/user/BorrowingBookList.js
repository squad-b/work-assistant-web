import {Box} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {DataGrid} from "@material-ui/data-grid";
import React from "react";
import Typography from "@material-ui/core/Typography";
import api from "../../api";

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
    const response = await api.post(`/return/rentals`, { rentalIdList: returnList});
    if (response.data.result !== 'SUCCESS') {
      alert('책을 반납할 수 없습니다.');
      return;
    }
    alert("반납 완료!");
    window.location.reload();
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