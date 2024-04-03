import moment from "moment";
import { useEffect } from "react";

export const useDayChangeListener = (callback: () => void) => {
  useEffect(() => {
    const now = moment();
    const timeToNextDay = moment(now).add(1, "days").startOf("day").diff(now);

    const timer = setTimeout(() => {
      callback();
    }, timeToNextDay);

    return () => clearTimeout(timer);
  }, [callback]);
};
