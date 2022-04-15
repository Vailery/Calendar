import styles from "./Error.module.css";
import lottie from "lottie-web";
import { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "../Button/Button";

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
      <p>
        If you see this page, it means that there is <span>no such page</span>
        ...
      </p>
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
