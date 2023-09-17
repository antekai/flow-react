import { Normalize } from "styled-normalize";
import { Workflow } from "../pages/workflow";
import theme, { GlobalStyle } from "./theme";
import { ThemeProvider } from "styled-components";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Normalize />
      <Workflow />
    </ThemeProvider>
  );
};

export default App;
