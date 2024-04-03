import { StyleSheet } from "react-native";

import { SchemeType } from "@/types";

const styles = (theme: SchemeType) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    mainWrapper: {
      flex: 1,
      alignItems: "center",
    },
    items: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
      paddingVertical: 40,
    },
    title: {
      fontSize: 22,
      fontWeight: "600",
      color: theme.TEXT.PRIMARY,
      marginBottom: 10,
    },
    subTitle: {
      fontSize: 18,
      color: theme.TEXT.PRIMARY,
      marginBottom: 20,
    },
    cancel: {
      color: theme.TEXT.SECONDARY,
      fontSize: 14,
    },
    description: {
      marginTop: "auto",
      marginBottom: 30,
      color: theme.TEXT.PRIMARY,
      fontSize: 12,
      lineHeight: 21,
    },
    planWrapper: {
      backgroundColor: theme.INPUTS.PRIMARY,
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      borderRadius: 10,
    },
  });

export default styles;
