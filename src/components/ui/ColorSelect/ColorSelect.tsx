import React, { FC } from "react";
import { TouchableOpacity, View } from "react-native";

import { CheckMark } from "@/components/icons";
import { COLORS } from "@/constants";
import { useThemeContext } from "@/context/hooks";

import styles from "./ColorSelect.styles";
import { Props } from "./ColorSelect.types";

export const ColorSelect: FC<Props> = ({
  active,
  color,
  onPress,
  checkMarkColor = COLORS.WHITE,
}) => {
  const { theme } = useThemeContext();
  const style = styles(active, color, theme);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.75}
      style={style.outer}>
      <View style={style.inner}>
        {active && <CheckMark width={32} height={32} color={checkMarkColor} />}
      </View>
    </TouchableOpacity>
  );
};
