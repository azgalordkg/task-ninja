import { yupResolver } from "@hookform/resolvers/yup";
import { isEqual } from "lodash";
import React, { FC, useMemo } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { CreateLabelForm } from "@/components/forms";
import { ModalScreenWrapper } from "@/components/ui";
import { createLabelFormSchema } from "@/constants/validation";
import {
  useCreateOrUpdateLabelMutation,
  useGetLabelByIdQuery,
} from "@/store/apis/labels";
import { ScreenProps } from "@/types";
import { LabelItem } from "@/types/labels";
import { vibrate } from "@/utils";

export const CreateLabelScreen: FC<ScreenProps<"CreateLabel">> = ({
  navigation,
  route,
}) => {
  const { t } = useTranslation();
  const [createOrUpdateLabel] = useCreateOrUpdateLabelMutation();

  const labelId = route?.params?.id;
  const { data: findLabel } = useGetLabelByIdQuery(labelId);
  const handleCloseModal = () => navigation.goBack();

  const formHandler = useForm<LabelItem>({
    mode: "onBlur",
    resolver: yupResolver(createLabelFormSchema),
  });

  const formValue = formHandler.watch();
  const isValid = formHandler.formState.isValid;

  const onSubmit = (data: LabelItem) => {
    createOrUpdateLabel({ ...data, id: labelId });
    vibrate("impactHeavy");
    handleCloseModal();
  };

  const isDisabled = useMemo(() => {
    if (labelId && findLabel) {
      const { name, color } = findLabel as LabelItem;
      const label = { name, color };
      return !isEqual(formValue, label) && isValid;
    }

    return isValid;
  }, [labelId, formValue, isValid]);

  return (
    <ModalScreenWrapper
      title={`${labelId ? `${t("EDIT")}` : `${t("CREATE")}`} ${t("A_LABEL")}`}
      onDonePress={formHandler.handleSubmit(onSubmit)}
      isDoneDisabled={!isDisabled}
      doneText={`${t("SUBMIT_TITLE")}`}
      onRequestClose={handleCloseModal}>
      <CreateLabelForm
        formHandler={formHandler}
        editItemId={labelId}
        onClose={handleCloseModal}
        findLabel={findLabel}
      />
    </ModalScreenWrapper>
  );
};
