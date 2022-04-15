import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useClient } from "../../context/ClientProvider";
import { Button } from "../Button/Button";
import { Widget } from "../Widget/Widget";
import styles from "./Home.module.css";

export const Home = () => {
  const { client, isSignedIn } = useClient();
  const history = useHistory();

  const handleSignoutClick = () => {
    client.auth2.getAuthInstance().signOut();
  };

  useEffect(() => {
    if (!isSignedIn && client) {
      history.push("/login");
    }
  }, [client, isSignedIn]);

  return (
    <div className={styles.main}>
      <div className={styles.menu}>
        <p className={styles.text}>Calendar</p>
        <Button onClick={handleSignoutClick} text="Sign Out" />
      </div>

      {isSignedIn ? <Widget /> : <></>}
    </div>
  );
};
