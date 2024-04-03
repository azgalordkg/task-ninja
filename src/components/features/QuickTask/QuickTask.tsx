import React, { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import OutsidePressHandler from "react-native-outside-press";

import { QuickTaskForm } from "@/components/forms";
import { Plus } from "@/components/icons";
import { CustomButton } from "@/components/ui";
import { useThemeContext } from "@/context/hooks";
import { vibrate } from "@/utils";

import styles from "./QuickTask.styles";

export const QuickTask: FC = () => {
  const [showInput, setShowInput] = useState(false);
  const { t } = useTranslation();
  const { theme } = useThemeContext();

  const handleShowInput = () => {
    vibrate();
    setShowInput(!showInput);
  };

  return (
    <>
      {showInput ? (
        <OutsidePressHandler onOutsidePress={handleShowInput} disabled={false}>
          <QuickTaskForm handleShowInput={handleShowInput} />
        </OutsidePressHandler>
      ) : (
        <View style={styles.buttonWrapper}>
          <CustomButton
            fullWidth
            paddingHorizontal={12}
            orientation="flex-start"
            bgColor="transparent"
            onPress={handleShowInput}
            height={32}
            fontSize={14}
            icon={Plus}
            textColor={theme.BUTTONS.PRIMARY}
            iconHeight={8}
            iconWidth={8}>
            {t("ADD_QUICK_TASK")}
          </CustomButton>
        </View>
      )}
    </>
  );
};
