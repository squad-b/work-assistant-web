import * as React from "react";
import "./book-image.scss";

class BookThumbnail extends React.Component {
  render() {
    const imgUrl = this.props.imgUrl;
    return (
      <div className="thumbnail-box">
        <img src={imgUrl} alt="책 썸네일"/>
      </div>
    );
  }
}

export default BookThumbnail;