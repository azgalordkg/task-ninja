import { StyleSheet } from "react-native";

import { SchemeType } from "@/types";

const styles = (theme: SchemeType) =>
  StyleSheet.create({
    mainWrapper: {
      flex: 1,
    },
    container: {
      paddingTop: 20,
      flex: 1,
    },
    update: {
      paddingBottom: 20,
      color: theme.TEXT.SECONDARY,
      fontSize: 12,
    },
  });

export default styles;
