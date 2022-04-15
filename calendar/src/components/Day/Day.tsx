import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./Day.module.css";

export const Day = () => {
  const { theme } = useContext(ThemeContext);
  const date = new Date();
  const dayOfWeek = date.toLocaleString("en-us", { weekday: "long" });
  const day = date.getDate();

  return (
    <div className={styles.main}>
      <p className={styles.dayOfWeek}>{dayOfWeek}</p>
      <Today theme={theme}>{day}</Today>
    </div>
  );
};

const Today = styled.p`
  font-family: "SF-Light";
  font-style: normal;
  font-weight: 300;
  font-size: 42px;
  line-height: 50px;
  color: ${({ theme }) => theme.text};
`;
