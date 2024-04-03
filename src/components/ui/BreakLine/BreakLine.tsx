import React, { FC } from "react";
import { View } from "react-native";

import { useThemeContext } from "@/context/hooks";

import styles from "./BreakLine.styles";
import { Props } from "./BreakLine.types";

export const BreakLine: FC<Props> = ({ marginBottom, color }) => {
  const { theme } = useThemeContext();
  const style = styles({ theme, marginBottom, color });

  return <View style={style.brakeLine} />;
};
