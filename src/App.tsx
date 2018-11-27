import * as React from "react";
import Theme from "./components/Theme";
import GlobalStyle from "./components/GlobalStyle";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import ScheduleList from "./schedule/ScheduleList";
import CommandList from "./command/CommandList";
import NotFound from "./components/NotFound";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <GlobalStyle />
          <Theme>
            <React.Fragment>
              <Switch>
                <Redirect from="/index.html" to="/" />
                <Route exact path="/" component={ScheduleList} />
                <Route exact path="/commands" component={CommandList} />
                <Route component={NotFound} />
              </Switch>
            </React.Fragment>
          </Theme>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}