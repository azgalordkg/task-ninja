import { TFunction } from "i18next";

import { COLORS } from "@/constants";
import { isTodayWeekend } from "@/utils/date";

export const renderTitle = (t: TFunction, index: number, isDark: boolean) => {
  switch (index) {
    case 0:
      return {
        title: t("TODAY"),
        color: COLORS.GREEN,
      };
    case 1:
      return {
        title: t("TOMORROW"),
        color: COLORS.YELLOW,
      };
    case 2:
      if (isTodayWeekend()) {
        return {
          title: t("NEXT_WEEKEND"),
          color: COLORS.BLUE,
        };
      }
      return {
        title: t("THIS_WEEKEND"),
        color: COLORS.BLUE,
      };
    default:
      return {
        title: t("NO_DATE"),
        color: isDark ? COLORS.WHITE : COLORS.GREY_MEDIUM,
        isNoDate: true,
      };
  }
};
