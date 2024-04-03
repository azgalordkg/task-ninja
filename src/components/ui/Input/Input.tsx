import React, { FC, useState } from "react";
import { useController } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { TextInput, TouchableOpacity, View } from "react-native";

import { CloseCircle, Show } from "@/components/icons";
import { ErrorMessage, InputWrapper } from "@/components/ui";
import { COLORS } from "@/constants";
import { useThemeContext } from "@/context/hooks";
import { InputProps } from "@/types/common";
import { addAlpha, getValueForDateInput } from "@/utils";

import styles from "./Input.styles";

export const Input: FC<InputProps> = ({
  control,
  defaultValue = "",
  name,
  isDateTime,
  isTime,
  icon,
  timeFormat = "LT",
  errorMessage,
  borderColor,
  backgroundColor,
  maxLength,
  color = COLORS.BLACK_DARK,
  multiline,
  borderRadius,
  isSecureInput,
  isShowClearIcon,
  ...props
}) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const {
    field: { value: fieldValue, onChange, onBlur },
  } = useController({
    control,
    defaultValue,
    name,
  });
  const { theme } = useThemeContext();

  const style = styles(isShowClearIcon, isSecureInput, color, multiline);

  const dateFormat = isTime ? timeFormat : "DD MMMM";

  const formattedValue =
    isDateTime &&
    (getValueForDateInput(
      fieldValue as Date,
      t,
      dateFormat,
      isTime,
      language,
    ) as string);
  const value = fieldValue && (formattedValue || (fieldValue as string));

  const [isHideValue, serIsHideValue] = useState(isSecureInput);

  const iconType = isHideValue && isSecureInput ? "show" : "hide";

  const handleShowValue = () => {
    serIsHideValue(!isHideValue);
  };

  const clearInputValue = () => {
    onChange("");
  };

  return (
    <View style={style.inputContainer}>
      <InputWrapper
        borderRadius={borderRadius}
        multiline={multiline}
        borderColor={borderColor}
        backgroundColor={backgroundColor}
        errorMessage={errorMessage}
        icon={icon}>
        <TextInput
          placeholderTextColor={COLORS.GREY_LIGHT}
          maxLength={maxLength}
          secureTextEntry={isHideValue}
          style={style.input}
          value={value}
          onChangeText={onChange}
          onBlur={onBlur}
          multiline={multiline}
          {...props}
        />

        {isSecureInput && (
          <TouchableOpacity onPress={handleShowValue}>
            <Show color={theme.ICONS.SECONDARY} type={iconType} />
          </TouchableOpacity>
        )}

        {isShowClearIcon && !!value.length && (
          <TouchableOpacity onPress={clearInputValue}>
            <CloseCircle color={addAlpha(theme.ICONS.PRIMARY, 0.6)} />
          </TouchableOpacity>
        )}
      </InputWrapper>

      {errorMessage && <ErrorMessage>{t(errorMessage)}</ErrorMessage>}
    </View>
  );
};
