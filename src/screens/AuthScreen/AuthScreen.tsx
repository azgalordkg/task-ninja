import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import React, { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Text, TouchableOpacity, View } from "react-native";

import { Checkbox, Google, Lock, Message } from "@/components/icons";
import { MainLayout } from "@/components/layouts";
import { CustomButton, Input } from "@/components/ui";
import { AUTH_TYPE, COLORS, TOKEN } from "@/constants";
import {
  signInValidationSchema,
  signUpValidationSchema,
} from "@/constants/validation";
import { useThemeContext } from "@/context/hooks";
import {
  useGoogleSignInMutation,
  useLazyGetMeQuery,
  useLoginMutation,
  useRegisterMutation,
} from "@/store/apis/auth";
import { AuthFormValues, ScreenProps } from "@/types";
import { Storage } from "@/utils";

import styles from "./AuthScreen.styles";

export const AuthScreen: FC<ScreenProps<"Auth">> = ({ navigation }) => {
  const { theme, isDark } = useThemeContext();
  const { t } = useTranslation();
  const [login, { data: loginData, isLoading: isLoginLoading }] =
    useLoginMutation();
  const [register, { data: registerData, isLoading: isRegisterLoading }] =
    useRegisterMutation();
  const [getMe, { isLoading: isMeLoading }] = useLazyGetMeQuery();
  const [
    googleSignIn,
    { data: googleSignInData, isLoading: googleSignInLoading },
  ] = useGoogleSignInMutation();

  const [authType, setAuthType] = useState("signIn");

  const isSignIn = authType === "signIn";

  const setToken = async (token: string) => {
    await Storage.storeData(TOKEN, token);
    getMe();
  };

  useEffect(() => {
    let token;
    if (loginData?.token) {
      token = loginData.token;
    } else if (registerData?.token) {
      token = registerData.token;
    } else if (googleSignInData?.token) {
      token = googleSignInData?.token;
    }

    if (token) {
      void setToken(token);
    }
  }, [loginData, registerData, googleSignInData]);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<AuthFormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
    resolver: yupResolver(
      isSignIn ? signInValidationSchema : signUpValidationSchema,
    ),
  });

  const style = styles(theme);

  const handleAuthTypeChange = (value: string) => {
    setAuthType(value);
    reset();
  };

  const onPressForgotPassword = () => {
    navigation.navigate("ResetPassword");
  };

  const onGoogleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const { idToken } = await GoogleSignin.signIn();
      if (idToken) {
        await googleSignIn(idToken);
      }
    } catch (error: any) {
      console.error(error);
    }
  };

  const onSubmit = async ({ email, password }: AuthFormValues) => {
    if (isSignIn) {
      await login({ email, password });
    } else {
      await register({ email, password });
    }
  };

  const isLoading = isLoginLoading || isRegisterLoading || isMeLoading;

  return (
    <MainLayout topViewBackgroundColor={theme.BACKGROUND.SECONDARY}>
      <View style={style.mainWrapper}>
        <View style={style.logoContainer}>
          <Checkbox type="filled" checked color={theme.TEXT.ACCENT} />

          <Text style={style.logoText}>Task Ninja</Text>
        </View>

        <Text style={style.authTitle}>{t("ABOUT_US_TITLE")}</Text>

        <View style={style.formWrapper}>
          <View style={style.authSwitch}>
            {AUTH_TYPE.map(({ title, value }) => {
              const isActive = authType === value;
              const authTitle = t(title);

              const textStyle = [
                style.authSwitchText,
                ...(!isDark && isActive ? [style.authSwitchTextActive] : []),
                authTitle.length >= 18 && style.authSwitchSmallText,
              ];

              return (
                <TouchableOpacity
                  key={value}
                  style={[
                    style.switchItem,
                    isActive && style.authSwitchItemActive,
                  ]}
                  onPress={() => handleAuthTypeChange(value)}>
                  <Text style={textStyle}>{authTitle}</Text>
                </TouchableOpacity>
              );
            })}
          </View>

          <View style={style.formContainer}>
            <Input
              textContentType="emailAddress"
              keyboardType="email-address"
              autoCapitalize="none"
              icon={<Message color={theme.TEXT.ACCENT} />}
              backgroundColor={theme.BACKGROUND.NEUTRAL}
              color={theme.TEXT.PRIMARY}
              control={control}
              name="email"
              placeholder={`${t("EMAIL_ADDRESS")}`}
              errorMessage={errors.email?.message}
            />

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

            {isSignIn && (
              <TouchableOpacity onPress={onPressForgotPassword}>
                <Text style={style.forgotPassword}>{t("FORGOT_PASSWORD")}</Text>
              </TouchableOpacity>
            )}

            {!isSignIn && (
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
            )}
          </View>

          <CustomButton
            isLoading={isLoading}
            bgColor={theme.BUTTONS.PRIMARY}
            disabled={!isValid || isLoading}
            onPress={handleSubmit(onSubmit)}>
            {t("CONTINUE")}
          </CustomButton>

          <View style={style.continueContainer}>
            <View style={style.divider} />
            <Text style={style.continueTitle}>{t("CONTINUE_WITH")}</Text>
            <View style={style.divider} />
          </View>

          <View style={style.authVariantContainer}>
            <CustomButton
              isLoading={googleSignInLoading}
              withShadow
              bgColor={COLORS.WHITE}
              textColor={COLORS.BLACK_MEDIUM}
              iconWidth={24}
              iconHeight={24}
              icon={Google}
              onPress={onGoogleSignIn}>
              Google
            </CustomButton>
          </View>
        </View>
      </View>
    </MainLayout>
  );
};
