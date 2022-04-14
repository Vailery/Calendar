import styles from "./Event.module.css";

interface IProps {
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
}: IProps) => {
  return (
    <div
      className={`${styles.main} ${isChangeColor ? styles.next : ""} ${
        isGreenColor ? styles.green : ""
      }`}
    >
      <p className={styles.title}>{name}</p>
      <p className={styles.status}>{status}</p>
      <p className={styles.time}>{time}</p>
    </div>
  );
};
