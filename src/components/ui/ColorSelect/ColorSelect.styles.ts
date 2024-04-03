import { StyleSheet } from "react-native";

import { SchemeType } from "@/types";

const styles = (active: boolean, color: string, theme: SchemeType) =>
  StyleSheet.create({
    outer: {
      borderWidth: 2,
      borderColor: active ? theme.TEXT_PRIMARY : color,
      backgroundColor: active ? "transparent" : color,
      width: 32,
      height: 32,
      borderRadius: 50,
      justifyContent: "center",
      alignItems: "center",
    },
    inner: {
      backgroundColor: color,
      width: 32,
      height: 32,
      borderRadius: 50,
      justifyContent: "center",
      alignItems: "center",
    },
  });

export default styles;
