import { StyleSheet } from "react-native";

import { COLORS } from "@/constants";
import { SchemeType } from "@/types";

const styles = (theme: SchemeType) =>
  StyleSheet.create({
    mainWrapper: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: theme.BACKGROUND.SECONDARY,
      paddingHorizontal: 20,
    },
    logoContainer: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      columnGap: 8,
      marginBottom: 20,
    },
    logoText: {
      color: theme.TEXT.ACCENT,
      fontWeight: "600",
      fontSize: 16,
      lineHeight: 19,
    },
    authTitle: {
      color: theme.TEXT.PRIMARY,
      lineHeight: 16,
      marginBottom: 60,
      width: "100%",
      textAlign: "center",
    },
    forgotPassword: {
      fontSize: 16,
      lineHeight: 19,
      color: theme.TEXT.ACCENT,
      width: "100%",
      textAlign: "right",
    },
    formWrapper: {
      rowGap: 30,
    },
    authSwitch: {
      borderRadius: 12,
      flexDirection: "row",
      columnGap: 20,
      backgroundColor: theme.BACKGROUND.NEUTRAL,
      padding: 4,
    },
    switchItem: {
      borderRadius: 8,
      width: "47%",
      paddingVertical: 8,
      paddingHorizontal: 10,
    },
    authSwitchText: {
      textAlign: "center",
      width: "100%",
      fontSize: 18,
      lineHeight: 21,
      color: theme.TEXT.PRIMARY,
    },
    authSwitchTextActive: {
      color: COLORS.WHITE,
    },
    authSwitchSmallText: {
      fontSize: 14,
    },
    authSwitchItemActive: {
      backgroundColor: theme.BACKGROUND.ACCENT,
    },
    formContainer: {
      rowGap: 20,
    },
    continueContainer: {
      flexDirection: "row",
      columnGap: 10,
      alignItems: "center",
    },
    divider: {
      height: 1,
      flexGrow: 1,
      backgroundColor: theme.BORDERS.PRIMARY,
    },
    continueTitle: {
      textAlign: "center",
      color: theme.TEXT.SECONDARY,
      lineHeight: 17,
    },
    authVariantContainer: {
      rowGap: 12,
    },
  });

export default styles;
