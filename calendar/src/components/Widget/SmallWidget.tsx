import { dateFormatter } from "../../services/dateFormatter";
import { Day } from "../Day/Day";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { Event } from "../Event/Event";
import { IEvents } from "./Widget";
import styles from "./Widget.module.css";

export const SmallWidget = ({ events }: IEvents) => {
  return (
    <div className={styles.SmallWidget}>
      <Day />
      {events.length !== 0 ? (
        <>
          {events.map((event, index) => {
            if (index === 0) {
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
                />
              );
            }

            return null;
          })}
        </>
      ) : (
        <ErrorMessage />
      )}
    </div>
  );
};
