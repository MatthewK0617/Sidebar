import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../global";
import { theme } from "../theme";

function Home() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div>
          <h1>Home</h1>
        </div>
      </>
    </ThemeProvider>
  );
}

export default Home;
