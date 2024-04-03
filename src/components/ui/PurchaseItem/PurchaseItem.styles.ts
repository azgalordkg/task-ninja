import { StyleSheet } from "react-native";

import { SchemeType } from "@/types";

const styles = (containerWidth: number, theme: SchemeType) =>
  StyleSheet.create({
    container: {
      width: containerWidth,
      alignItems: "center",
      rowGap: 10,
    },
    iconWrapper: {
      width: 30,
      height: 30,
      backgroundColor: theme.INPUTS.PRIMARY,
      borderRadius: 15,
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      width: "85%",
      textAlign: "center",
      fontSize: 12,
      color: theme.TEXT.PRIMARY,
    },
  });

export default styles;
