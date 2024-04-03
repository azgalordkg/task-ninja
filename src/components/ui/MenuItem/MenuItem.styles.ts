import { StyleSheet } from "react-native";

import { SchemeType } from "@/types";

const styles = (
  theme: SchemeType,
  isFirst?: boolean,
  isLast?: boolean,
  backgroundColor?: string,
) =>
  StyleSheet.create({
    mainWrapper: {
      paddingHorizontal: 16,
      backgroundColor: backgroundColor || theme.BACKGROUND.NEUTRAL,
      flexDirection: "row",
      width: "100%",
      alignItems: "center",
      justifyContent: "space-between",
      paddingVertical: 16,
      borderTopLeftRadius: isFirst ? 12 : 0,
      borderTopRightRadius: isFirst ? 12 : 0,
      borderBottomLeftRadius: isLast ? 12 : 0,
      borderBottomRightRadius: isLast ? 12 : 0,
      borderBottomWidth: !isLast ? 1 : 0,
      borderColor: theme.BORDERS.PRIMARY,
    },
    prependIcon: {
      marginRight: 10,
    },
    text: {
      flexGrow: 1,
      color: theme.TEXT.PRIMARY,
      fontSize: 18,
    },
    count: {
      color: theme.ICONS.SECONDARY,
      fontSize: 16,
    },
  });

export default styles;
