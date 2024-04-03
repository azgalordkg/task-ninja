import { StyleSheet } from "react-native";

import { SchemeType } from "@/types";
import { addShadow } from "@/utils";

const styles = (theme: SchemeType) =>
  StyleSheet.create({
    header: {
      paddingHorizontal: 20,
      paddingVertical: 12,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-end",
      backgroundColor: theme.BACKGROUND.PRIMARY,
      ...addShadow({
        shadowOpacity: 0.05,
        width: 1,
        height: 1,
        shadowRadius: 1,
        elevation: 1,
      }),
    },
    iconContainer: {
      flexGrow: 1,
      flexDirection: "row",
      alignItems: "center",
      columnGap: 16,
    },
    search: {
      flexGrow: 1,
    },
    screenTitle: {
      color: theme.TEXT.PRIMARY,
      fontSize: 20,
      fontWeight: "600",
    },
  });

export default styles;
