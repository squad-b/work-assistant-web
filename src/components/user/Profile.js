import React from "react";

class Profile extends React.Component {
  render() {
    return (
      <div>
        <h2>프로필</h2>
        <h3>{this.props.profile.name}</h3>
        <h3>{this.props.profile.email}</h3>
        <form onSubmit={function () {alert('변경요');}}>
          <p><input type="password" placeholder="새 비밀번호"/></p>
          <p><input type="password" placeholder="새 비밀번호 확인"/></p>
          <p><input type="submit" value="비밀번호 변경" /></p>
        </form>
      </div>
    );
  }
}

export default Profile;