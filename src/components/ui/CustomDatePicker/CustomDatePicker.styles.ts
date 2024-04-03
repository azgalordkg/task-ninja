import { StyleSheet } from "react-native";

import { SchemeType } from "@/types";

const styles = (
  theme: SchemeType,
  keyboardHeight: number,
  inputWidth?: string | number,
) =>
  StyleSheet.create({
    container: {
      width: inputWidth || "auto",
      borderRadius: 12,
      backgroundColor: theme.BACKGROUND.NEUTRAL,
    },
    button: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 2,
    },
    modalStyleIOS: {
      paddingBottom: keyboardHeight,
    },
  });

export default styles;
