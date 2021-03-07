import * as React from "react";
import './book-detail-header.scss';

class BookTitle extends React.Component {
  render() {
    const {title, subTitle} = this.props;
    return(
      <div>
        <h1 className='title'>{title}</h1>
        <span className='sub-title'>{subTitle}</span>
      </div>
    )
  };
}

export default BookTitle;