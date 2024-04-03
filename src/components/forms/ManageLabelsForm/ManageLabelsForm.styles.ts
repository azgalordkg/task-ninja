import { StyleSheet } from "react-native";

import { SchemeType } from "@/types";

const styles = (theme: SchemeType, isLimit?: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 30,
    },
    itemsWrapper: {
      paddingVertical: 8,
      width: "100%",
      flexGrow: 1,
    },
    message: {
      marginBottom: 18,
      fontSize: 16,
      color: theme.TEXT.SECONDARY,
    },
    total: {
      fontSize: 16,
      color: isLimit ? theme.TEXT.PRIMARY : theme.TEXT.SECONDARY,
      marginBottom: 8,
    },
    totalCount: {
      fontWeight: isLimit ? "700" : "400",
      color: isLimit ? theme.BUTTONS.PRIMARY : theme.TEXT.SECONDARY,
    },
    buttonContainer: {
      marginBottom: 20,
    },
  });

export default styles;
