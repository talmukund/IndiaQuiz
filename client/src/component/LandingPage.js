import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";
import TopHeader from "./TopHeader";
import QuestionCard from "./Question/QuestionCard";

class LandingPage extends Component {
  state = {
    islaunched: false,
    testPeriod: 9
  };
  static propTypes = {
    prop: PropTypes
  };

  launchTest = () => {
    const testInterval = setInterval(() => {
      if (this.state.testPeriod === 0) {
        clearInterval(testInterval);
        this.props.history.push("/submit");
        return;
      }
      this.setState({ testPeriod: this.state.testPeriod - 1 });
    }, 1000);

    this.setState({ islaunched: true });
  };

  render() {
    return (
      <div>
        <TopHeader />
        {this.state.islaunched ? (
          <QuestionCard
            testPeriod={this.state.testPeriod}
            PushAnswer={this.props.PushAnswer}
          />
        ) : (
          <Button
            variant="contained"
            style={{
              backgroundColor: "grey",
              marginTop: "20%",
              marginLeft: "45%"
            }}
            color="primary"
            size="large"
            onClick={this.launchTest}
          >
            Launch
          </Button>
        )}
      </div>
    );
  }
}

export default withRouter(LandingPage);
