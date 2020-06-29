import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";
import logotrans from "./img/logotrans.png";
import Burger from "./components/Burger/Burger";
import Menu from "./components/Menu/Menu";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div>
          <h1>Display the main page</h1>
          <img src={logotrans} alt="logotrans" height="5%" width="5%" />
        </div>
        <div>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
      </>
    </ThemeProvider>
  );
}
export default App;
