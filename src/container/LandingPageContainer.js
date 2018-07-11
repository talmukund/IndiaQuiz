import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import LandingPage from "../component/LandingPage";
import * as Actions from "../action";

const actions = {
  ...Actions
};

const mapStateToProps = state => ({
  answers: state.questionReducer.answer
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPage);
