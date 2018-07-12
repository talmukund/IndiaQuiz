import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import green from "@material-ui/core/colors/green";
import CssBaseline from "@material-ui/core/CssBaseline";
import configureStore from "../store/configureStore";
import App from "./App";
import LoginFormPage from "./LoginFormPage";

import LandingPageContainer from "./LandingPageContainer";
// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: blue[300],
      main: blue[500],
      dark: blue[700]
    },
    secondary: {
      light: green[300],
      main: green[500],
      dark: green[700]
    }
  }
});

export default class Root extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Provider store={configureStore()}>
          <BrowserRouter>
            <App>
              <Switch>
                <Route path="/login" component={LoginFormPage} />
                <Route path="/" component={LandingPageContainer} />
              </Switch>
            </App>
          </BrowserRouter>
        </Provider>
      </MuiThemeProvider>
    );
  }
}
