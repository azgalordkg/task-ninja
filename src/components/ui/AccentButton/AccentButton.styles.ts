import { StyleSheet } from "react-native";

import { SchemeType } from "@/types";
const styles = (
  theme: SchemeType,
  isDoneDisabled?: boolean,
  isBold?: boolean,
  color?: string,
) =>
  StyleSheet.create({
    text: {
      fontWeight: isBold ? "700" : "500",
      color: color || theme.BUTTONS.PRIMARY,
      opacity: (isDoneDisabled && 0.3) || 1,
      fontSize: 16,
    },
    container: {
      padding: 4,
    },
  });

export default styles;
