import React, { FC, PropsWithChildren } from "react";
import { Keyboard, Pressable } from "react-native";

import styles from "./DismissKeyboard.styles";
import { Props } from "./DismissKeyboard.types";

export const DismissKeyboard: FC<PropsWithChildren<Props>> = ({
  children,
  disabled,
}) => {
  return (
    <Pressable
      disabled={disabled}
      style={styles.container}
      onPress={Keyboard.dismiss}>
      {children}
    </Pressable>
  );
};
