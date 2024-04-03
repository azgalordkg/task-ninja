import React, { FC } from "react";
import { ActivityIndicator, View } from "react-native";

import { useThemeContext } from "@/context/hooks";

import styles from "./Loader.styles";
import { Props } from "./Loader.types";

export const Loader: FC<Props> = ({ size = "large", color }) => {
  const { theme } = useThemeContext();
  const style = styles(theme);

  return (
    <View style={style.loaderContainer}>
      <ActivityIndicator size={size} color={color || theme.BUTTONS.PRIMARY} />
    </View>
  );
};
