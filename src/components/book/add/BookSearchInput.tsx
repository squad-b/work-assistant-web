import * as React from "react";

import SearchBar from "material-ui-search-bar";

class BookSearchInput extends React.Component<any>{
  public render() {
    const {onSearchButtonClick, onChange} = this.props

    return (
      <div>
        <div className="book-search-bar">
          <SearchBar
            placeholder="등록할 책 isbn 또는 제목을 입력해주세요 😃"
            onRequestSearch={onSearchButtonClick}
            onChange={onChange}
          />
        </div>
      </div>
    )
  }
}

export default BookSearchInput