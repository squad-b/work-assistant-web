import {connect} from "react-redux";
import Login from "../pages/main/Login";

function mapDispatchToProps(dispatch){
  return {
    login: function(_email, _password) {
      dispatch({type:'LOGIN', email: _email, password: _password});
    }
  }
}
export default connect(null, mapDispatchToProps)(Login);