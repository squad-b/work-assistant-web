import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form>
          <p><input type="text" placeholder="아이디" onChange={function (e) {
            this.setState({email: e.target.value})
          }.bind(this)}/></p>
          <p><input type="password" placeholder="비밀번호" onChange={function (e) {
            this.setState({password: e.target.value})
          }.bind(this)}/></p>
          <p><input type="button" value="로그인" onClick={function () {
            this.props.login(this.state.email, this.state.password)
          }.bind(this)}/></p>
        </form>
      </div>
    );
  }
}

export default Login;