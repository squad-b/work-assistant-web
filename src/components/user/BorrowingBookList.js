import React from "react";
import {Box} from "@material-ui/core";
import {DataGrid} from "@material-ui/data-grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

class BorrowingBookList extends React.Component {

  returnBooks() {
    alert('반납요');
  }

  render() {
    const columns = [
      {field: 'id', headerName: 'ID', width: 70},
      {field: 'title', headerName: '제목', width: 130},
      {field: 'rentalDate', headerName: '대여일', width: 230}
    ];

    const rows = this.props.bookList;

    return (
      <Box m={5}>
        <Typography variant="h5">
          대여 목록
        </Typography>
        <Box style={{height: 350, width: '100%'}} mt={2}>
          <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection/>
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