import React, { FC, PropsWithChildren } from "react";
import { Switch, Text, TouchableOpacity, View } from "react-native";

import { ArrowAngle } from "@/components/icons";
import { CustomCheckbox } from "@/components/ui";
import { COLORS } from "@/constants";
import { useThemeContext } from "@/context/hooks";
import { vibrate } from "@/utils";

import styles from "./MenuItem.styles";
import { Props } from "./MenuItem.types";

export const MenuItem: FC<PropsWithChildren<Props>> = ({
  children,
  onPress,
  isSwitcher,
  onToggleSwitch,
  value,
  color,
  icon = ArrowAngle,
  onPressIcon,
  prependIcon,
  backgroundColor,
  isFirst,
  isLast,
  isCheckbox,
  checked,
  onToggleCheckbox,
  prependIconColor,
  count,
}) => {
  const Icon = icon;
  const PrependIcon = prependIcon;
  const { theme } = useThemeContext();
  const style = styles(theme, isFirst, isLast, backgroundColor);
  const isShowCheckbox = isCheckbox && onToggleCheckbox;
  const onValueChangePress = (currentValue: boolean) => {
    vibrate();
    onToggleSwitch?.(currentValue);
  };

  const activeOpacity = onPressIcon && 1;

  return (
    <TouchableOpacity
      activeOpacity={0.75}
      disabled={!onPress}
      onPress={onPress}>
      <View style={style.mainWrapper}>
        {PrependIcon && (
          <PrependIcon
            style={style.prependIcon}
            color={prependIconColor || theme.BUTTONS.PRIMARY}
          />
        )}
        <Text style={style.text}>{children}</Text>

        {count !== undefined && <Text style={style.count}>{count}</Text>}
        {isSwitcher && (
          <Switch
            trackColor={{ false: COLORS.GREY_LIGHT, true: COLORS.GREEN }}
            thumbColor={COLORS.WHITE}
            ios_backgroundColor={COLORS.GREY_LIGHT}
            onValueChange={onValueChangePress}
            value={value}
          />
        )}
        {isShowCheckbox && (
          <CustomCheckbox
            checkedColor={theme.BUTTONS.PRIMARY}
            onPress={onToggleCheckbox}
            type="filled"
            checked={!!checked}
            defaultColor={COLORS.GREY_LIGHT}
            backgroundOpacity={0}
          />
        )}
        <TouchableOpacity activeOpacity={activeOpacity} onPress={onPressIcon}>
          {Icon && <Icon color={color || theme.ICONS.SECONDARY} />}
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};
