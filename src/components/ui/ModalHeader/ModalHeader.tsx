import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { Text, View } from "react-native";

import { AccentButton } from "@/components/ui";
import { useThemeContext } from "@/context/hooks";

import styles from "./ModalHeader.styles";
import { Props } from "./ModalHeader.types";

export const ModalHeader: FC<Props> = ({
  withPadding,
  onCancelPress,
  cancelText,
  rightActionComponent,
  onDonePress,
  isDoneDisabled,
  doneText,
  title,
  contentBackgroundColor,
}) => {
  const { theme } = useThemeContext();
  const { t } = useTranslation();

  const titleFontSize = title.length >= 19 ? 15 : 16;
  const style = styles(
    theme,
    titleFontSize,
    contentBackgroundColor,
    withPadding,
  );

  return (
    <>
      <View style={style.closerWrapper}>
        <View style={style.closer} />
      </View>
      <View style={style.header}>
        <AccentButton onPress={onCancelPress}>
          {cancelText || t("CLOSE_BUTTON")}
        </AccentButton>
        <Text style={style.title}>{title}</Text>
        {rightActionComponent}
        {onDonePress && (
          <AccentButton
            isBold
            isDoneDisabled={isDoneDisabled}
            onPress={onDonePress}>
            {doneText}
          </AccentButton>
        )}
      </View>
    </>
  );
};
