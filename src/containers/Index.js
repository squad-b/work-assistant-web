import {connect} from "react-redux";
import Index from "../pages/main/Index";

function mapReduxStateToReactProps(state) {
  return {
    user: state.currentUser
  }
}

export default connect(mapReduxStateToReactProps)(Index)