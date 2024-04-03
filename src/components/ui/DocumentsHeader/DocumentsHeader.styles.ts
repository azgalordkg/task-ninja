import { StyleSheet } from "react-native";

import { SchemeType } from "@/types";

const styles = (theme: SchemeType) =>
  StyleSheet.create({
    titleWrapper: {
      alignItems: "center",
      flexDirection: "row",
      borderBottomWidth: 1,
      borderColor: theme.BORDERS.PRIMARY,
      paddingVertical: 20,
    },
    title: {
      flexGrow: 1,
      maxWidth: "95%",
      color: theme.TEXT.PRIMARY,
      fontSize: 16,
      fontWeight: "600",
    },
  });

export default styles;
