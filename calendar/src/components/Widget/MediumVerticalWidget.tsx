import { dateFormatter } from "../../services/dateFormatter";
import { Day } from "../Day/Day";
import { Event } from "../Event/Event";
import { IEvents } from "./Widget";
import styles from "./Widget.module.css";

export const MediumVerticalWidget = ({ events }: IEvents) => {
  return (
    <div className={styles.MediumVerticalWidget}>
      <div className={styles.day}>
        <Day />
      </div>

      {events.length !== 0 ? (
        <div className={styles.events}>
          {events.map((event, index) => {
            const isChangeColor = index % 2 !== 0 ? true : false;

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
                  isChangeColor={isChangeColor}
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
