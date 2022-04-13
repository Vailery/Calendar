import { useEffect, useState } from "react";
import { useClient } from "../../context/ClientProvider";
import { dateFormatter } from "../../services/dateFormatter";
import { Day } from "../Day/Day";
import { Event } from "../Event/Event";
import { ResizableBox } from "../templates/ResizableBox/ResizableBox";
import styles from "./Calendar.module.css";

interface IDate {
  dateTime: string;
}

interface IEvent {
  summary: string;
  eventType: string;
  end: IDate;
  start: IDate;
}

export const Calendar = () => {
  const client = useClient();
  const [events, setEvents] = useState<IEvent[]>([]);
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);

  const listUpcomingEvents = () => {
    client.client.client.calendar.events
      .list({
        calendarId: "primary",
        timeMin: new Date().toISOString(),
        showDeleted: false,
        singleEvents: true,
        maxResults: 10,
        orderBy: "startTime",
      })
      .then((response: any) => {
        const events = response.result.items;
        setEvents(events);
      });
  };

  useEffect(() => {
    listUpcomingEvents();
  }, []);

  return (
    <ResizableBox
      onSizeChange={(x: number, y: number) => {
        setX(x);
        setY(y);
      }}
      gridY={[155, 190]}
      gridX={[155, 174]}
    >
      <div className={styles.main}>
        <Day />
        {events.length !== 0 ? (
          <>
            {events.map((event, index) => {
              const time = dateFormatter(
                event.start.dateTime,
                event.end.dateTime
              );
              return (
                <Event
                  key={event.summary + index}
                  name={event.summary}
                  status={event.eventType}
                  time={time}
                />
              );
            })}
          </>
        ) : (
          <p className={styles.error}>You dont have events!</p>
        )}
      </div>
    </ResizableBox>
  );
};
