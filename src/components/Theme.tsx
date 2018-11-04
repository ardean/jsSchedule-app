import * as React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  primaryColor: "#663399"
};

const ThemeComponent: React.SFC = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

export default ThemeComponent;
