import * as React from "react";
import { FC } from "react";
import { View } from "react-native";

import { DismissKeyboard } from "@/components/features";
import { ModalHeader } from "@/components/ui";
import { useThemeContext } from "@/context/hooks";

import styles from "./ModalScreenWrapper.styles";
import { Props } from "./ModalScreenWrapper.types";

export const ModalScreenWrapper: FC<Props> = ({
  onRequestClose,
  children,
  onCancelPress = onRequestClose,
  contentBackgroundColor,
  onDonePress,
  isDoneDisabled,
  cancelText,
  doneText,
  title,
  rightActionComponent,
  disablePressable,
}) => {
  const { theme } = useThemeContext();
  const style = styles(theme, contentBackgroundColor);

  return (
    <DismissKeyboard disabled={disablePressable}>
      <View style={style.container}>
        <View style={style.mainWrapper}>
          <ModalHeader
            withPadding
            contentBackgroundColor={contentBackgroundColor}
            title={title}
            rightActionComponent={rightActionComponent}
            onCancelPress={onCancelPress}
            onDonePress={onDonePress}
            isDoneDisabled={isDoneDisabled}
            cancelText={cancelText}
            doneText={doneText}
          />
          <View style={style.contentWrapper}>{children}</View>
        </View>
      </View>
    </DismissKeyboard>
  );
};
