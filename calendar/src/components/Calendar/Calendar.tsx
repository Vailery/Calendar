import { useEffect, useState } from "react";
import { IDate, makeCalendar } from "../../services/helpers";
import styles from "./Calendar.module.css";

interface IProps {
  days: IDate[];
  month: string;
}

export const Calendar = () => {
  const [month, setMonth] = useState<string>("");
  const [formattedDays, setFormattedDays] = useState<IDate[][]>([]);

  const renderCalendar = ({ days, month }: IProps) => {
    const chunkSize = 7;
    let newArr = [];
    for (let i = 0; i < days.length; i += chunkSize) {
      const chunk = days.slice(i, i + chunkSize);

      newArr.push(chunk);
    }

    setMonth(month);
    setFormattedDays(newArr);
  };

  useEffect(() => {
    renderCalendar(makeCalendar());
  }, []);

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
        {formattedDays.map((el, index) => (
          <div key={index}>
            {el.map((element, index) => (
              <p
                key={element.name + index}
                className={`${styles[element.name]}`}
              >
                {element.date}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
