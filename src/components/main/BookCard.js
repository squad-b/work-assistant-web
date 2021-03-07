import React from "react";
import "./book-card.scss"
import { Link } from "react-router-dom";
import { Tooltip } from "@material-ui/core";

class BookCard extends React.Component {
  constructor(props) {
    super(props);
    this.book = {
      id: this.props.book.id,
      title: this.props.book.title,
      imageUrl: this.props.book.imageUrl,
      stockQuantity: this.props.book.stockQuantity
    }
  }

  getBorrowableStatusClassName = () => {
    return this.book.stockQuantity > 0 ? "borrow borrow-enable" : "borrow borrow-unable";
  }

  getBorrowableStatus = () => {
    return this.book.stockQuantity > 0 ? "대출 가능" : "대출 불가";
    // return this.book.stockQuantity > 0 ? `대출 가능(${this.book.stockQuantity}권)` : "대출 불가";
  }

  render() {
    return (
      <div className="book-card">
        <Link to={'/books/' + this.book.id}>
            <img className="book-thumbnail" src={this.book.imageUrl}></img>
              <p className="book-title">{this.book.title}</p>

              <p className={this.getBorrowableStatusClassName()}>{this.getBorrowableStatus()}</p>
        </Link>
      </div>
    );
  }
}

export default BookCard;