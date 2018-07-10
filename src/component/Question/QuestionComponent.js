import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    display: "flex"
  },
  checked: {},
  size: {
    width: 40,
    height: 40
  },
  sizeIcon: {
    fontSize: 20
  },
  title: {
    padding: "2%",
    fontSize: 32,
    color: "white",
    backgroundColor: "#2196f3"
  },
  group: {
    margin: `${theme.spacing.unit}px 0`
  }
});

class QuestionComponents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  componentWillReceiveProps(nextProp) {
    this.setState({ value: "" });
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { classes, question } = this.props;
    return (
      <div>
        <Typography
          className={classes.title}
          cvariant="headline"
          component="h1"
        >
          {question.question}
        </Typography>
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="gender"
            name="gender1"
            className={classes.group}
            value={this.state.value}
            onChange={this.handleChange}
          >
            {question.options.map((option, index) => {
              return (
                <FormControlLabel
                  key={index}
                  value={option}
                  control={<Radio />}
                  label={option}
                />
              );
            })}
          </RadioGroup>
        </FormControl>
      </div>
    );
  }
}

QuestionComponents.propTypes = {
  classes: PropTypes.object.isRequired,
  question: PropTypes.object.isRequired
};

export default withStyles(styles)(QuestionComponents);
