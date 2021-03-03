import React from "react";
import welcome from "../../assets/img/welcome.png";
import "./banner-section.scss"

class BannerSection extends React.Component {
  render() {
    return (
      <div className="main-banner">
        <img src={welcome} alt="" />
      </div>
    );
  }
}

export default BannerSection;