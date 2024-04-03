import { Dimensions, StyleSheet } from "react-native";

const styles = (
  isShowClearIcon?: boolean,
  isSecureInput?: boolean,
  color?: string,
  multiline?: boolean,
) =>
  StyleSheet.create({
    inputContainer: {
      display: "flex",
      flexDirection: "column",
      rowGap: 8,
      width: "100%",
    },
    input: {
      paddingVertical: 0,
      paddingRight: 30,
      width: isShowClearIcon || isSecureInput ? "82%" : "100%",
      color: color,
      minHeight: multiline ? Dimensions.get("window").height / 4 : "auto",
      ...(multiline ? { lineHeight: 18 } : {}),
      fontSize: 18,
    },
  });
export default styles;
