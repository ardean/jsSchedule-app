import * as React from "react";
import ScheduleList from "./schedule/ScheduleList";
import GlobalStyle from "./components/GlobalStyle";
import Theme from "./components/Theme";

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <Theme>
          <ScheduleList />
        </Theme>
      </React.Fragment>
    );
  }
}