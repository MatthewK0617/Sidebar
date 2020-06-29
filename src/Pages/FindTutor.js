import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../global";
import { theme } from "../theme";

function FindTutor() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div>
          <h1>Find Tutor</h1>
        </div>
      </>
    </ThemeProvider>
  );
}

export default FindTutor;
