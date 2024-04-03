import { StyleSheet } from "react-native";

import { SchemeType } from "@/types";

const styles = (theme: SchemeType) =>
  StyleSheet.create({
    authModalContainer: {
      marginTop: 30,
      rowGap: 20,
    },
    description: {
      color: theme.TEXT.SECONDARY,
      fontSize: 16,
      lineHeight: 19,
    },
    backToLoginLink: {
      fontSize: 16,
      lineHeight: 19,
      color: theme.TEXT.ACCENT,
      textAlign: "right",
    },
  });

export default styles;
