import { StyleSheet } from "react-native";

import { addShadow } from "@/utils";

import { Props } from "./CustomButton.types";

const styles = ({
  width,
  fullWidth,
  paddingHorizontal,
  height,
  fontSize,
  type,
  bgColor,
  textColor,
  borderWidth,
  disabled,
  orientation,
  borderRadius,
  withShadow,
}: Partial<Props>) => {
  const isFilled = type === "filled";
  const isOutlined = type === "outlined";
  const isClean = type === "clean";

  return StyleSheet.create({
    button: {
      borderRadius,
      flexDirection: "row",
      columnGap: 6,
      justifyContent: orientation,
      alignItems: "center",
      maxWidth: "100%",
      width: fullWidth ? "100%" : width,
      paddingHorizontal,
      height: height,
      backgroundColor: (isFilled && bgColor) || "transparent",
      borderWidth: (isOutlined && borderWidth) || 0,
      borderColor: (isOutlined && bgColor) || "transparent",
      opacity: (disabled && 0.3) || 1,
      ...(withShadow
        ? addShadow({ shadowRadius: 2, width: 0.5, height: 0.5 })
        : {}),
    },
    text: {
      fontWeight: "500",
      fontSize: fontSize,
      color:
        (isFilled && textColor) ||
        (isOutlined && bgColor) ||
        (isClean && textColor) ||
        "transparent",
    },
  });
};

export default styles;
