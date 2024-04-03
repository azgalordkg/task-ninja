import { StyleSheet } from "react-native";

import { COLORS } from "@/constants";

const getFontSize = (size: string) => {
  switch (size) {
    case "small":
      return 14;
    case "medium":
      return 16;
    case "large":
      return 18;
    default:
      return 16;
  }
};

const styles = (size: string) =>
  StyleSheet.create({
    text: {
      color: COLORS.RED,
      fontSize: getFontSize(size),
    },
  });

export default styles;
