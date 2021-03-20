import {connect} from "react-redux";
import Login from "../pages/main/Login";
import api from "../api";

function mapDispatchToProps(dispatch){
  return {
    login: async (_email, _password) => {
      const response = await api.post('/login', {email: _email, password: _password});
      if (response.data === 'FAIL') {
        alert('땡');
        return ;
      }

      // TODO: 윤병, response에서 email, name 꺼내기
      dispatch({type:'LOGIN', member: {email: _email, name: 'test'}});
    }
  }
}
export default connect(null, mapDispatchToProps)(Login);