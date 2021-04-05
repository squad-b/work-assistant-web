import React from "react";
import {Box} from "@material-ui/core";
import {DataGrid} from "@material-ui/data-grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

class BorrowingBookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: this.props.bookList
    }
  }

  returnBooks() {
    alert('반납요');
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
          <DataGrid rows={bookList} columns={columns} pageSize={5} checkboxSelection/>
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