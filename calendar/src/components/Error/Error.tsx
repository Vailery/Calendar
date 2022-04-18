import styles from "./Error.module.css";
import lottie from "lottie-web";
import { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "../Button/Button";
import styled from "styled-components";

export const Error = () => {
  const container = useRef<HTMLDivElement>(null);
  const history = useHistory();

  useEffect(() => {
    if (container.current) {
      lottie.loadAnimation({
        container: container.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: require("./puzzle.json"),
      });
    }
  }, [container]);

  return (
    <div className={styles.main}>
      <ErrorMessage>
        If you see this page, it means that there is <span>no such page</span>
        ...
      </ErrorMessage>
      <div ref={container} className={styles.image} />
      <Button
        text="Go back"
        onClick={() => {
          history.goBack();
        }}
      />
    </div>
  );
};

const ErrorMessage = styled.p`
  font-family: "SF-Regular";
  font-size: 14px;
  line-height: 19px;
  color: ${({ theme }) => theme.textButton};
  white-space: nowrap;
  & span {
    color: #ee5c51;
    font-style: italic;
  }
`;
