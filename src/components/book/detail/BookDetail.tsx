import './book-detail.scss'

import * as React from "react";

import BookDescription from "./BookDescription";
import BookRentalTable from "./BookRentalTable";
import api from '../../../api'

class BookDetail extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      book: {},
      noThumbnailImageUrl: "https://resource.miricanvas.com/image/common/design-history-preview-placeholder.png" // TODO: 전역으로 관리하기(redux?)
    }
  }

  public componentDidMount() {
    this.fetchBookDetail()
  }

  render() {
    return (
      <div>
        {/*책 이미지 상세 정보*/}
        <div className="book-detail">
          <img className="book-thumbnail" src={this.state.book.imageUrl} alt="책 썸네일"/>
          <BookDescription book={this.state.book}/>
        </div>
        {/* 대여자 리스트 */}
        <BookRentalTable bookId={this.props.bookId}/>
      </div>
    )
  }

  private fetchBookDetail() {
    api.get(`/books/${this.props.bookId}`)
      .then(response => {
        const newBook = response.data;

        if (!newBook.imageUrl) {
          newBook.imageUrl = this.state.noThumbnailImageUrl
        }

        this.setState({book: newBook});
      })
      .catch(error => {
        console.log("책 상세 조회 API 사용중 에러 발생");
        console.log(error);
      })
  }
}

export default BookDetail;