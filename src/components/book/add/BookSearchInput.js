import * as React from "react";

class BookSearchInput extends React.Component {
  render() {
    const {onSearchButtonClick} = this.props

    return (
      <div>
        <input autoFocus={true} placeholder='isbn 또는 제목'/>
        <button onClick={onSearchButtonClick}>검색</button>
      </div>
    )
  }
}

export default BookSearchInput