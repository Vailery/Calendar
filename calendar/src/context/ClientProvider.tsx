import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { gapi } from "gapi-script";

const client_id = process.env.REACT_APP_CLIENT_ID;
const api_key = process.env.REACT_APP_API_KEY;
const discovery_docs = [
  "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
];
const scopes = "https://www.googleapis.com/auth/calendar.readonly";

interface IProps {
  children: ReactNode;
}

interface IClient {
  client: any;
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

const initClient = ({ gapi, setIsSignedIn }: IInit) => {
  gapi.client
    .init({
      apiKey: api_key,
      clientId: client_id,
      discoveryDocs: discovery_docs,
      scope: scopes,
    })
    .then(() => {
      gapi.auth2.getAuthInstance().isSignedIn.listen(setIsSignedIn);
      setIsSignedIn(gapi.auth2.getAuthInstance().isSignedIn.get());
    })
    .catch((err: any) => {
      console.error(err);
    });
};

export const ClientProvider = ({ children }: IProps) => {
  const client = gapi;
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    gapi.load("client:auth2", () => initClient({ gapi, setIsSignedIn }));
  }, []);

  return (
    <ClientContext.Provider value={{ client, isSignedIn }}>
      {children}
    </ClientContext.Provider>
  );
};
