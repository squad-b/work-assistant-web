import React from "react";
import BookListSection from "../../components/main/BookListSection";
import Layout from "../../components/common/Layout";
import BannerSection from "../../components/main/BannerSection";

class Index extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <BannerSection/>
          <BookListSection/>
        </Layout>
      </div>
    );
  }
}

export default Index;