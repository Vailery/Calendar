import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useState,
} from "react";

const client_id = process.env.REACT_APP_CLIENT_ID;
const api_key = process.env.REACT_APP_API_KEY;
const discovery_docs = [process.env.REACT_APP_DISCOVERY_DOCS];
const scopes = process.env.REACT_APP_SCOPES;

interface IProps {
  children: ReactNode;
}

interface IClient {
  client: any;
  setClient: Dispatch<any>;
  isSignedIn: boolean;
}

interface IInit {
  gapi: any;
  setIsSignedIn: Dispatch<boolean>;
}

const ClientContext = createContext<IClient>({} as IClient);

export const useClient = () => {
  const context = useContext(ClientContext);
  if (context === undefined) {
    throw Error("Client should be defined");
  }
  return context;
};

const initClient = async ({ gapi, setIsSignedIn }: IInit) => {
  try {
    const gapiInit = await gapi.client.init({
      apiKey: api_key,
      clientId: client_id,
      discoveryDocs: discovery_docs,
      scope: scopes,
    });

    gapi.auth2.getAuthInstance().isSignedIn.listen(setIsSignedIn);

    setIsSignedIn(gapi.auth2.getAuthInstance().isSignedIn.get());
  } catch (err) {
    console.error(err);
  }
};

export const ClientProvider = ({ children }: IProps) => {
  const [client, setClientInState] = useState(undefined);
  const [isSignedIn, setIsSignedIn] = useState(false);

  const setClient = (gapi: any) => {
    setClientInState(gapi);
    gapi.load("client:auth2", initClient({ gapi, setIsSignedIn }));
  };

  return (
    <ClientContext.Provider value={{ client, setClient, isSignedIn }}>
      {children}
    </ClientContext.Provider>
  );
};
