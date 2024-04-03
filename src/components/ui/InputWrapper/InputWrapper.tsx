import React, { FC, PropsWithChildren } from "react";
import { View } from "react-native";

import { COLORS } from "@/constants";

import styles from "./InputWrapper.styles";
import { Props } from "./InputWrapper.types";

export const InputWrapper: FC<PropsWithChildren<Props>> = ({
  errorMessage,
  icon,
  children,
  backgroundColor = COLORS.WHITE,
  borderColor = backgroundColor,
  multiline,
  borderRadius = 12,
}) => {
  const Icon = icon;
  const style = styles(
    errorMessage,
    borderColor,
    backgroundColor,
    multiline,
    borderRadius,
  );

  return (
    <View style={style.wrapper}>
      {Icon && <View style={style.icon}>{Icon}</View>}
      {children}
    </View>
  );
};
