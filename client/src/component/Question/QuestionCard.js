import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import QuestionComponent from "./QuestionComponent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router-dom";

import QuestionList from "../../utils/QuestionList.json";

const styles = theme => ({
  card: {
    minimumWidth: 400,
    height: 380,
    marginTop: "5%",
    marginLeft: "21%",
    marginRight: "21%"
  },
  root: {
    paddingLeft: theme.spacing.unit,
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    width: "70px",
    float: "right",
    marginRight: "2%",
    backgroundColor: "rgb(49, 52, 58)"
  }
});

class QuestionCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      value: ""
    };
  }

  handleNextQuestion = () => {
    const question = QuestionList.questions[this.state.selectedIndex];
    this.props.PushAnswer(question.id, this.state.value);
    if (this.state.selectedIndex < QuestionList.questions.length - 1) {
      this.setState({ selectedIndex: this.state.selectedIndex + 1, value: "" });
    } else {
      return this.props.history.push("/submit");
    }
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Paper className={classes.root} elevation={1}>
          <Typography
            variant="headline"
            component="h3"
            style={{ color: "white" }}
          >
            {this.props.testPeriod % 60}
          </Typography>
          <Typography component="h6" style={{ color: "white" }}>
            seconds
          </Typography>
        </Paper>
        <Paper className={classes.root} elevation={1}>
          <Typography
            variant="headline"
            component="h3"
            style={{ color: "white" }}
          >
            {Math.floor(this.props.testPeriod / 60)}
          </Typography>
          <Typography component="h6" style={{ color: "white" }}>
            minutes
          </Typography>
        </Paper>
        <Card className={classes.card}>
          <CardContent>
            <QuestionComponent
              question={QuestionList.questions[this.state.selectedIndex]}
              value={this.state.value}
              handleChange={this.handleChange}
            />
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleNextQuestion}
            >
              Next
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

QuestionCard.propTypes = {
  classes: PropTypes.object.isRequired,
  testPeriod: PropTypes.number.isRequired
};

export default withRouter(withStyles(styles)(QuestionCard));
