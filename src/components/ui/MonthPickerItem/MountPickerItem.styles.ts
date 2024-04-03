import { Dimensions, StyleSheet } from "react-native";

import { COLORS } from "@/constants";
import { SchemeType } from "@/types";

const styles = (theme: SchemeType, isDark: boolean, isSmallScreen: boolean) =>
  StyleSheet.create({
    contentWrapper: {
      marginTop: isSmallScreen ? 16 : 20,
    },
    yearTitle: {
      fontSize: isSmallScreen ? 14 : 16,
      lineHeight: 16,
      fontWeight: "600",
      color: theme.TEXT.PRIMARY,
    },
    monthContainer: {
      marginTop: isSmallScreen ? 8 : 12,
      flexWrap: "wrap",
      flexDirection: "row",
      justifyContent: "space-between",
      rowGap: isSmallScreen ? 8 : 10,
      columnGap: isSmallScreen ? 8 : 10,
    },
    monthItem: {
      height: isSmallScreen ? 32 : 34,
      alignItems: "center",
      justifyContent: "center",
      width: Dimensions.get("window").width / 4 - 20,
      paddingHorizontal: 12,
      paddingVertical: isSmallScreen ? 6 : 8,
      borderWidth: 1,
      borderRadius: 10,
      borderColor: isDark ? theme.BORDERS.PRIMARY : COLORS.GREY_LIGHT,
    },
    monthText: {
      fontSize: 14,
      color: theme.TEXT.PRIMARY,
    },
    selectedMonthText: {
      color: !isDark ? COLORS.WHITE : theme.TEXT.PRIMARY,
    },
    selectedMonthItem: {
      backgroundColor: theme.BUTTONS.PRIMARY,
      borderColor: theme.BUTTONS.PRIMARY,
    },
    todayMonthText: {
      color: theme.TEXT.ACCENT,
    },
    disabledMonthText: {
      color: theme.TEXT.SECONDARY,
    },
  });

export default styles;
