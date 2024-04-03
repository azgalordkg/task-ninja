import { useNavigation } from "@react-navigation/native";
import React, { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { SearchInput } from "@/components/features/SearchInput";
import { ArrowBack, Setting } from "@/components/icons";
import { useTasksContext, useThemeContext } from "@/context/hooks";
import { vibrate } from "@/utils";

import styles from "./Header.styles";
import { Props } from "./Header.types";

export const Header: FC<Props> = ({
  screenTitle,
  onBack,
  isFilter,
  isSettings,
}) => {
  const { theme } = useThemeContext();
  const { inputVisible } = useTasksContext();
  const style = styles(theme);

  const { navigate } = useNavigation();

  const onSettingPress = () => {
    vibrate("selection");
    navigate("Settings" as never);
  };

  return (
    <View style={style.header}>
      {!inputVisible && (
        <View style={style.iconContainer}>
          {onBack && (
            <TouchableOpacity onPress={onBack}>
              <ArrowBack color={theme.ICONS.PRIMARY} />
            </TouchableOpacity>
          )}
          <Text style={style.screenTitle}>{screenTitle}</Text>
        </View>
      )}

      <View style={style.search}>
        {isFilter && (
          <>
            <SearchInput />

            {/*<TouchableOpacity onPress={onFilterPress}>
              <Filter color={theme.ICONS.PRIMARY} />
            </TouchableOpacity>*/}
          </>
        )}
      </View>
      {isSettings && (
        <TouchableOpacity onPress={onSettingPress}>
          <Setting color={theme.ICONS.PRIMARY} />
        </TouchableOpacity>
      )}
    </View>
  );
};
