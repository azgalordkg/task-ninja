import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

import { ManageLabelsForm } from "@/components/forms";
import { ModalScreenWrapper } from "@/components/ui";
import {
  acceptSelectedTags,
  updateCurrentSelectedTags,
} from "@/store/apis/labels/labels.slice";
import { ScreenProps } from "@/types";

export const ManageLabelsScreen: FC<ScreenProps<"ManageLabels">> = ({
  navigation,
}) => {
  const dispatch = useDispatch();
  const handleCloseModal = () => navigation.goBack();
  const { t } = useTranslation();

  return (
    <ModalScreenWrapper
      onRequestClose={() => {
        handleCloseModal();
        dispatch(updateCurrentSelectedTags());
      }}
      onDonePress={() => {
        dispatch(acceptSelectedTags());
        handleCloseModal();
      }}
      doneText={`${t("SUBMIT_TITLE")}`}
      title={`${t("SELECT_LABELS")}`}>
      <ManageLabelsForm
        onEditTagPress={id => navigation.navigate("CreateLabel", { id: id })}
        onCreateTagPress={() => navigation.navigate("CreateLabel")}
      />
    </ModalScreenWrapper>
  );
};
