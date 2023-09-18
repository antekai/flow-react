import { Normalize } from "styled-normalize";
import { Workflow } from "../pages/workflow";
import theme, { GlobalStyle } from "./theme";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Normalize />
        <Workflow />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
