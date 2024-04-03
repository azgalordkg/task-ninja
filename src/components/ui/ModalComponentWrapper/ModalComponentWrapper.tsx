import React, { FC } from "react";
import { View } from "react-native";

import { ModalHeader } from "@/components/ui";
import { useThemeContext } from "@/context/hooks";

import styles from "./ModalComponentWrapper.styles";
import { Props } from "./ModalComponentWrapper.types";

export const ModalComponentWrapper: FC<Props> = ({
  children,
  title,
  rightActionComponent,
  doneText,
  isDoneDisabled,
  onRequestClose,
  onCancelPress = onRequestClose,
  cancelText,
}) => {
  const { theme } = useThemeContext();
  const style = styles(theme);

  return (
    <View style={style.container}>
      <View style={style.headerWrapper}>
        <ModalHeader
          title={title}
          rightActionComponent={rightActionComponent}
          doneText={doneText}
          isDoneDisabled={isDoneDisabled}
          onCancelPress={onCancelPress}
          cancelText={cancelText}
        />
      </View>

      <View style={style.content}>{children}</View>
    </View>
  );
};
