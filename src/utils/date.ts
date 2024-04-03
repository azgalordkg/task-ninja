import { TFunction } from "i18next";
import moment, { Moment } from "moment";
import DeviceTimeFormat from "react-native-device-time-format";

export const getToday = () => {
  return new Date();
};

export const getDateFromToday = (count: number) => {
  return new Date(getToday().getTime() + count * 24 * 60 * 60 * 1000);
};

export const formatDate = (
  date: Date | number,
  format: string,
  locale?: string,
) => {
  return moment(date)
    .locale(locale || "en")
    .format(format);
};

export const roundAndExtendTimeRange = (defaultStartDate?: moment.Moment) => {
  const startDate = defaultStartDate || moment();

  const minuteRemainder = 10 - (startDate.minute() % 10);

  startDate.add(minuteRemainder, "minutes");

  return startDate.toDate();
};

export const isDateToday = (date: Moment) => {
  return date.isSame(getToday(), "day");
};

export const getValueForDateInput = (
  date: Date,
  t: TFunction,
  dateFormat: string,
  isTime?: boolean,
  locale?: string,
) => {
  if (!isTime) {
    if (isDateToday(moment(date))) {
      return t("TODAY");
    }
    if (moment(date).isSame(getDateFromToday(1), "day")) {
      return t("TOMORROW");
    }
  }

  return formatDate(date, dateFormat, locale);
};

export const isTodayWeekend = () => {
  const today = getToday();
  return today.getDay() === 0 || today.getDay() === 6;
};

export const getThisSaturday = () => {
  const today = getToday();
  const day = today.getDay();
  const diff = today.getDate() - day + (day === 0 ? -6 : 6);
  return new Date(today.setDate(diff));
};

export const getNextSaturday = () => {
  const thisSaturday = getThisSaturday();
  return new Date(thisSaturday.setDate(thisSaturday.getDate() + 7));
};

export const getUserTimeFormat = async () => {
  const using24HourFormat = await DeviceTimeFormat.is24HourFormat();

  if (using24HourFormat) {
    return { locale: "en_GB", format: "HH:mm" };
  } else {
    return { locale: "en_US", format: "hh:mm A" };
  }
};
