import './book-detail.scss'

import * as React from "react";

import BookDescription from "./BookDescription";
import BookRentalTable from "./BookRentalTable";
import api from '../../../api'

class BookDetail extends React.Component<any,any> {
  constructor(props:any) {
    super(props);

    this.state = {
      book: {},
      noThumbnailImageUrl: "https://resource.miricanvas.com/image/common/design-history-preview-placeholder.png" // TODO: 전역으로 관리하기(redux?)
    }
  }

  componentDidMount() {
    this.fetchBookDetail()
  }

  fetchBookDetail = () => {
    api.get(`/books/` + this.props.bookId)
    .then(response => {
      this.setState({book: response.data})
      
      if (this.state.book.imageUrl === null || this.state.book.imageUrl === undefined || this.state.book.imageUrl === "") {
        this.setState({book: {...this.state.book,noThumbnailImageUrl:this.state.noThumbnailImageUrl}})
      }

      this.setState({ book: this.state.book });
    })
    .catch(error => {
      console.log("책 상세 조회 API 사용중 에러 발생");
      console.log(error);
    })
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
}

export default BookDetail;