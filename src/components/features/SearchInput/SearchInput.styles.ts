import { StyleSheet } from "react-native";

import { SchemeType } from "@/types";
import { addAlpha } from "@/utils";

const styles = (theme: SchemeType) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-end",
      flexGrow: 1,
    },
    inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      columnGap: 8,
      paddingHorizontal: 8,
      flexGrow: 1,
      height: 40,
      backgroundColor: addAlpha(theme.INPUTS.SECONDARY, 0.25),
      borderRadius: 6,
      marginRight: 10,
    },
    input: {
      flex: 1,
      color: theme.TEXT.PRIMARY,
      fontSize: 16,
    },
    button: {
      height: 40,
      width: 40,
      justifyContent: "center",
      alignItems: "center",
    },
  });

export default styles;
