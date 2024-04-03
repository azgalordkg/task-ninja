import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { Keyboard, TextInput, TouchableOpacity, View } from "react-native";

import { CloseCircle, Search } from "@/components/icons";
import { AccentButton } from "@/components/ui";
import { useTasksContext, useThemeContext } from "@/context/hooks";
import { addAlpha, vibrate } from "@/utils";

import styles from "./SearchInput.styles";

export const SearchInput: FC = () => {
  const {
    toggleSearchInput,
    inputVisible,
    searchValue,
    handleSearchValueChange,
  } = useTasksContext();
  const { theme } = useThemeContext();
  const style = styles(theme);
  const { t } = useTranslation();

  const handleSearchPress = () => {
    vibrate("selection");
    toggleSearchInput();
  };

  const clearSearchValue = () => {
    handleSearchValueChange("");
  };

  const handleCancelPress = () => {
    Keyboard.dismiss();

    setTimeout(() => {
      toggleSearchInput();
      clearSearchValue();
    }, 50);
  };

  return (
    <View style={style.container}>
      {inputVisible && (
        <View style={style.inputContainer}>
          <Search width={18} height={18} color={theme.ICONS.PRIMARY} />
          <TextInput
            autoFocus
            placeholder={`${t("SEARCH")}...`}
            placeholderTextColor={theme.TEXT.PRIMARY}
            style={style.input}
            value={searchValue}
            onChangeText={handleSearchValueChange}
          />
          {searchValue.length > 0 && (
            <TouchableOpacity onPress={clearSearchValue}>
              <CloseCircle color={addAlpha(theme.ICONS.PRIMARY, 0.6)} />
            </TouchableOpacity>
          )}
        </View>
      )}
      {inputVisible ? (
        <AccentButton color={theme.TEXT.PRIMARY} onPress={handleCancelPress}>
          {t("CANCEL_BUTTON")}
        </AccentButton>
      ) : (
        <TouchableOpacity onPress={handleSearchPress}>
          <Search color={theme.ICONS.PRIMARY} />
        </TouchableOpacity>
      )}
    </View>
  );
};
