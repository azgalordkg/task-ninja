import { StyleSheet } from "react-native";

import { SchemeType } from "@/types";
import { addAlpha } from "@/utils";

const styles = (theme: SchemeType) =>
  StyleSheet.create({
    warningWrapper: {
      marginTop: 10,
      padding: 16,
      borderRadius: 10,
      backgroundColor: addAlpha(theme.BACKGROUND.SECONDARY, 0.35),
    },
    warningText: {
      color: theme.TEXT.SECONDARY,
    },
  });

export default styles;
