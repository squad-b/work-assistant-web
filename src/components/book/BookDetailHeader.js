import * as React from "react";

class BookDetailHeader extends React.Component {
  render() {
    const {title, categories} = this.props;
    return(
      <div>
        <h1>{title}</h1>
        <ul>{categories.map((category) => <li key={category}>#{category}</li>)}</ul>
      </div>
    )
  };
}

export default BookDetailHeader;