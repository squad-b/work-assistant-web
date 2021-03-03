import React from "react";
import BookListSection from "../../components/main/BookListSection";
import Layout from "../../components/common/Layout";

class Index extends React.Component {
  render() {
    const mainPage = this.props.user === undefined
                                    ? <Login/>
                                    : (
                                        <Layout>
                                            <WelcomeSection/>
                                            <BookListSection/>
                                        </Layout>
                                        )
    return (
      <div>
        {mainPage}
      </div>
    );
  }
}

export default Index;