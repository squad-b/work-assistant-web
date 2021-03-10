import React from "react";
import {Box} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import TextField from "@material-ui/core/TextField";

class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

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
        <Button type="button" onClick={function () {this.setState({open: true});}.bind(this)}>
          비밀번호 변경
        </Button>
        <Dialog
          open={this.state.open}
          onClose={function () {this.setState({open: false})}.bind(this)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"비밀번호 변경"}</DialogTitle>
          <DialogActions>
            <form>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={function (e) {
                  this.setState({password: e.target.value})
                }.bind(this)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={function (e) {
                  this.setState({passwordCheck: e.target.value})
                }.bind(this)}
              />
              <Button onClick={function () {
                if (this.state.password === this.state.passwordCheck) {
                  alert('변경요');
                  this.setState({open: false})
                } else {
                  alert('안바꿔줘');
                }
              }.bind(this)} color="primary" autoFocus>
                변경
              </Button>
            </form>
          </DialogActions>
        </Dialog>
      </Box>
    );
  }
}

export default Profile;