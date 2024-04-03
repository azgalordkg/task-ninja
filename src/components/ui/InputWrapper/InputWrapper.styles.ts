import { StyleSheet } from "react-native";

import { COLORS } from "@/constants";

const styles = (
  errorMessage?: string,
  borderColor?: string,
  backgroundColor?: string,
  multiline?: boolean,
  borderRadius?: number,
) =>
  StyleSheet.create({
    wrapper: {
      borderWidth: 1,
      borderColor: errorMessage ? COLORS.RED : borderColor,
      padding: 12,
      backgroundColor: backgroundColor,
      borderRadius,
      width: "100%",
      flexDirection: "row",
      alignItems: multiline ? "flex-start" : "center",
      minHeight: 48,
    },
    icon: {
      marginRight: 8,
    },
  });

export default styles;
