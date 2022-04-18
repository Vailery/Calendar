import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useClient } from "../../context/ClientProvider";
import { Button } from "../Button/Button";
import { DarkModeToggle } from "../DarkModeToggle/DarkModeToggle";
import { Widget } from "../Widget/Widget";
import styled from "styled-components";
import styles from "./Home.module.css";
import { ThemeContext } from "../../context/theme";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";

export const Home = () => {
  const { client, isSignedIn } = useClient();
  const { t } = useTranslation();
  const { isDark, changeIsDark } = useContext(ThemeContext);
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
        <Button onClick={handleSignoutClick} text={t("exit_button")} />

        <Title>{t("app_name")}</Title>

        <div className={styles.toggles}>
          <LanguageSwitcher />

          <DarkModeToggle
            inputChecked={isDark}
            onChange={() => {
              changeIsDark();
            }}
          />
        </div>
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
