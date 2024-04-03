import React, { FC, PropsWithChildren } from "react";
import { Text, TouchableOpacity } from "react-native";

import { COLORS } from "@/constants";
import { useThemeContext } from "@/context/hooks";

import styles from "./DashedButton.styles";
import { Props } from "./DashedButton.types";

export const DashedButton: FC<PropsWithChildren<Props>> = ({
  children,
  onPress,
  variant = "small",
  icon,
  color = COLORS.GREY,
  disabled,
}) => {
  const { theme } = useThemeContext();
  let height = 32;
  let fontSize = 12;
  let iconWidth = 8;
  let iconHeight = 8;

  if (variant === "large") {
    height = 40;
    fontSize = 16;
    iconWidth = 12;
    iconHeight = 12;
  }
  const Icon = icon;
  const style = styles(height, fontSize, theme, color, disabled);

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={style.button}>
      {Icon && (
        <Icon
          style={style.icon}
          width={iconWidth}
          height={iconHeight}
          color={color}
        />
      )}
      <Text style={style.text}>{children}</Text>
    </TouchableOpacity>
  );
};
