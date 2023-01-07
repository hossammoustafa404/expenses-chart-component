import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Main from "./components/Main";
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SectionWrapper className="d-flex align-items-center">
        <div className="container col-sm-8 col-md-6 col-lg-5 col-xl-4">
          <Header />
          <Main />
        </div>
      </SectionWrapper>
    </ThemeProvider>
  );
};

export default App;

// Global style
const GlobalStyle = createGlobalStyle`
    body {
        *,*::before {
            font-family: 'DM Sans', sans-serif;
            font-size: 18px;
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }
    }
`;

// Theme
const theme = {
  //Primary

  softRed: "hsl(10, 79%, 65%)",
  cyan: "hsl(186, 34%, 60%)",

  //Neutral

  darkBrown: "hsl(25, 47%, 15%)",
  mediumBrown: "hsl(28, 10%, 53%)",
  cream: "hsl(27, 66%, 92%)",
  veryPaleOrange: "hsl(33, 100%, 98%)",
};

// SectionWrapper
const SectionWrapper = styled.section`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.cream};
`;
