import styles from "./Day.module.css";

export const Day = () => {
  const date = new Date();
  const dayOfWeek = date.toLocaleString("en-us", { weekday: "long" });
  const day = date.getDate();

  return (
    <div className={styles.main}>
      <p className={styles.dayOfWeek}>{dayOfWeek}</p>
      <p className={styles.day}>{day}</p>
    </div>
  );
};
