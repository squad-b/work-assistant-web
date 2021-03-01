import React from "react";
import "./book-card.scss"
import { Link } from "react-router-dom";

class BookCard extends React.Component {
  constructor(props) {
    super(props);
    this.book = {
      id: this.props.book.id,
      title: this.props.book.title,
      subtitle: this.props.book.subtitle,
      thumbnail: this.props.book.thumbnail,
      categories: this.props.book.categories,
      borrower: this.props.book.borrower,
    }
  }

  getBorrowStatus = () => {
    return this.book.borrower === "" ? "대츨 가능" : "대출 불가";
  }

  getBorrowStatusClassName = () => {
    return this.book.borrower === "" ? "borrow-enable" : "borrow-unable"; 
  }

  render() {
    return (
      <div className="book-card">
        <Link to={'/books/' + this.book.id}>
          <p>제목: {this.book.title}</p>
          <p>부제목: {this.book.subtitle}</p>
          <img className="book-thumbnail" src={this.book.thumbnail}></img>
          <p> 카테고리: 
            {this.book.categories.map((category) => {
              return <span>{category} </span>
            })}
          </p>
          <p className={this.getBorrowStatusClassName()}>{this.getBorrowStatus()}</p>
        </Link>
      </div>
    );
  }
}

export default BookCard;