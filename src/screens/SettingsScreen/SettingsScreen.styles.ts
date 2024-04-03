import { StyleSheet } from "react-native";

import { SchemeType } from "@/types";

const styles = (theme: SchemeType) =>
  StyleSheet.create({
    mainWrapper: {
      flex: 1,
      paddingHorizontal: 20,
      paddingBottom: 20,
    },
    listWrapper: {
      paddingTop: 30,
      flexGrow: 1,
    },
    userEmail: {
      width: "100%",
      textAlign: "center",
      marginTop: 12,
      color: theme.TEXT.PRIMARY,
    },
  });

export default styles;
