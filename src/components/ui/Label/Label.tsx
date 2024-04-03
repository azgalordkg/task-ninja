import React, { FC } from "react";
import { Text, TouchableWithoutFeedback, View } from "react-native";

import styles from "./Label.styles";
import { Props } from "./Label.types";

export const Label: FC<Props> = ({ name, bgColor }) => {
  const style = styles(bgColor);

  return (
    <TouchableWithoutFeedback>
      <View style={style.whiteWrapper}>
        <View style={style.tabsContainer}>
          <Text style={style.title}>{name}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
