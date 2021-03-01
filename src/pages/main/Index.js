import React from "react";
import BookListSection from "../../components/main/BookListSection";
import Layout from "../../components/common/Layout";

class Index extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <BookListSection/>
        </Layout>
      </div>
    );
  }
}

export default Index;