import * as React from "react";

import BookDetail from "../../components/book/detail/BookDetail";
import Layout from "../../components/common/Layout";

class BookDetailPage extends React.Component<any> {
  public componentDidMount() {
    window.scrollTo(0,0);
  }
  
  public render() {
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