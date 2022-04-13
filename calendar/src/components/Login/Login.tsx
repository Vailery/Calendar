import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useClient } from "../../context/ClientProvider";
import { Button } from "../Button/Button";
import styles from "./Login.module.css";

declare global {
  interface Window {
    gapi: any;
  }
}

export const Login = () => {
  const client = useClient();
  const history = useHistory();

  const handleAuthClick = () => {
    client.setClient(window.gapi);

    client.client.auth2.getAuthInstance().signIn();
  };

  useEffect(() => {
    if (client.isSignedIn && client) {
      history.push("/home");
    }
  }, [client, client.isSignedIn]);

  useEffect(() => {
    client.setClient(window.gapi);
  }, [client]);

  return (
    <div className={styles.main}>
      <p className={styles.text}>Calendar</p>
      <Button onClick={handleAuthClick} text="Login" />
    </div>
  );
};
