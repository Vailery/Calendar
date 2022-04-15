import "./App.css";
import { Navigation } from "./navigation/Navigation";
import { ClientProvider } from "./context/ClientProvider";
import { ThemeContext } from "./context/ThemeContext";
import { useContext } from "react";
import styled from "styled-components";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <ClientProvider>
      <Main theme={theme}>
        <Navigation />
      </Main>
    </ClientProvider>
  );
}

const Main = styled.div`
  background: ${({ theme }) => theme.mainBackground};
`;

export default App;
