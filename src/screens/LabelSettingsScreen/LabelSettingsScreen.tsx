import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";

import { ManageLabelsForm } from "@/components/forms";
import { MainLayout } from "@/components/layouts";
import { ScreenProps } from "@/types";

import styles from "./LabelSettingsScreen.styles";

export const LabelSettingsScreen: FC<ScreenProps<"LabelSettings">> = ({
  navigation,
}) => {
  const { t } = useTranslation();
  const handleClose = () => navigation.goBack();

  return (
    <MainLayout
      onBack={handleClose}
      showHeader
      screenTitle={`${t("LABELS_SCREEN_TITLE")}`}>
      <View style={styles.mainWrapper}>
        <ManageLabelsForm
          isSettings
          onEditTagPress={id => navigation.navigate("CreateLabel", { id })}
          onCreateTagPress={() => navigation.navigate("CreateLabel")}
        />
      </View>
    </MainLayout>
  );
};
