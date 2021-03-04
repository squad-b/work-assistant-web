import React from "react";

class BorrowingBookList extends React.Component {
  getBookList() {
    return (
      <table>
        <thead>
        <tr>
          <th>▾</th>
          <th>id</th>
          <th>제목</th>
          <th>대여일</th>
        </tr>
        </thead>
        <tbody>
        {this.props.bookList.map((book) => {
          return (
            <tr key={book.id}>
              <td><input type="checkbox" /></td>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.rentalDate}</td>
            </tr>
          )
        })}
        </tbody>
      </table>
    )
  }

  returnBooks() {
    alert('반납요');
  }

  render() {
    return (
      <div>
        <h2>대여 목록</h2>
        {this.getBookList()}
        <input type="button" value="반납" onClick={this.returnBooks.bind(this)} />
      </div>
    );
  }
}

export default BorrowingBookList;