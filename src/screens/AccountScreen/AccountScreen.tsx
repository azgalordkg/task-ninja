import { yupResolver } from "@hookform/resolvers/yup";
import React, { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";

import { Lock, Message, Profile } from "@/components/icons";
import { ConfirmModal } from "@/components/modals";
import {
  CustomButton,
  Input,
  InputButton,
  Loader,
  MenuItem,
  ModalScreenWrapper,
} from "@/components/ui";
import { COLORS } from "@/constants";
import { changeEmailSchema, changeNameSchema } from "@/constants/validation";
import { useThemeContext } from "@/context/hooks";
import { useLogout } from "@/hooks";
import { selectCurrentUser, useLazyGetMeQuery } from "@/store/apis/auth";
import { useDeleteUserMutation, useEditUserMutation } from "@/store/apis/users";
import { AuthFormValues, ScreenProps, ServerError } from "@/types";

import styles from "./AccountScreen.styles";

export const AccountScreen: FC<ScreenProps<"Account">> = ({ navigation }) => {
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);
  const [secondConfirmModalVisible, setSecondConfirmModalVisible] =
    useState(false);

  const { logout } = useLogout();
  const [deleteUser, { isLoading: isDeleteUserLoading }] =
    useDeleteUserMutation();
  const [editUser, { isLoading: isEditUserLoading, error: editUserError }] =
    useEditUserMutation();
  const [getMe] = useLazyGetMeQuery();

  const userInfo = useSelector(selectCurrentUser);
  const { t } = useTranslation();
  const { theme } = useThemeContext();
  const style = styles(theme);

  const {
    control: nameControl,
    setValue: setNameValue,
    watch: watchName,
    formState: { errors: nameErrors, isValid: nameIsValid },
  } = useForm<Partial<AuthFormValues>>({
    defaultValues: {
      fullname: "",
    },
    mode: "onChange",
    resolver: yupResolver(changeNameSchema),
  });

  const {
    control: emailControl,
    setValue: setEmailValue,
    watch: watchEmail,
    formState: { errors: emailErrors, isValid: emailIsValid },
  } = useForm<Partial<AuthFormValues>>({
    defaultValues: {
      email: "",
    },
    mode: "onChange",
    resolver: yupResolver(changeEmailSchema),
  });

  const setUserInfo = () => {
    if (userInfo) {
      const { fullname, email } = userInfo;

      if (fullname) {
        setNameValue("fullname", fullname);
      }
      if (email) {
        setEmailValue("email", email);
      }
    }
  };

  useEffect(() => {
    setUserInfo();
  }, [userInfo]);

  const closeModal = () => {
    navigation.goBack();
  };

  const handleCancelPress = () => {
    setUserInfo();
    setIsNameFocused(false);
    setIsEmailFocused(false);
  };

  const handleChangeUserInfo = async () => {
    try {
      if (isNameFocused) {
        const name = watchName("fullname");
        await editUser({ fullname: name });
      } else if (isEmailFocused) {
        const email = watchEmail("email");
        await editUser({ email });
      }

      await getMe();
    } catch (error) {
      console.error(error);
    } finally {
      setIsNameFocused(false);
      setIsEmailFocused(false);
    }
  };

  const handleDeleteAccount = async () => {
    try {
      await deleteUser();
      closeModal();
      await logout();
    } catch (e) {
      console.error(e);
    } finally {
      setSecondConfirmModalVisible(false);
    }
  };

  const toggleModal = () => {
    setConfirmModalVisible(!confirmModalVisible);
  };

  const isFullnameChanged = () => {
    const fullname = userInfo?.fullname;
    const name = watchName("fullname");
    return fullname !== name;
  };

  const isEmailChanged = () => {
    const email = userInfo?.email;
    const newEmail = watchEmail("email");
    return email !== newEmail;
  };

  const isDataChanged = () => {
    return (
      (isNameFocused && isFullnameChanged()) ||
      (isEmailFocused && isEmailChanged())
    );
  };

  const isFocused = isNameFocused || isEmailFocused;
  const onRequestClose = isFocused ? handleCancelPress : closeModal;
  const isDoneDisabled = !nameIsValid || !emailIsValid;
  const cancelText = `${isFocused ? t("CANCEL") : t("CLOSE_BUTTON")}`;

  const fullnameErrorMessage =
    nameErrors.fullname?.message ||
    (editUserError as ServerError)?.data?.message;

  const emailErrorMessage =
    emailErrors.email?.message || (editUserError as ServerError)?.data?.message;

  if (isDeleteUserLoading) {
    return <Loader />;
  }

  const handlePasswordPress = () => {
    navigation.navigate("Password", { withPassword: userInfo?.withPassword });
  };

  return (
    <ModalScreenWrapper
      disablePressable
      doneText={`${t("SAVE")}`}
      cancelText={cancelText}
      onRequestClose={onRequestClose}
      isDoneDisabled={isDoneDisabled || !isDataChanged()}
      onDonePress={isFocused ? handleChangeUserInfo : undefined}
      title={t("ACCOUNT")}>
      <View style={style.container}>
        <View style={style.content}>
          <View>
            <Text style={style.label}>{t("FULLNAME")}</Text>
            {isNameFocused ? (
              <Input
                isShowClearIcon
                autoCapitalize="sentences"
                icon={<Profile color={theme.BUTTONS.PRIMARY} />}
                control={nameControl}
                backgroundColor={theme.INPUTS.PRIMARY}
                color={theme.TEXT.PRIMARY}
                autoFocus
                errorMessage={nameErrors.fullname?.message}
                name="fullname"
                placeholder={`${t("FULLNAME")}`}
                maxLength={255}
              />
            ) : (
              <InputButton
                disabled={isEmailFocused || isEditUserLoading}
                errorMessage={fullnameErrorMessage}
                placeholder={`${t("FULLNAME")}`}
                value={watchName("fullname")}
                onPress={() => setIsNameFocused(true)}
                name="description"
                control={nameControl}
                icon={<Profile color={theme.BUTTONS.PRIMARY} />}
              />
            )}
          </View>
          <View>
            <Text style={style.label}>{t("EMAIL_ADDRESS")}</Text>
            {isEmailFocused ? (
              <Input
                isShowClearIcon
                icon={<Profile color={theme.BUTTONS.PRIMARY} />}
                control={emailControl}
                backgroundColor={theme.INPUTS.PRIMARY}
                color={theme.TEXT.PRIMARY}
                autoFocus
                errorMessage={emailErrorMessage}
                name="email"
                placeholder={`${t("EMAIL_ADDRESS")}`}
                maxLength={255}
              />
            ) : (
              <InputButton
                disabled={isNameFocused || isEditUserLoading}
                errorMessage={emailErrors.email?.message}
                placeholder={`${t("EMAIL_ADDRESS")}`}
                value={watchEmail("email")}
                onPress={() => setIsEmailFocused(true)}
                name="description"
                control={emailControl}
                icon={<Message color={theme.BUTTONS.PRIMARY} />}
              />
            )}
          </View>
          <View>
            <Text style={style.label}>{t("PASSWORD")}</Text>
            <MenuItem
              backgroundColor={theme.INPUTS.PRIMARY}
              isLast
              isFirst
              prependIcon={Lock}
              onPress={handlePasswordPress}>
              {userInfo?.withPassword
                ? t("CHANGE_PASSWORD")
                : t("SET_PASSWORD")}
            </MenuItem>
          </View>
        </View>
        <CustomButton
          textColor={COLORS.RED}
          bgColor={theme.BACKGROUND.NEUTRAL}
          type="filled"
          onPress={toggleModal}>
          {t("DELETE_ACCOUNT")}
        </CustomButton>
      </View>
      <ConfirmModal
        warningText={`${t("CONFIRM_DELETE_ACCOUNT")}`}
        confirmLabel={`${t("DELETE_ACCOUNT")}`}
        dismissLabel={`${t("CANCEL_BUTTON")}`}
        visible={confirmModalVisible}
        onPressConfirm={() => {
          setConfirmModalVisible(false);
          setTimeout(() => {
            setSecondConfirmModalVisible(true);
          }, 600);
        }}
        onPressDismiss={toggleModal}
      />
      <ConfirmModal
        warningText={`${t("SECOND_CONFIRM_DELETE_ACCOUNT")}`}
        confirmLabel={`${t("DELETE_ACCOUNT")}`}
        dismissLabel={`${t("CANCEL_BUTTON")}`}
        visible={secondConfirmModalVisible}
        onPressConfirm={handleDeleteAccount}
        onPressDismiss={() => {
          setSecondConfirmModalVisible(false);
        }}
      />
    </ModalScreenWrapper>
  );
};
