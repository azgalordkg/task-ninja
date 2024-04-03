import moment from "moment/moment";
import React, { FC, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";

import {
  ExtendedModal,
  ModalComponentWrapper,
  MonthPickerItem,
} from "@/components/ui";

import styles from "./MonthPickerModal.styles";
import { Props } from "./MonthPickerModal.types";

export const MonthPickerModal: FC<Props> = ({
  visible,
  onPressDismiss,
  onDateChange,
  selectedMonth,
}) => {
  const {
    i18n: { language },
    t,
  } = useTranslation();
  const months = useMemo(
    () =>
      Array.from({ length: 12 }).map((_, index) =>
        moment().month(index).locale(language).format("MMM"),
      ),
    [language],
  );
  const today = moment();

  const isDisabled =
    today.isSame(moment(+selectedMonth), "month") &&
    today.isSame(moment(+selectedMonth), "year");

  const monthList = useMemo(() => {
    const currentYear = today.year();

    return Array.from({ length: 3 }).map((_, index) => {
      const year = currentYear + index;

      const list = months.map((monthName, monthIndex) => {
        const date = moment(today).year(Number(year)).month(monthIndex).date(1);

        return { name: monthName, value: date.toISOString() };
      });

      return { [year]: list };
    });
  }, [today.date()]);

  const handleDatePress = useCallback((date: string) => {
    onDateChange(moment(date).toDate());
  }, []);

  return (
    <ExtendedModal onModalClose={onPressDismiss} isVisible={visible}>
      <ModalComponentWrapper
        title={`${t("SELECT_MONTH")}`}
        onRequestClose={onPressDismiss}
        isDoneDisabled={isDisabled}
        doneText={`${t("TODAY")}`}>
        <View style={styles.container}>
          {monthList.map(monthItem => (
            <MonthPickerItem
              key={Object.keys(monthItem)[0]}
              monthItem={monthItem}
              handleDatePress={handleDatePress}
              selectedMonth={selectedMonth}
            />
          ))}
        </View>
      </ModalComponentWrapper>
    </ExtendedModal>
  );
};
