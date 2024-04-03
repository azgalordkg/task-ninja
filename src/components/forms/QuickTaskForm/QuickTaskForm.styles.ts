import { StyleSheet } from "react-native";

import { SchemeType } from "@/types";

const styles = (theme: SchemeType) =>
  StyleSheet.create({
    container: {
      padding: 10,
      borderRadius: 12,
      backgroundColor: theme.BACKGROUND.NEUTRAL,
      flexDirection: "row",
      columnGap: 14,
    },
    inputContainer: {
      width: "100%",
      rowGap: 10,
    },
    buttonWrapper: {
      flexDirection: "row",
      columnGap: 12,
    },
  });

export default styles;
