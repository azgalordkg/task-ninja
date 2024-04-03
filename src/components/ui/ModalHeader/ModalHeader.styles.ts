import { StyleSheet } from "react-native";

import { SchemeType } from "@/types";

const styles = (
  theme: SchemeType,
  titleFontSize: number,
  contentBackgroundColor?: string,
  withPadding?: boolean,
) =>
  StyleSheet.create({
    closerWrapper: {
      width: "100%",
      alignItems: "center",
      marginBottom: 20,
    },
    closer: {
      height: 3,
      width: 35,
      backgroundColor: theme.ICONS.SECONDARY,
      borderRadius: 3,
    },
    header: {
      paddingHorizontal: withPadding ? 20 : 0,
      paddingBottom: 18,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    title: {
      width: "100%",
      color: theme.TEXT.PRIMARY,
      fontWeight: "600",
      zIndex: -1,
      left: withPadding ? 20 : 0,
      top: 2,
      position: "absolute",
      textAlign: "center",
      fontSize: titleFontSize,
    },
  });

export default styles;
