import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import submit from "../component/submit";
import * as fetchUser from "../action/index";

const mapStateToProps = state => ({
  ...state,
  answer: state.questionReducer.answer
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(fetchUser, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(submit);
