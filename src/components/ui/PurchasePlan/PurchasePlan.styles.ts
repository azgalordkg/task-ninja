import { StyleSheet } from "react-native";

import { SchemeType } from "@/types";

const styles = (
  containerWidth: number,
  theme: SchemeType,
  isActive?: boolean,
) =>
  StyleSheet.create({
    container: {
      borderWidth: 2,
      borderColor: isActive ? theme.BUTTONS.PRIMARY : "transparent",
      width: containerWidth,
      alignItems: "center",
      rowGap: 4,
      paddingVertical: 20,
      paddingHorizontal: 2,
      borderRadius: 10,
    },
    duration: {
      color: theme.TEXT.PRIMARY,
      fontSize: 12,
      textAlign: "center",
    },
    price: {
      color: theme.TEXT.PRIMARY,
      fontSize: 16,
      fontWeight: "600",
      textAlign: "center",
    },
    description: {
      color: theme.TEXT.SECONDARY,
      fontSize: 12,
      textAlign: "center",
    },
    saveWrapper: {
      backgroundColor: theme.BACKGROUND.PRIMARY,
      borderRadius: 4,
      paddingVertical: 2,
      paddingHorizontal: 6,
      position: "absolute",
      top: -6,
      left: "50%",
      transform: [{ translateX: -23 }],
    },
    save: {
      color: theme.TEXT.PRIMARY,
      fontWeight: "600",
      fontSize: 8,
    },
  });

export default styles;
