import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../global";
import { theme } from "../theme";

function About() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div>
          <h1>About</h1>
        </div>
      </>
    </ThemeProvider>
  );
}

export default About;
