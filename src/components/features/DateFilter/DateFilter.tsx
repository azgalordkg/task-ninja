import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";

import { CloseCircle } from "@/components/icons";
import { COLORS } from "@/constants";
import { useThemeContext } from "@/context/hooks";
import {
  getDateFromToday,
  getNextSaturday,
  getThisSaturday,
  getToday,
  isTodayWeekend,
  vibrate,
} from "@/utils";
import { renderTitle } from "@/utils/date-filters";

import { CustomButton } from "../../ui";
import styles from "./DateFilter.styles";
import { Props } from "./DateFilter.types";

export const DateFilter: FC<Props> = ({ currentStartDate, onPressHandler }) => {
  const { t } = useTranslation();
  const { isDark } = useThemeContext();

  const getCurrentValue = (startDate: Date | null) => {
    if (!currentStartDate && !startDate) {
      return true;
    }
    return currentStartDate?.getDate() === startDate?.getDate();
  };

  return (
    <View style={styles.dateButtonsWrapper}>
      {Array.from({ length: 4 }).map((_, index) => {
        let startDate: Date | null = null;
        if (index === 0) {
          startDate = getToday();
        } else if (index === 1) {
          startDate = getDateFromToday(1);
        } else if (index === 2) {
          startDate = isTodayWeekend() ? getNextSaturday() : getThisSaturday();
        }

        const isCurrent = getCurrentValue(startDate);

        const onDateChange = () => {
          vibrate("selection");
          if (currentStartDate) {
            startDate?.setHours(
              currentStartDate.getHours(),
              currentStartDate.getMinutes(),
            );
          }

          onPressHandler("startDate", startDate);
        };

        const { title, color, isNoDate } = renderTitle(t, index, isDark);
        let textColor = isNoDate ? COLORS.BLACK_DARK : COLORS.WHITE;

        if (!isDark && isNoDate) {
          textColor = COLORS.WHITE;
        }

        return (
          <CustomButton
            key={index}
            icon={isNoDate ? CloseCircle : undefined}
            textColor={textColor}
            bgColor={color}
            height={30}
            iconHeight={16}
            iconWidth={16}
            type={isCurrent ? "filled" : "outlined"}
            borderWidth={1}
            paddingHorizontal={5}
            fontSize={14}
            onPress={onDateChange}>
            {title}
          </CustomButton>
        );
      })}
    </View>
  );
};
