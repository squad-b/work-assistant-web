import BookListSection from "../../components/main/BookListSection";
import Layout from "../../components/common/Layout";
import React from "react";
import WelcomeSection from "../../components/main/WelcomeSection";

class Index extends React.Component {
  public render() {
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