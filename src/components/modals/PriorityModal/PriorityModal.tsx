import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";

import { ArrowUpSquare, CheckMark } from "@/components/icons";
import {
  ActionModalWrapper,
  CustomButton,
  ExtendedModal,
  MenuItem,
} from "@/components/ui";
import { COLORS } from "@/constants";
import { PRIORITIES } from "@/constants/tasks";
import { useThemeContext } from "@/context/hooks";

import { Props } from "./PriorityModal.types";

export const PriorityModal: FC<Props> = ({
  visible,
  onPressDismiss,
  activePriorityId,
  onValueChange,
}) => {
  const { t } = useTranslation();
  const { theme } = useThemeContext();
  return (
    <ExtendedModal onModalClose={onPressDismiss} isVisible={visible}>
      <ActionModalWrapper>
        <View>
          {PRIORITIES.map(({ id, label, color, isLight }, index) => (
            <MenuItem
              onPress={() => onValueChange(id)}
              prependIcon={ArrowUpSquare}
              prependIconColor={
                isLight && color === COLORS.WHITE ? COLORS.GREY_LIGHT : color
              }
              isFirst={index === 0}
              isLast={index === PRIORITIES.length - 1}
              color={theme.BUTTONS.PRIMARY}
              icon={activePriorityId === id ? CheckMark : null}
              key={id}>
              {`${t("PRIORITY")} ${t(label)}`}
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
