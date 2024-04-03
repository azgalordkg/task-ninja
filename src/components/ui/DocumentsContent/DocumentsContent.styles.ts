import { StyleSheet } from "react-native";

import { SchemeType } from "@/types";

const styles = (theme: SchemeType) =>
  StyleSheet.create({
    content: {
      paddingVertical: 12,
      color: theme.TEXT.PRIMARY,
    },
  });

export default styles;
