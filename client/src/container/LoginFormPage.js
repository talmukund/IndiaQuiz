import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import LoginForm from "../component/LoginForm";
import * as fetchUser from "../action/index";

const mapStateToProps = state => ({
  ...state
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(fetchUser, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
