import React, { FC, useState } from "react";
import { FieldValues } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import { ContextMenuButton } from "@/components/features";
import { CreateTaskForm } from "@/components/forms";
import { ConfirmModal } from "@/components/modals";
import { ModalScreenWrapper } from "@/components/ui";
import { selectSelectedTags } from "@/store/apis/labels/labels.selector";
import { clearSelectedTags } from "@/store/apis/labels/labels.slice";
import {
  Task,
  useCreateTaskMutation,
  useDeleteTaskMutation,
  useGetAllTasksQuery,
  useUpdateTaskMutation,
} from "@/store/apis/tasks";
import { ScreenProps } from "@/types";
import { vibrate } from "@/utils";

export const CreateTaskScreen: FC<ScreenProps<"CreateTask">> = ({
  navigation,
  route,
}) => {
  const { t } = useTranslation();
  const selectedTags = useSelector(selectSelectedTags);
  const dispatch = useDispatch();

  const taskId = route?.params?.id;
  const isUnscheduled = route?.params?.isUnscheduled;
  const taskStartDate = route?.params?.startDate;

  const { refetch: fetchList } = useGetAllTasksQuery();
  const [createTask] = useCreateTaskMutation();
  const [updateTask] = useUpdateTaskMutation();
  const [deleteTask] = useDeleteTaskMutation();

  const [confirmModalVisible, setConfirmModalVisible] = useState(false);
  const [isDescriptionFocused, setIsDescriptionFocused] = useState(false);

  const handleShowConfirmModal = () => {
    setConfirmModalVisible(!confirmModalVisible);
  };

  const closeModal = () => {
    navigation.goBack();
  };

  const createTaskHandler = (data: FieldValues) => {
    const requestData = { ...data, labels: selectedTags as number[] };

    if (taskId) {
      updateTask({ userData: requestData as Task, id: +taskId });
    } else {
      createTask({ userData: requestData as Task });
    }

    vibrate("impactHeavy");
    fetchList();
    dispatch(clearSelectedTags());
    closeModal();
  };

  const addTagsHandler = () => {
    vibrate("selection");
    navigation.navigate("ManageLabels");
  };

  const handleDeleteTask = () => {
    if (taskId) {
      deleteTask(taskId);
    }
    closeModal();
    handleShowConfirmModal();
  };

  const title = taskId ? t("EDIT") : t("CREATE");

  return (
    <ModalScreenWrapper
      doneText={`${t("SUBMIT_TITLE")}`}
      onDonePress={
        isDescriptionFocused ? () => setIsDescriptionFocused(false) : undefined
      }
      rightActionComponent={
        taskId &&
        !isDescriptionFocused && (
          <ContextMenuButton onPress={handleShowConfirmModal} />
        )
      }
      title={`${title} ${t("TASK")}`}
      onRequestClose={closeModal}>
      <CreateTaskForm
        isDescriptionFocused={isDescriptionFocused}
        onToggleDescription={setIsDescriptionFocused}
        isUnscheduled={isUnscheduled}
        onAddPress={addTagsHandler}
        editItemId={taskId}
        onSubmit={createTaskHandler}
        taskStartDate={taskStartDate}
      />

      <ConfirmModal
        confirmLabel={`${t("CONFIRM_MODAL_DELETE")}`}
        dismissLabel={`${t("CANCEL_BUTTON")}`}
        visible={confirmModalVisible}
        onPressConfirm={handleDeleteTask}
        onPressDismiss={handleShowConfirmModal}
      />
    </ModalScreenWrapper>
  );
};
