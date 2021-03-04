import * as React from "react";

class BookSearchListItem extends React.Component {
  render() {
    const {searchBook} = this.props

    return (
      <li className='book-search-item'>
        <img src={searchBook.thumbnail} alt="책 썸네일"/>
        <div>
          <p>{searchBook.title}</p>
          <p>{searchBook.publisher}</p>
          <button>등록</button>
        </div>
      </li>
    )
  }
}

export default BookSearchListItem