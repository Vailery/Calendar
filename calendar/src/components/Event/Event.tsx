import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./Event.module.css";

interface IMainEvent {
  name: string;
  status: string;
  time: string;
  isChangeColor?: boolean;
  isGreenColor?: boolean;
}

export const Event = ({
  name,
  status,
  time,
  isChangeColor,
  isGreenColor,
}: IMainEvent) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`${styles.main} ${isChangeColor ? styles.next : ""} ${
        isGreenColor ? styles.green : ""
      }`}
    >
      <Title theme={theme}>{name}</Title>
      <Status theme={theme}>{status}</Status>
      <Time theme={theme}>{time}</Time>
    </div>
  );
};

const Title = styled.p`
  font-family: "SF-Semibold";
  font-size: 15px;
  line-height: 18px;
  color: #000000;
  color: ${({ theme }) => theme.text};

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100%;

  &::first-letter {
    text-transform: uppercase;
  }
`;

const Status = styled(Title)`
  font-family: "SF-Medium";
  font-size: 12px;
  line-height: 14px;
  text-transform: capitalize;
  margin: 2px 0;
`;

const Time = styled(Title)`
  font-family: "SF-Medium";
  font-size: 12px;
  line-height: 14px;
  color: ${({ theme }) => theme.grayColor};
`;
