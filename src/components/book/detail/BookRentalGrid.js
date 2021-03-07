import * as React from "react";
import {DataGrid} from "@material-ui/data-grid";

class BookRentalGrid extends React.Component {
  render() {
    const columns = [
      {field: 'id', headerName: 'id', width: 70},
      {field: 'name', headerName: '이름', width: 100},
      {field: 'isLongTerm', headerName: '장기 대여', width: 120},
      {field: 'startDate', headerName: '대여 시작', width: 120},
      {field: 'endDate', headerName: '대여 끝', width: 120},
    ]
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
      <div style={{height: 400}}>
        <DataGrid columns={columns} rows={bookRentalList} rowHeight={70} headerHeight={70} columnBuffer={10} sortingOrder={'asc'}
                  disableColumnFilter={true} disableColumnMenu={true} disableColumnResize={true} disableColumnSelector={true} disableExtendRowFullWidth={true}/>
      </div>
    );
  }
}

export default BookRentalGrid;