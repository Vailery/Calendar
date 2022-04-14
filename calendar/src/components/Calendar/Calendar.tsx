import { useEffect, useState } from "react";
import styles from "./Calendar.module.css";

interface IDate {
  name: string;
  date: number;
}

export const Calendar = () => {
  const date = new Date();
  const [month, setMonth] = useState<string>("");
  const [days, setDays] = useState<IDate[]>([]);

  const renderCalendar = () => {
    date.setDate(1);

    const lastDay = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDate();

    const prevLastDay = new Date(
      date.getFullYear(),
      date.getMonth(),
      0
    ).getDate();

    const firstDayIndex = date.getDay();

    const lastDayIndex = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDay();

    const nextDays = 7 - lastDayIndex - 1;

    setMonth(date.toLocaleString("en-us", { month: "long" }));

    for (let x = firstDayIndex; x > 0; x--) {
      let day = {
        name: "prevDate",
        date: prevLastDay - x + 1,
      };

      setDays((days) => days.concat(day));
    }

    for (let i = 1; i <= lastDay; i++) {
      if (
        i === new Date().getDate() &&
        date.getMonth() === new Date().getMonth()
      ) {
        let day = {
          name: "today",
          date: i,
        };
        setDays((days) => days.concat(day));
      } else {
        let day = {
          name: "day",
          date: i,
        };

        setDays((days) => days.concat(day));
      }
    }

    for (let j = 1; j <= nextDays; j++) {
      let day = {
        name: "nextDate",
        date: j,
      };
      setDays((days) => days.concat(day));
    }
  };

  useEffect(() => {
    renderCalendar();
  }, []);
  const size = 7;

  return (
    <div className={styles.main}>
      <p className={styles.title}>{month}</p>

      <div className={styles.weekdays}>
        <p>S</p>
        <p>M</p>
        <p>T</p>
        <p>W</p>
        <p>T</p>
        <p>F</p>
        <p>S</p>
      </div>

      <div className={styles.days}>
        {days.map((el, index) => (
          <p key={el.name + index} className={`${styles[el.name]}`}>
            {el.date}
          </p>
        ))}
      </div>
    </div>
  );
};
