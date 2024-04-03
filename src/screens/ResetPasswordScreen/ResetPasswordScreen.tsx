import { yupResolver } from "@hookform/resolvers/yup";
import React, { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Text, TouchableOpacity, View } from "react-native";

import { Lock, Message, Password } from "@/components/icons";
import { CustomButton, Input, ModalScreenWrapper } from "@/components/ui";
import {
  resetPasswordButtonText,
  resetPasswordDescription,
  resetPasswordValidationSchemas,
  resetTitleText,
} from "@/constants";
import { useThemeContext } from "@/context/hooks";
import { ResetPasswordFormValues, ScreenProps } from "@/types";

import styles from "./ResetPasswordScreen.styles";

export const ResetPasswordScreen: FC<ScreenProps<"ResetPassword">> = ({
  navigation,
}) => {
  const { theme } = useThemeContext();
  const { t } = useTranslation();

  const [resetPasswordStep, setResetPasswordStep] = useState(0);

  const style = styles(theme);
  const cancelModalText = resetPasswordStep === 0 ? "CANCEL" : "BACK";
  const InputIcon = resetPasswordStep === 0 ? Message : Password;
  const inputName = resetPasswordStep === 0 ? "email" : "code";
  const inputPlaceholder = resetPasswordStep === 0 ? "EMAIL_ADDRESS" : "CODE";

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<ResetPasswordFormValues>({
    mode: "onBlur",
    // @ts-ignore TODO Remove it
    resolver: yupResolver(resetPasswordValidationSchemas[resetPasswordStep]),
  });

  const onBackPressHandler = () => {
    if (resetPasswordStep === 0) {
      return navigation.goBack();
    }

    reset();
    return setResetPasswordStep(prevState => prevState - 1);
  };

  const goToAuthScreen = () => {
    navigation.navigate("Auth");
  };

  const onSubmit = () => {
    if (resetPasswordStep === 2) {
      navigation.pop();
      return navigation.navigate("Tasks");
    }

    reset();
    return setResetPasswordStep(prevState => prevState + 1);
  };

  return (
    <ModalScreenWrapper
      cancelText={`${t(cancelModalText)}`}
      onRequestClose={onBackPressHandler}
      title={`${t(resetTitleText[resetPasswordStep])}`}>
      <View style={style.authModalContainer}>
        <Text style={style.description}>
          {t(resetPasswordDescription[resetPasswordStep])}
        </Text>

        {resetPasswordStep === 2 ? (
          <>
            <Input
              icon={<Lock color={theme.TEXT.ACCENT} />}
              backgroundColor={theme.BACKGROUND.NEUTRAL}
              color={theme.TEXT.PRIMARY}
              control={control}
              name={"password"}
              isSecureInput
              placeholder={`${t("PASSWORD")}`}
              errorMessage={errors.password?.message}
            />

            <Input
              icon={<Lock color={theme.TEXT.ACCENT} />}
              backgroundColor={theme.BACKGROUND.NEUTRAL}
              color={theme.TEXT.PRIMARY}
              control={control}
              name={"confirmPassword"}
              isSecureInput
              placeholder={`${t("CONFIRM_PASSWORD")}`}
              errorMessage={errors.confirmPassword?.message}
            />
          </>
        ) : (
          <Input
            icon={<InputIcon color={theme.TEXT.ACCENT} />}
            backgroundColor={theme.BACKGROUND.NEUTRAL}
            color={theme.TEXT.PRIMARY}
            control={control}
            name={inputName}
            isSecureInput={resetPasswordStep === 2}
            placeholder={`${t(inputPlaceholder)}`}
            errorMessage={errors[inputName]?.message}
          />
        )}

        <CustomButton
          bgColor={theme.BUTTONS.PRIMARY}
          disabled={!isValid}
          onPress={handleSubmit(onSubmit)}>
          {t(resetPasswordButtonText[resetPasswordStep])}
        </CustomButton>

        <TouchableOpacity onPress={goToAuthScreen}>
          <Text style={style.backToLoginLink}>{t("BACK_TO_LOGIN")}</Text>
        </TouchableOpacity>
      </View>
    </ModalScreenWrapper>
  );
};
