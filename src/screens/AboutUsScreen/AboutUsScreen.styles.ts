import { StyleSheet } from "react-native";

import { SchemeType } from "@/types";

const styles = (theme: SchemeType) =>
  StyleSheet.create({
    mainWrapper: {
      flex: 1,
    },
    contentContainer: {
      marginTop: 30,
      rowGap: 12,
      flex: 1,
    },
    screenTitle: {
      fontWeight: "600",
      fontSize: 18,
      color: theme.TEXT.PRIMARY,
    },
    screenDescription: {
      fontWeight: "500",
      fontSize: 12,
      lineHeight: 21,
      color: theme.TEXT.PRIMARY,
    },
    footerContainer: {
      flexGrow: 1,
      justifyContent: "flex-end",
    },
  });

export default styles;
