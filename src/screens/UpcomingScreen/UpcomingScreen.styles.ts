import { Dimensions, StyleSheet } from "react-native";

import { SchemeType } from "@/types";

const styles = (theme: SchemeType) =>
  StyleSheet.create({
    contentWrapper: {
      marginTop: 20,
      borderBottomWidth: 1,
      borderColor: theme.BORDERS.PRIMARY,
    },
    headerStyle: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 20,
      marginHorizontal: 20,
    },
    todayText: {
      fontWeight: "500",
      fontSize: 18,
      lineHeight: 22,
      color: theme.TEXT.ACCENT,
    },
    selectContainer: {
      flexDirection: "row",
      columnGap: 6,
      alignItems: "center",
    },
    selectDateText: {
      fontWeight: "500",
      fontSize: 18,
      lineHeight: 22,
      color: theme.TEXT.PRIMARY,
    },

    weekdayContainer: {
      flexDirection: "row",
      paddingHorizontal: 20,
      marginBottom: 12,
    },
    weekdayText: {
      width: Dimensions.get("window").width / 7,
      fontSize: 14,
      lineHeight: 17,
      color: theme.TEXT.SECONDARY,
    },
    dayContainerStyle: {
      height: 30,
      paddingVertical: 0,
      backgroundColor: "transparent",
      borderColor: "transparent",
      borderWidth: 1,
    },
    dayTextStyle: {
      fontSize: 14,
      lineHeight: 14,
      color: theme.TEXT.PRIMARY,
    },
    todayTextStyle: {
      color: theme.TEXT.ACCENT,
    },
    nonTouchableDayTextStyle: {
      fontSize: 14,
      lineHeight: 14,
      color: theme.TEXT.SECONDARY,
    },
    activeDayContainerStyle: {
      borderStyle: "solid",
      backgroundColor: "transparent",
      borderWidth: 1,
      borderColor: theme.BUTTONS.PRIMARY,
    },
    activeDayTextStyle: {
      color: theme.TEXT.PRIMARY,
    },
    endDateContainerStyle: {
      borderBottomRightRadius: 4,
      borderTopRightRadius: 4,
    },
    startDateContainerStyle: {
      borderBottomLeftRadius: 4,
      borderTopLeftRadius: 4,
    },
    taskListWrapper: {
      paddingBottom: 100,
      rowGap: 6,
      flex: 1,
    },
    buttonWrapper: {
      backgroundColor: theme.BUTTONS.PRIMARY,
      width: 60,
      height: 60,
      borderRadius: 30,
      alignItems: "center",
      justifyContent: "center",
    },
    buttonContainer: {
      zIndex: 5,
      position: "absolute",
      bottom: 20,
      right: 20,
    },
  });

export default styles;
