import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useClient } from "../../services/ClientProvider";
import { Button } from "../Button/Button";
import { Calendar } from "../Calendar/Calendar";
import styles from "./Home.module.css";

export const Home = () => {
  const client = useClient();
  const history = useHistory();

  const handleSignoutClick = () => {
    client.client.auth2.getAuthInstance().signOut();
  };

  useEffect(() => {
    if (!client.isSignedIn && client.client) {
      history.push("/login");
    }
  }, [client, client.isSignedIn]);

  useEffect(() => {
    client.setClient(window.gapi);
  }, [client]);

  return (
    <div className={styles.main}>
      <div className={styles.menu}>
        <p className={styles.text}>Calendar</p>
        <Button onClick={handleSignoutClick} text="Sign Out" />
      </div>

      <Calendar />
    </div>
  );
};
