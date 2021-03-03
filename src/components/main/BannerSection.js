import React from "react";
import AgoWelcome from "../../assets/img/ago_welcome.png";
import "./banner-section.scss"

class BannerSection extends React.Component {
  render() {
    return (
      <div className="main-banner">
        <img src={AgoWelcome} alt="" />
      </div>
    );
  }
}

export default BannerSection;