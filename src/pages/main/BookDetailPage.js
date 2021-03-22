import * as React from "react";
import Book from "../../domain/book/Book";
import BookDetail from "../../components/book/detail/BookDetail";
import Layout from "../../components/common/Layout";

class BookDetailPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }
  
  render() {
    return (
      <div>
        <Layout>
          <BookDetail bookId={this.props.match.params.bookId}/>
        </Layout>
      </div>
    );
  }
}

export default BookDetailPage;