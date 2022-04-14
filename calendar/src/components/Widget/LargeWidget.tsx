import { dateFormatter } from "../../services/dateFormatter";
import { Calendar } from "../Calendar/Calendar";
import { Day } from "../Day/Day";
import { Event } from "../Event/Event";
import { IEvents } from "./Widget";
import styles from "./Widget.module.css";

export const LargeWidget = ({ events }: IEvents) => {
  return (
    <div className={styles.LargeWidget}>
      <div className={styles.calendar}>
        <Day />

        <Calendar />
      </div>

      <p className={styles.day}>Today</p>
      {events.length !== 0 ? (
        <div className={styles.events}>
          {events.map((event, index) => {
            if (index < 4) {
              const time = dateFormatter(
                event.start.dateTime,
                event.end.dateTime
              );
              return (
                <Event
                  key={event.summary + index}
                  name={event.summary}
                  status={event.description}
                  time={time}
                  isGreenColor={true}
                />
              );
            }
          })}
        </div>
      ) : (
        <p className={styles.error}>You don't have events!</p>
      )}
    </div>
  );
};
