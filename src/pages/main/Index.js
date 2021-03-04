import React from "react";
import BookListSection from "../../components/main/BookListSection";
import Layout from "../../components/common/Layout";
import Login from "../../containers/Login";
import WelcomeSection from "../../components/main/WelcomeSection";

class Index extends React.Component {
  render() {
      console.log('INDEX')
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