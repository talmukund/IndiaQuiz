import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const styles = {
  button: {
    marginTop: "20%",
    marginLeft: "45%"
  },
  input: {
    display: "none"
  }
};

function LoginFacebook(props) {
  const { classes } = props;
  return (
    <div>
      <Button variant="contained" className={classes.button}>
        <a href="/auth/facebook">Login With Facebook</a>
      </Button>
    </div>
  );
}

LoginFacebook.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LoginFacebook);
