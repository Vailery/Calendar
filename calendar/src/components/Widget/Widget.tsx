import React, { useContext, useEffect, useState } from "react";
import { useClient } from "../../context/ClientProvider";
import { dateTransformation } from "../../services/dateFormatter";
import { ResizableBox } from "../templates/ResizableBox/ResizableBox";
import { MediumHorizontalWidget } from "./MediumHorizontalWidget";
import { SmallWidget } from "./SmallWidget";
import { MediumVerticalWidget } from "./MediumVerticalWidget";
import { LargeWidget } from "./LargeWidget";
import styled from "styled-components";

interface IDate {
  dateTime: string;
}

export interface IEvent {
  summary: string;
  description: string;
  end: IDate;
  start: IDate;
}

export interface IEvents {
  events: IEvent[];
}

export const Widget = React.memo(() => {
  const { client } = useClient();
  const [events, setEvents] = useState<IEvent[]>([]);
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);

  const listUpcomingEvents = () => {
    client.client.calendar.events
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

        const date = new Date().toString();
        const formattedDate = dateTransformation(date);

        const result = events.filter(
          (el: IEvent) =>
            dateTransformation(el.start.dateTime) === formattedDate
        );

        setEvents(result);
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
      <Main>
        {x === 155 && y === 155 ? (
          <SmallWidget events={events} />
        ) : x === 329 && y === 155 ? (
          <MediumHorizontalWidget events={events} />
        ) : x === 155 && y === 345 ? (
          <MediumVerticalWidget events={events} />
        ) : (
          <LargeWidget events={events} />
        )}
      </Main>
    </ResizableBox>
  );
});

const Main = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.widgetBackground};
  border-radius: 21.67px;
`;
