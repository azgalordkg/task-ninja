import { StyleSheet } from "react-native";

import { SchemeType } from "@/types";

const styles = (theme: SchemeType) =>
  StyleSheet.create({
    headerWrapper: {
      paddingHorizontal: 20,
    },
    container: {
      paddingBottom: 60,
      paddingTop: 18,
      borderTopLeftRadius: 14,
      borderTopRightRadius: 14,
      backgroundColor: theme.BACKGROUND.SECONDARY,
    },
    content: {
      paddingHorizontal: 20,
      borderTopWidth: 1,
      borderColor: theme.BORDERS.PRIMARY,
    },
  });

export default styles;
