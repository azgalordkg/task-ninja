import React, { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { Checkbox, CheckMark } from "@/components/icons";
import { COLORS } from "@/constants";
import { useThemeContext } from "@/context/hooks";
import { addAlpha, capitalizeFirstLetter } from "@/utils";

import styles from "./ThemeItem.styles";
import { Props } from "./ThemeItem.types";

export const ThemeItem: FC<Props> = ({
  title,
  headerBackgroundColor,
  bodyBackgroundColor,
  titleColor,
  isActive,
  onPress,
}) => {
  const style = styles({
    headerBackgroundColor,
    bodyBackgroundColor,
    titleColor,
  });
  const { theme } = useThemeContext();

  return (
    <TouchableOpacity
      style={style.container}
      activeOpacity={0.85}
      onPress={onPress}>
      <View style={style.header}>
        <Text style={style.title}>{capitalizeFirstLetter(title)}</Text>
      </View>
      <View style={style.body}>
        <Checkbox color={addAlpha(COLORS.GREY_LIGHT, 0.2)} />
        <View style={style.contentMock}>
          <View style={style.contentMockItem} />
          <View style={style.contentMockItem} />
          <View style={[style.contentMockItem, style.shortItem]} />
        </View>
        {isActive && <CheckMark color={theme.BUTTONS.PRIMARY} />}
      </View>
    </TouchableOpacity>
  );
};
