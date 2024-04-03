import React, { FC } from "react";
import { Text, View } from "react-native";

import {
  ActionModalWrapper,
  CustomButton,
  ExtendedModal,
} from "@/components/ui";
import { COLORS } from "@/constants";
import { useThemeContext } from "@/context/hooks";
import { vibrate } from "@/utils";

import styles from "./ConfirmModal.styles";
import { Props } from "./ConfirmModal.types";

export const ConfirmModal: FC<Props> = ({
  visible,
  confirmLabel = "Confirm",
  dismissLabel = "Cancel",
  onPressConfirm,
  onPressDismiss,
  warningText,
}) => {
  const { theme } = useThemeContext();
  const style = styles(theme);

  const handleConfirmPress = () => {
    vibrate();
    onPressConfirm();
  };

  return (
    <ExtendedModal onModalClose={onPressDismiss} isVisible={visible}>
      <ActionModalWrapper>
        {warningText && (
          <View style={style.warningWrapper}>
            <Text style={style.warningText}>{warningText}</Text>
          </View>
        )}
        <CustomButton
          bgColor={theme.BUTTONS.SECONDARY}
          textColor={COLORS.RED}
          height={46}
          width={"100%"}
          onPress={handleConfirmPress}>
          {confirmLabel}
        </CustomButton>
        <CustomButton
          bgColor={theme.BUTTONS.SECONDARY}
          textColor={theme.TEXT.PRIMARY}
          height={46}
          width={"100%"}
          onPress={onPressDismiss}>
          {dismissLabel}
        </CustomButton>
      </ActionModalWrapper>
    </ExtendedModal>
  );
};
