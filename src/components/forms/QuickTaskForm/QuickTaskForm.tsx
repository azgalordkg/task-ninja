import { yupResolver } from "@hookform/resolvers/yup";
import moment from "moment";
import React, { FC } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { useSelector } from "react-redux";

import { CustomButton, Input } from "@/components/ui";
import { createTaskFormSchema } from "@/constants/validation";
import { useThemeContext } from "@/context/hooks";
import {
  selectTargetDate,
  Task,
  useCreateTaskMutation,
  useGetAllTasksQuery,
} from "@/store/apis/tasks";
import { roundAndExtendTimeRange, vibrate } from "@/utils";

import styles from "./QuickTaskForm.styles";
import { Props } from "./QuickTaskForm.types";

export const QuickTaskForm: FC<Props> = ({ handleShowInput }) => {
  const { t } = useTranslation();
  const targetDate = useSelector(selectTargetDate);
  const { theme } = useThemeContext();

  const { refetch: fetchList } = useGetAllTasksQuery();
  const [createTask] = useCreateTaskMutation();

  const startDate = roundAndExtendTimeRange(moment(targetDate)).toISOString();
  const style = styles(theme);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(createTaskFormSchema),
  });

  const onSubmit = (data: FieldValues) => {
    createTask({
      userData: {
        ...data,
        startDate,
        repeat: "Never",
        priority: 4,
        hasDeadline: false,
        description: "",
      } as Task,
    });

    vibrate("impactHeavy");
    fetchList();
    handleShowInput();
    reset();
  };

  return (
    <View style={style.container}>
      <View style={style.inputContainer}>
        <Input
          autoFocus
          borderRadius={8}
          control={control}
          name="name"
          placeholder={`${t("NAME_INPUT_PLACEHOLDER")}`}
          errorMessage={errors.name?.message}
          backgroundColor={theme.INPUTS.PRIMARY}
          maxLength={30}
          color={theme.TEXT.PRIMARY}
        />

        <View style={style.buttonWrapper}>
          <CustomButton
            borderRadius={8}
            width="48%"
            height={32}
            fontSize={16}
            bgColor={theme.BUTTONS.SECONDARY}
            textColor={theme.BUTTONS.TEXT}
            onPress={handleShowInput}>
            {t("CANCEL_BUTTON")}
          </CustomButton>

          <CustomButton
            borderRadius={8}
            bgColor={theme.BUTTONS.PRIMARY}
            textColor={theme.BUTTONS.TEXT}
            height={32}
            fontSize={16}
            width="48%"
            onPress={handleSubmit(onSubmit)}>
            {t("CREATE_BUTTON")}
          </CustomButton>
        </View>
      </View>
    </View>
  );
};
