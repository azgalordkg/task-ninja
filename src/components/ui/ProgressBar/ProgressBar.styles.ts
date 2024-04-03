import { StyleSheet } from "react-native";

import { COLORS } from "@/constants";

const styles = (progress: number, isEmptyList: boolean) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      opacity: isEmptyList ? 0 : 1,
    },
    wrapper: {
      marginRight: 8,
      width: 60,
      height: 16,
      borderWidth: 2,
      borderColor: COLORS.WHITE,
      borderRadius: 8,
      padding: 2,
    },
    progress: {
      height: 8,
      borderTopLeftRadius: 4,
      borderBottomLeftRadius: 4,
      borderTopRightRadius: progress >= 100 ? 4 : 0,
      borderBottomEndRadius: progress >= 100 ? 4 : 0,
      backgroundColor: COLORS.WHITE,
    },
    progressBackground: {
      height: 8,
      borderRadius: 4,
      width: "100%",
      backgroundColor: COLORS.WHITE,
      opacity: 0.25,
      position: "absolute",
      zIndex: -1,
      top: 2,
      left: 2,
    },
    text: {
      color: COLORS.WHITE,
      fontWeight: "600",
    },
  });

export default styles;
