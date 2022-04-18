import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
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
      <Title>Calendar</Title>
      <Button onClick={handleAuthClick} text="Login" />
    </div>
  );
};

const Title = styled.div`
  font-family: "SF-Semibold";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  color: ${({ theme }) => theme.text};
`;
