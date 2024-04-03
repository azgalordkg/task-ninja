import { StyleSheet } from "react-native";

import { SchemeType } from "@/types";

const styles = (
  height: number,
  fontSize: number,
  theme: SchemeType,
  color?: string,
  disabled?: boolean,
) =>
  StyleSheet.create({
    button: {
      opacity: disabled ? 0.5 : 1,
      height,
      paddingHorizontal: 12,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1,
      borderColor: theme.BUTTONS.PRIMARY,
      borderRadius: 6,
      borderStyle: "dashed",
    },
    text: {
      fontSize,
      fontWeight: "600",
      color,
    },
    icon: {
      marginRight: 10,
    },
  });

export default styles;
