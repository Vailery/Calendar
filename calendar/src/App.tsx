import "./App.css";
import { Navigation } from "./navigation/Navigation";
import { ClientProvider } from "./services/ClientProvider";

function App() {
  return (
    <ClientProvider>
      <Navigation />
    </ClientProvider>
  );
}

export default App;
