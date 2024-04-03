import { StyleSheet } from "react-native";

import { SchemeType } from "@/types";

const styles = (theme: SchemeType) =>
  StyleSheet.create({
    container: {
      marginTop: 30,
    },
    dayTitle: {
      marginHorizontal: 20,
      marginBottom: 12,
      fontWeight: "600",
      fontSize: 14,
      color: theme.TEXT.PRIMARY,
    },
    tasksWrapper: {
      rowGap: 8,
    },
  });

export default styles;
