import React, { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { Linking, Platform, Text, View } from "react-native";
import Rate, { AndroidMarket } from "react-native-rate";
import { useSelector } from "react-redux";

import { MainLayout } from "@/components/layouts";
import { ConfirmModal } from "@/components/modals";
import { CustomButton } from "@/components/ui";
import { MenuItem } from "@/components/ui/MenuItem";
import { COLORS, SETTINGS_LIST } from "@/constants";
import { useThemeContext } from "@/context/hooks";
import { useLogout } from "@/hooks";
import { selectCurrentUser } from "@/store/apis/auth";
import { ScreenProps } from "@/types";

import styles from "./SettingsScreen.styles";

export const SettingsScreen: FC<ScreenProps<"Settings">> = ({ navigation }) => {
  const { t } = useTranslation();
  const { logout } = useLogout();
  const { theme } = useThemeContext();
  const userInfo = useSelector(selectCurrentUser);
  const style = styles(theme);

  const [confirmModalVisible, setConfirmModalVisible] = useState(false);

  const onBackPressHandler = () => {
    navigation.goBack();
  };

  const handleContactUsPress = () => {
    const email = "aza.alt.com@gmail.com";
    const subject = "Contact Us";
    const body = "Please describe your issue or question:";

    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);

    const mailtoUrl = `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;

    Linking.canOpenURL(mailtoUrl)
      .then(supported => {
        if (!supported) {
          console.error("Can't handle url: " + mailtoUrl);
        } else {
          return Linking.openURL(mailtoUrl);
        }
      })
      .catch(err => console.error("An error occurred", err));
  };

  const handleRateUs = () => {
    const appleAppID = "6446996825";
    const androidPackageName = "your-android-package-name";

    if (__DEV__) {
      const url =
        Platform.OS === "ios"
          ? `https://apps.apple.com/app/id${appleAppID}`
          : `https://play.google.com/store/apps/details?id=${androidPackageName}`;

      Linking.openURL(url).catch(err =>
        console.error("An error occurred", err),
      );
    } else {
      // Use react-native-rate for production build
      const options = {
        AppleAppID: appleAppID,
        GooglePackageName: androidPackageName,
        preferredAndroidMarket: AndroidMarket.Google,
        preferInApp: false,
        openAppStoreIfInAppFails: true,
      };

      Rate.rate(options, success => {
        if (success) {
          console.log("User successfully redirected to the App Store.");
        }
      });
    }
  };

  const toggleModal = () => {
    setConfirmModalVisible(!confirmModalVisible);
  };

  return (
    <MainLayout
      screenTitle={`${t("SETTINGS_SCREEN_TITLE")}`}
      showHeader
      onBack={onBackPressHandler}>
      <View style={style.mainWrapper}>
        <View style={style.listWrapper}>
          {SETTINGS_LIST.map(
            ({ prependIcon, title, navigationName }, index) => (
              <MenuItem
                key={title}
                isLast={index === SETTINGS_LIST.length - 1}
                isFirst={index === 0}
                prependIcon={prependIcon}
                onPress={() => {
                  if (navigationName === "RateUs") {
                    handleRateUs();
                  } else if (navigationName === "ContactUs") {
                    handleContactUsPress();
                  } else {
                    // @ts-ignore TODO solve later
                    navigation.navigate(navigationName);
                  }
                }}>
                {t(title)}
              </MenuItem>
            ),
          )}
        </View>
        <View>
          <CustomButton
            textColor={COLORS.RED}
            bgColor={theme.BACKGROUND.NEUTRAL}
            type="filled"
            onPress={toggleModal}>
            {t("LOGOUT")}
          </CustomButton>
          <Text style={style.userEmail}>{userInfo?.email}</Text>
        </View>
      </View>

      <ConfirmModal
        confirmLabel={`${t("LOGOUT")}`}
        dismissLabel={`${t("CANCEL_BUTTON")}`}
        visible={confirmModalVisible}
        onPressConfirm={logout}
        onPressDismiss={toggleModal}
      />
    </MainLayout>
  );
};
