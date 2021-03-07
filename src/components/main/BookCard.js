import React from "react";
import "./book-card.scss"
import { Link } from "react-router-dom";

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

  getBorrowStatusClassName = () => {
    return this.book.stockQuantity > 0 ? "borrow-enable" : "borrow-unable"; 
  }

  render() {
    return (
      <div className="book-card">
        <Link to={'/books/' + this.book.id}>
          <img className="book-thumbnail" src={this.book.imageUrl}></img>
          <p className="book-title">{this.book.title}</p>
          <p className={this.getBorrowStatusClassName()}>{this.book.stockQuantity}</p>
        </Link>
      </div>
    );
  }
}

export default BookCard;