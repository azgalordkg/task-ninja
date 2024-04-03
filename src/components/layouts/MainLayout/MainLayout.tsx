import React, { FC, PropsWithChildren } from "react";
import { SafeAreaView, StatusBar, View } from "react-native";
import Toast from "react-native-toast-message";

import { DismissKeyboard } from "@/components/features";
import { Header } from "@/components/ui";
import { useThemeContext } from "@/context/hooks";
import { vibrate } from "@/utils";

import styles from "./MainLayout.styles";
import { Props } from "./MainLayout.types";

export const MainLayout: FC<PropsWithChildren<Props>> = ({
  children,
  onBack,
  screenTitle,
  isFilter,
  isSettings,
  showHeader,
  topViewBackgroundColor,
}) => {
  const { theme, isDark } = useThemeContext();
  const style = styles(theme, topViewBackgroundColor);

  return (
    <>
      <SafeAreaView style={style.topView} />
      <SafeAreaView style={style.backgroundStyle}>
        <StatusBar barStyle={isDark ? "light-content" : "dark-content"} />
        <DismissKeyboard>
          <View style={style.mainWrapper}>
            {showHeader && (
              <Header
                isFilter={isFilter}
                isSettings={isSettings}
                onBack={onBack}
                screenTitle={screenTitle}
              />
            )}

            <View style={style.mainWrapper}>{children}</View>
          </View>

          <Toast position="top" onShow={() => vibrate("soft")} />
        </DismissKeyboard>
      </SafeAreaView>
    </>
  );
};
