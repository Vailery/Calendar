import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useClient } from "../../context/ClientProvider";
import { Button } from "../Button/Button";
import styles from "./Login.module.css";

export const Login = () => {
  const { client, isSignedIn } = useClient();
  const history = useHistory();

  const handleAuthClick = () => {
    client.auth2.getAuthInstance().signIn();
  };

  useEffect(() => {
    if (isSignedIn && client) {
      history.push("/home");
    }
  }, [client, isSignedIn]);

  return (
    <div className={styles.main}>
      <p className={styles.text}>Calendar</p>
      <Button onClick={handleAuthClick} text="Login" />
    </div>
  );
};
