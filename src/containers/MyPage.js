import MyPage from "../pages/user/MyPage";
import {connect} from "react-redux";

function mapReduxStateToReactProps(state) {
  return {
    user: state.currentUser
  }
}

export default connect(mapReduxStateToReactProps)(MyPage)