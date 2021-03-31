import React from "react";
import {Box, DialogContentText} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import TextField from "@material-ui/core/TextField";
import Collapse from "@material-ui/core/Collapse";
import api from "../../api";
import store from "../../store";

class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      invalid: false,
      message: ''
    }
  }

  isValidPassword = password => {
    return password !== undefined && password.length > 0
  }

  changePassword = async () => {
    if (!this.isValidPassword(this.state.password) || !this.isValidPassword(this.state.passwordCheck)) {
      this.setState({invalid: true, message: '비밀번호를 입력해주세요.'})
      return;
    }
    if (this.state.password !== this.state.passwordCheck) {
      this.setState({invalid: true, message: '비밀번호가 일치하지 않습니다.'})
      return;
    }

    const memberId = store.getState().memberId;
    try {
      const response = await api.put(`/members/${memberId}`, {password: this.state.password});
      if(response.data === 'SUCCESS') {
        alert('비밀번호가 변경되었습니다 😇');
      }
    } catch (e) {
      alert('비밀번호가 안변경되었습니다 🤡');
    }
    this.setState({open: false, invalid: false, message: ''})
  }

  render() {
    return (
      <Box m={5}>
        <Typography variant="h5">
          프로필
        </Typography>
        <Typography variant="h6">
          <Box m={2}>{this.props.user.name}</Box>
          <Box m={2}>{this.props.user.email}</Box>
        </Typography>
        <Button type="button" onClick={function () {this.setState({open: true});}.bind(this)}>
          비밀번호 변경
        </Button>
        <Dialog
          open={this.state.open}
          onClose={function () {this.setState({open: false, invalid: false, message: ''})}.bind(this)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"비밀번호 변경"}</DialogTitle>
          <Collapse in={this.state.invalid}>
            <Box ml={5}>
              <DialogContentText color="error">{this.state.message}</DialogContentText>
            </Box>
          </Collapse>
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
              <Button onClick={this.changePassword.bind(this)} color="primary" autoFocus>
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