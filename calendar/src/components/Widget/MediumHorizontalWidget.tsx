import { dateFormatter } from "../../services/dateFormatter";
import { Calendar } from "../Calendar/Calendar";
import { Event } from "../Event/Event";
import { IEvents } from "./Widget";
import styles from "./Widget.module.css";

export const MediumHorizontalWidget = ({ events }: IEvents) => {
  return (
    <div className={styles.MediumHorizontalWidget}>
      {events.length !== 0 ? (
        <div className={styles.events}>
          {events.map((event, index) => {
            const isChangeColor = index % 2 !== 0 ? true : false;

            if (index < 2) {
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
                  isChangeColor={isChangeColor}
                />
              );
            }

            return null;
          })}
        </div>
      ) : (
        <p className={styles.error}>You don't have events!</p>
      )}

      <Calendar />
    </div>
  );
};
