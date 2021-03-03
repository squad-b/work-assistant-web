import React from "react";
import BookListSection from "../../components/main/BookListSection";
import Layout from "../../components/common/Layout";
import WelcomeSection from "../../components/main/WelcomeSection";

class Index extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <WelcomeSection/>
          <BookListSection/>
        </Layout>
      </div>
    );
  }
}

export default Index;