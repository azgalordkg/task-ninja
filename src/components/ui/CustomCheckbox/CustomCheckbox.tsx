import React, { FC, useRef } from "react";
import { Animated, TouchableOpacity } from "react-native";

import { Checkbox } from "@/components/icons";
import { COLORS } from "@/constants";

import styles from "./CustomCheckbox.styles";
import { Props } from "./CustomCheckbox.types";

export const CustomCheckbox: FC<Props> = ({
  onPress,
  checked,
  checkedColor = COLORS.GREEN,
  defaultColor = COLORS.WHITE,
  size = 28,
  type,
  backgroundOpacity,
  checkmarkColor,
  isAnimated,
}) => {
  const style = styles(checkedColor);
  const scaleValue = useRef(new Animated.Value(1)).current;

  const handlePress = () => {
    Animated.spring(scaleValue, {
      toValue: 1.3,
      friction: 3,
      tension: 100,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      Animated.spring(scaleValue, {
        toValue: 1,
        friction: 3,
        tension: 100,
        useNativeDriver: true,
      }).start();
    }, 100);

    setTimeout(() => {
      onPress();
    }, 100);
  };

  return (
    <TouchableOpacity activeOpacity={1} onPress={handlePress}>
      <>
        <Checkbox
          checkmarkColor={checkmarkColor}
          color={checked ? checkedColor : defaultColor}
          checked={checked}
          width={size}
          height={size}
          type={type}
          backgroundOpacity={backgroundOpacity}
        />
        {isAnimated && (
          <Animated.View
            style={[style.background, { transform: [{ scale: scaleValue }] }]}
          />
        )}
      </>
    </TouchableOpacity>
  );
};
