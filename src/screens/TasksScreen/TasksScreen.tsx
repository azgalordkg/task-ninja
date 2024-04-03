import { useIsFocused } from "@react-navigation/native";
import React, { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import { useSelector } from "react-redux";

import { TasksView } from "@/components/features";
import {
  Plus,
  TasksPlaceholder,
  UnscheduledPlaceholder,
} from "@/components/icons";
import { MainLayout } from "@/components/layouts";
import { EmptyTaskList } from "@/components/ui";
import { COLORS } from "@/constants";
import { useTasksContext, useThemeContext } from "@/context/hooks";
import { updateRecurringTasks } from "@/services";
import { useGetLabelsQuery } from "@/store/apis/labels";
import { selectAllTasks, useGetAllTasksQuery } from "@/store/apis/tasks";
import { ScreenProps } from "@/types";
import { getDayTitle, vibrate } from "@/utils";

import styles from "./TasksScreen.styles";

export const TasksScreen: FC<ScreenProps<"Tasks">> = ({
  navigation,
  route,
}) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const { inputVisible } = useTasksContext();
  const { taskList, unscheduledTaskList, overdueTaskList } =
    useSelector(selectAllTasks) || {};
  const { refetch: fetchList } = useGetAllTasksQuery();
  const { theme } = useThemeContext();

  const [dailyTasksUpdated, setDailyTasksUpdated] = useState(false);

  const isUnscheduled = route?.params?.isUnscheduled;
  const isFocused = useIsFocused();
  const style = styles(theme);

  const {} = useGetLabelsQuery();

  useEffect(() => {
    if (isFocused) {
      fetchList();
    }
  }, [isFocused, isUnscheduled]);

  useEffect(() => {
    if (!dailyTasksUpdated) {
      updateRecurringTasks();
      fetchList();
      setDailyTasksUpdated(true);
    }
  }, [dailyTasksUpdated]);

  const handleItemPress = (id: string) => {
    vibrate("rigid");
    navigation.navigate("CreateTask", { id, isUnscheduled });
  };

  const handleCreatePress = () => {
    vibrate("selection");
    navigation.navigate("CreateTask", { isUnscheduled });
  };

  const tasks = isUnscheduled ? unscheduledTaskList : taskList;
  const isEmpty = isUnscheduled
    ? !tasks?.length
    : !tasks?.length && !overdueTaskList?.length;

  const keyboardAvoidingBehavior = !inputVisible
    ? Platform.OS === "ios"
      ? "position"
      : "height"
    : undefined;

  return (
    <MainLayout
      screenTitle={`${isUnscheduled ? t("UNSCHEDULED") : t("TODAY")}`}
      onBack={() => navigation.navigate("Dashboard")}
      showHeader
      isFilter>
      {!isEmpty ? (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <KeyboardAvoidingView
            behavior={keyboardAvoidingBehavior}
            style={style.tasksContainer}>
            <TasksView
              currentTasksTitle={
                !isUnscheduled ? getDayTitle(new Date(), language) : undefined
              }
              isUnscheduled={isUnscheduled}
              onItemPress={handleItemPress}
            />
          </KeyboardAvoidingView>
        </ScrollView>
      ) : (
        <View style={style.container}>
          <EmptyTaskList
            image={isUnscheduled ? UnscheduledPlaceholder : TasksPlaceholder}
            handleCreatePress={handleCreatePress}
          />
        </View>
      )}

      {!inputVisible && (
        <SafeAreaView style={style.buttonContainer}>
          <TouchableOpacity onPress={handleCreatePress} activeOpacity={0.75}>
            <View style={style.buttonWrapper}>
              <Plus color={COLORS.WHITE} width={18} height={18} />
            </View>
          </TouchableOpacity>
        </SafeAreaView>
      )}
    </MainLayout>
  );
};
