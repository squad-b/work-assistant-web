import React from "react";
import {Box} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

class Profile extends React.Component {
  render() {
    return (
      <Box m={5}>
        <Typography variant="h5">
          프로필
        </Typography>
        <Typography variant="h6">
          <Box m={2}>{this.props.profile.name}</Box>
          <Box m={2}>{this.props.profile.email}</Box>
        </Typography>
        {/*<form onSubmit={function () {alert('변경요');}}>*/}
        {/*  <p><input type="password" placeholder="새 비밀번호"/></p>*/}
        {/*  <p><input type="password" placeholder="새 비밀번호 확인"/></p>*/}
        {/*  <p><input type="submit" value="비밀번호 변경" /></p>*/}
        {/*</form>*/}
      </Box>
    );
  }
}

export default Profile;