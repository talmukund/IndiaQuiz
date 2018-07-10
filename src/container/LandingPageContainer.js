import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import LandingPage from "../component/LandingPage";
import Actions from "../action";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPage);
