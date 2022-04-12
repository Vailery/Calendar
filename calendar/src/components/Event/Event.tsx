import styles from "./Event.module.css";

interface IProps {
  name: string;
  status: string;
  time: string;
}

export const Event = ({ name, status, time }: IProps) => {
  return (
    <div className={styles.main}>
      <p className={styles.title}>{name}</p>
      <p className={styles.status}>{status}</p>
      <p className={styles.time}>{time}</p>
    </div>
  );
};
