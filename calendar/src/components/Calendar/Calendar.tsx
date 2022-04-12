import { useEffect, useState } from "react";
import { useClient } from "../../services/ClientProvider";
import { dateFormatter } from "../../services/dateFormatter";
import { Day } from "../Day/Day";
import { Event } from "../Event/Event";
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
        console.log(events);
        setEvents(events);
      });
  };

  useEffect(() => {
    listUpcomingEvents();
  }, []);

  return (
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

      <div className={styles.resizer}></div>
    </div>
  );
};
