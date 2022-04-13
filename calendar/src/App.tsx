import "./App.css";
import { Navigation } from "./navigation/Navigation";
import { ClientProvider } from "./context/ClientProvider";

function App() {
  return (
    <ClientProvider>
      <Navigation />
    </ClientProvider>
  );
}

export default App;
