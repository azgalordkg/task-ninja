import { StyleSheet } from "react-native";

import { COLORS } from "@/constants";
import { SchemeType } from "@/types";

const styles = (theme: SchemeType, errorMessage?: string) =>
  StyleSheet.create({
    mainWrapper: {
      marginTop: 15,
    },
    textContainer: {
      marginBottom: 19,
      rowGap: 4,
    },
    colorTitle: {
      color: errorMessage ? COLORS.RED : theme.TEXT.SECONDARY,
      fontSize: 16,
    },
    errorMessage: {
      color: COLORS.RED,
    },
    colorContainer: {
      paddingVertical: 30,
    },
    colorList: {
      flexDirection: "row",
      flexWrap: "wrap",
      rowGap: 18,
      columnGap: 21,
    },
  });

export default styles;
