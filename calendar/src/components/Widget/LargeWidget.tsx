import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { dateFormatter } from "../../services/dateFormatter";
import { Calendar } from "../Calendar/Calendar";
import { Day } from "../Day/Day";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { Event } from "../Event/Event";
import { IEvents } from "./Widget";
import styles from "./Widget.module.css";

export const LargeWidget = ({ events }: IEvents) => {
  const { t } = useTranslation();
  return (
    <div className={styles.LargeWidget}>
      <div className={styles.calendar}>
        <Day />

        <Calendar />
      </div>

      <Today>{t("day")}</Today>
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

            return null;
          })}
        </div>
      ) : (
        <ErrorMessage />
      )}
    </div>
  );
};

const Today = styled.p`
  font-family: "SF-Medium";
  font-size: 12px;
  line-height: 14px;
  color: ${({ theme }) => theme.grayColor};
`;
