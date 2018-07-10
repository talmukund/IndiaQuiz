import React, { Component } from "react";
import PropTypes from "prop-types";
import TopHeader from "./TopHeader";
import QuestionCard from "./Question/QuestionCard";

export default class LandingPage extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <div>
        <TopHeader />
        <QuestionCard />
      </div>
    );
  }
}
