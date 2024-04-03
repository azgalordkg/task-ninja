import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";

import { CheckMark } from "@/components/icons";
import {
  ActionModalWrapper,
  CustomButton,
  ExtendedModal,
  MenuItem,
} from "@/components/ui";
import { useThemeContext } from "@/context/hooks";
import { RecurringTypes } from "@/types";

import { Props } from "./RepeatModal.types";

export const RepeatModal: FC<Props> = ({
  visible,
  onPressDismiss,
  activeValue,
  onValueChange,
  repeatList,
}) => {
  const { t } = useTranslation();
  const { theme } = useThemeContext();

  return (
    <ExtendedModal onModalClose={onPressDismiss} isVisible={visible}>
      <ActionModalWrapper>
        <View>
          {repeatList.map(({ value, label }, index) => (
            <MenuItem
              onPress={() => onValueChange(value as RecurringTypes)}
              isFirst={index === 0}
              isLast={index === repeatList.length - 1}
              color={theme.BUTTONS.PRIMARY}
              icon={activeValue === value ? CheckMark : null}
              key={value}>
              {label}
            </MenuItem>
          ))}
        </View>
        <CustomButton
          bgColor={theme.BUTTONS.SECONDARY}
          textColor={theme.TEXT.PRIMARY}
          height={46}
          width={"100%"}
          onPress={onPressDismiss}>
          {t("CANCEL_BUTTON")}
        </CustomButton>
      </ActionModalWrapper>
    </ExtendedModal>
  );
};
