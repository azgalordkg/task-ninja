import { StyleSheet } from "react-native";

import { SchemeType } from "@/types";

const styles = (theme: SchemeType) =>
  StyleSheet.create({
    titleContainer: {
      justifyContent: "space-between",
      paddingHorizontal: 22,
      paddingVertical: 6,
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 6,
    },
    title: {
      fontWeight: "400",
      fontSize: 14,
      lineHeight: 17,
      color: theme.TEXT.SECONDARY,
    },
  });

export default styles;
