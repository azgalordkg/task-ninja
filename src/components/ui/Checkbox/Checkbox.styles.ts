import { StyleSheet } from "react-native";

import { SchemeType } from "@/types";

const styles = (theme: SchemeType) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 12,
    },
    text: {
      marginLeft: 8,
      color: theme.TEXT.PRIMARY,
      fontSize: 16,
    },
  });

export default styles;
