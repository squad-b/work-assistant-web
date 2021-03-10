import * as React from "react";
import SearchBar from "material-ui-search-bar";

class BookSearchInput extends React.Component {
  render() {
    const {onSearchButtonClick} = this.props

    return (
      <div>
        <div className="book-search-bar">
          <SearchBar
            placeholder="책 isbn 또는 제목을 입력해주세요 😃"
            autoFocus
            onRequestSearch={onSearchButtonClick}
          />
        </div>
      </div>
    )
  }
}

export default BookSearchInput