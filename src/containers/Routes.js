import {connect} from "react-redux";
import Routes from "../pages/router/Routes";

function mapReduxStateToReactProps(state) {
  return {
    user: state.currentUser
  }
}

export default connect(mapReduxStateToReactProps)(Routes)