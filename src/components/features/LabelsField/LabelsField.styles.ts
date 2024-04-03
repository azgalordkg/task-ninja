import { StyleSheet } from "react-native";

import { SchemeType } from "@/types";

const styles = (theme: SchemeType) =>
  StyleSheet.create({
    button: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 2,
    },
    label: {
      paddingVertical: 3,
      marginRight: 10,
      fontSize: 18,
      color: theme.TEXT.SECONDARY,
    },
    tagsWrapper: {
      flexDirection: "row",
      columnGap: 8,
      rowGap: 8,
      flexWrap: "wrap",
      flex: 1,
    },
  });

export default styles;
