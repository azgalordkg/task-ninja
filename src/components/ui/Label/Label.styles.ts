import { StyleSheet } from "react-native";

import { COLORS } from "@/constants";
import { addAlpha } from "@/utils";

const styles = (bgColor: string) =>
  StyleSheet.create({
    whiteWrapper: {
      backgroundColor: COLORS.WHITE,
      borderRadius: 6,
    },
    tabsContainer: {
      height: 27,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: 6,
      paddingHorizontal: 10,
      backgroundColor: addAlpha(bgColor, 0.65),
      borderRadius: 6,
    },
    title: {
      fontWeight: "600",
      fontSize: 12,
      color: COLORS.BLACK_DARK,
    },
  });

export default styles;
