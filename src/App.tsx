import React from "react";

import { Global, ThemeProvider } from "@emotion/react";

import Homepage from "./pages";
import { globalStyles, theme } from "./styles";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Homepage />
    </ThemeProvider>
  );
};

export default App;
