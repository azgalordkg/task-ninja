import React, { FC } from "react";
import { useController } from "react-hook-form";
import { Switch, Text, View } from "react-native";

import { COLORS } from "@/constants";
import { useThemeContext } from "@/context/hooks";

import styles from "./Checkbox.styles";
import { Props } from "./Checkbox.types";

export const Checkbox: FC<Props> = ({
  label,
  onValueChange,
  control,
  defaultValue,
  name,
}) => {
  const { theme } = useThemeContext();
  const style = styles(theme);
  const { field } = useController({
    control,
    defaultValue,
    name,
  });

  return (
    <View style={style.container}>
      <Switch
        trackColor={{ false: COLORS.GREY_LIGHT, true: COLORS.GREEN }}
        thumbColor={COLORS.WHITE}
        ios_backgroundColor={COLORS.GREY}
        value={field.value as boolean}
        onValueChange={onValueChange}
      />
      <Text style={style.text}>{label}</Text>
    </View>
  );
};
