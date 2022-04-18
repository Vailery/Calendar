import "./App.css";
import { Navigation } from "./navigation/Navigation";
import { ClientProvider } from "./context/ClientProvider";
import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, ThemeContext } from "./context/theme";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme}>
      <ClientProvider>
        <GlobalStyles />
        <Navigation />
      </ClientProvider>
    </ThemeProvider>
  );
}

export default App;
