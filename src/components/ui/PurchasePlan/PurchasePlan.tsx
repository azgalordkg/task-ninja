import React, { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { useThemeContext } from "@/context/hooks";
import { getPurchaseItemWidth } from "@/utils";

import styles from "./PurchasePlan.styles";
import { Props } from "./PurchasePlan.types";

export const PurchasePlan: FC<Props> = ({
  duration,
  price,
  description,
  isActive,
  onPress,
  profitable,
}) => {
  const containerWidth = getPurchaseItemWidth();
  const { theme } = useThemeContext();
  const style = styles(containerWidth, theme, isActive);

  return (
    <TouchableOpacity onPress={onPress} style={style.container}>
      {profitable && isActive && (
        <View style={style.saveWrapper}>
          <Text style={style.save}>Save 50%</Text>
        </View>
      )}
      <Text style={style.duration}>{duration}</Text>
      <Text style={style.price}>US${price} /mo</Text>
      <Text style={style.description}>{description}</Text>
    </TouchableOpacity>
  );
};
