import React, { FC } from "react";
import { Animated, TouchableOpacity, View } from "react-native";

import { COLORS } from "@/constants";

import styles from "./ActionButton.styles";
import { Props } from "./ActionButton.types";

export const ActionButton: FC<Props> = ({
  scale,
  onPress,
  icon,
  backgroundColor = COLORS.RED,
}) => {
  const Icon = icon;

  return (
    <View style={styles.buttonsWrapper}>
      <TouchableOpacity
        activeOpacity={0.75}
        onPress={onPress}
        style={{ ...styles.buttonsContainer, backgroundColor }}>
        <Animated.View
          style={{ transform: [{ scale }], ...styles.buttonsContainer }}>
          <Icon color={COLORS.WHITE} width={20} height={20} />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};
