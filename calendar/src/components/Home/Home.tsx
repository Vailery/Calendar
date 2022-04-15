import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useClient } from "../../context/ClientProvider";
import { ThemeContext } from "../../context/ThemeContext";
import { Button } from "../Button/Button";
import { DarkModeToggle } from "../DarkModeToggle/DarkModeToggle";
import { Widget } from "../Widget/Widget";
import styled from "styled-components";
import styles from "./Home.module.css";

export const Home = () => {
  const { client, isSignedIn } = useClient();
  const { isDark, changeIsDark, theme } = useContext(ThemeContext);
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
        <DarkModeToggle
          inputChecked={isDark}
          onChange={() => {
            changeIsDark();
          }}
        />

        <Title theme={theme}>Calendar</Title>

        <Button onClick={handleSignoutClick} text="Sign Out" />
      </div>

      {isSignedIn ? <Widget /> : <></>}
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
