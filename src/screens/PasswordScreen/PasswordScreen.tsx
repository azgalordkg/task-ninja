import { yupResolver } from "@hookform/resolvers/yup";
import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { View } from "react-native";

import { Lock } from "@/components/icons";
import { ErrorMessage, Input, ModalScreenWrapper } from "@/components/ui";
import {
  setAccountPasswordSchema,
  setPasswordSchema,
} from "@/constants/validation";
import { useThemeContext } from "@/context/hooks";
import {
  useChangePasswordMutation,
  useLazyGetMeQuery,
  useSetPasswordMutation,
} from "@/store/apis/auth";
import { AuthFormValues, ScreenProps, ServerError } from "@/types";

import styles from "./PasswordScreen.styles";

export const PasswordScreen: FC<ScreenProps<"Password">> = ({
  navigation,
  route,
}) => {
  const { theme } = useThemeContext();
  const withPassword = route?.params?.withPassword;
  const { t } = useTranslation();
  const style = styles();

  const [
    setPassword,
    { isLoading: isSetPasswordLoading, error: setPasswordError },
  ] = useSetPasswordMutation();

  const [
    changePassword,
    { isLoading: isChangePasswordLoading, error: changePasswordError },
  ] = useChangePasswordMutation();

  const [getMe] = useLazyGetMeQuery();

  const {
    control,
    watch,
    formState: { errors, isValid },
  } = useForm<Partial<AuthFormValues>>({
    defaultValues: {},
    mode: "onBlur",
    resolver: yupResolver(
      withPassword ? setAccountPasswordSchema : setPasswordSchema,
    ),
  });

  const closeModal = () => navigation.goBack();

  const handleDonePress = () => {
    try {
      if (withPassword) {
        changePassword({
          oldPassword: watch("oldPassword") as string,
          password: watch("password") as string,
        });
      } else {
        setPassword({
          password: watch("password") as string,
        });
      }
    } catch (e) {
      console.error(e);
    } finally {
      getMe();
      closeModal();
    }
  };

  const isDoneDisabled =
    !isValid || isSetPasswordLoading || isChangePasswordLoading;
  const isShowError = setPasswordError || changePasswordError;
  const passwordChangeError =
    (setPasswordError as ServerError)?.data?.message ||
    (changePasswordError as ServerError)?.data?.message;

  return (
    <ModalScreenWrapper
      onRequestClose={closeModal}
      doneText={`${t("SUBMIT_TITLE")}`}
      onDonePress={handleDonePress}
      isDoneDisabled={isDoneDisabled}
      title={t(withPassword ? "CHANGE_PASSWORD" : "SET_PASSWORD")}>
      <View style={[style.container, style.content]}>
        {withPassword && (
          <Input
            textContentType="password"
            autoCapitalize="none"
            icon={<Lock color={theme.TEXT.ACCENT} />}
            backgroundColor={theme.BACKGROUND.NEUTRAL}
            color={theme.TEXT.PRIMARY}
            control={control}
            isSecureInput
            name="oldPassword"
            placeholder={`${t("CURRENT_PASSWORD")}`}
            errorMessage={errors.oldPassword?.message}
          />
        )}
        <Input
          textContentType="password"
          autoCapitalize="none"
          icon={<Lock color={theme.TEXT.ACCENT} />}
          backgroundColor={theme.BACKGROUND.NEUTRAL}
          color={theme.TEXT.PRIMARY}
          control={control}
          isSecureInput
          name="password"
          placeholder={`${t("PASSWORD")}`}
          errorMessage={errors.password?.message}
        />
        <Input
          icon={<Lock color={theme.TEXT.ACCENT} />}
          backgroundColor={theme.BACKGROUND.NEUTRAL}
          color={theme.TEXT.PRIMARY}
          control={control}
          isSecureInput
          name="confirmPassword"
          placeholder={`${t("CONFIRM_PASSWORD")}`}
          errorMessage={errors.confirmPassword?.message}
        />
        {isShowError && <ErrorMessage>{t(passwordChangeError)}</ErrorMessage>}
      </View>
    </ModalScreenWrapper>
  );
};
