import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { Text, View } from "react-native";

import { Lock, Paper } from "@/components/icons";
import { BreakLine, MenuItem, ModalScreenWrapper } from "@/components/ui";
import { useThemeContext } from "@/context/hooks";
import { ScreenProps } from "@/types";

import styles from "./AboutUsScreen.styles";

export const AboutUsScreen: FC<ScreenProps<"AboutUs">> = ({ navigation }) => {
  const { theme } = useThemeContext();
  const style = styles(theme);
  const { t } = useTranslation();

  const handleClose = () => navigation.goBack();

  return (
    <ModalScreenWrapper
      title={`${t("ABOUT_US_SCREEN_TITLE")}`}
      onRequestClose={handleClose}>
      <View style={style.mainWrapper}>
        <View style={style.contentContainer}>
          <Text style={style.screenTitle}>{t("ABOUT_US_TITLE")}</Text>

          <BreakLine color={theme.BORDERS.PRIMARY} />

          <Text style={style.screenDescription}>
            {t("ABOUT_US_DESCRIPTION_PART_ONE")}
          </Text>

          <Text style={style.screenDescription}>
            {t("ABOUT_US_DESCRIPTION_PART_TWO")}
          </Text>

          <View style={style.footerContainer}>
            <MenuItem
              prependIcon={Lock}
              isFirst
              onPress={() =>
                navigation.navigate("Documents", { isPrivacyPolicy: true })
              }>
              {t("PRIVACY_POLICY")}
            </MenuItem>
            <MenuItem
              prependIcon={Paper}
              isLast
              onPress={() => navigation.navigate("Documents")}>
              {t("TERMS_OF_USE")}
            </MenuItem>
          </View>
        </View>
      </View>
    </ModalScreenWrapper>
  );
};
