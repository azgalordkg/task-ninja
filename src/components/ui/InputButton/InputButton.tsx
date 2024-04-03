import React, { FC } from "react";
import { TouchableOpacity, View } from "react-native";

import { Input } from "@/components/ui";
import { useThemeContext } from "@/context/hooks";

import styles from "./InputButton.styles";
import { Props } from "./InputButton.types";

export const InputButton: FC<Props> = ({ onPress, disabled, ...props }) => {
  const { theme } = useThemeContext();

  return (
    <View>
      <TouchableOpacity
        disabled={disabled}
        style={styles.button}
        onPress={onPress}
      />
      <Input
        color={theme.TEXT.PRIMARY}
        editable={false}
        backgroundColor={theme.INPUTS.PRIMARY}
        borderColor={theme.INPUTS.PRIMARY}
        {...props}
      />
    </View>
  );
};
