import { StyleSheet } from "react-native";

import { SchemeType } from "@/types";

const styles = (theme: SchemeType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingVertical: 30,
    },
    label: {
      color: theme.TEXT.PRIMARY,
      marginBottom: 12,
      textTransform: "uppercase",
    },
    content: {
      flexGrow: 1,
      rowGap: 30,
    },
  });

export default styles;
