import React, { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { ScrollView, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { Label, Plus, Trash } from "@/components/icons";
import { ConfirmModal } from "@/components/modals";
import { CustomButton, DashedButton, MenuItem } from "@/components/ui";
import { TAGS_CREATION_LIMITS } from "@/constants";
import { useThemeContext } from "@/context/hooks";
import {
  selectCurrentSelectedTags,
  selectTagHandler,
  useDeleteLabelMutation,
  useGetLabelsQuery,
} from "@/store/apis/labels";
import { vibrate } from "@/utils";

import styles from "./ManageLabelsForm.styles";
import { Props } from "./ManageLabelsForm.types";

export const ManageLabelsForm: FC<Props> = ({
  onCreateTagPress,
  onEditTagPress,
  isSettings,
}) => {
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const { theme } = useThemeContext();
  const dispatch = useDispatch();
  const currentSelectedTags = useSelector(selectCurrentSelectedTags);

  const { data: labels = [], refetch } = useGetLabelsQuery();
  const [deleteLabelItem] = useDeleteLabelMutation();

  const { t } = useTranslation();

  const isLimit = labels.length >= TAGS_CREATION_LIMITS;
  const style = styles(theme, isLimit);

  const handleDeletePress = (id: number) => {
    handleShowModal();
    setDeleteId(id);
  };

  const handleShowModal = () => {
    setDeleteId(null);
    setConfirmModalVisible(!confirmModalVisible);
  };

  const handleDeleteTask = () => {
    if (deleteId) {
      deleteLabelItem(deleteId);
      refetch();
    }
    handleShowModal();
  };

  const onCreateLabelPress = () => {
    onCreateTagPress();
    vibrate("selection");
  };
  return (
    <View style={style.container}>
      <Text style={style.total}>
        {t("TOTAL_LABELS")}:{" "}
        <Text style={style.totalCount}>
          {labels.length}/{TAGS_CREATION_LIMITS}
        </Text>
      </Text>

      {!isSettings && <Text style={style.message}>{t("LABEL_LIMIT")}</Text>}

      {isSettings ? (
        <View style={style.buttonContainer}>
          <DashedButton
            disabled={labels.length >= TAGS_CREATION_LIMITS}
            color={theme.TEXT.PRIMARY}
            icon={Plus}
            variant="large"
            onPress={onCreateLabelPress}>
            {t("CREATE_A_LABEL")}
          </DashedButton>
        </View>
      ) : (
        <CustomButton
          fullWidth
          paddingHorizontal={12}
          bgColor="transparent"
          onPress={onCreateLabelPress}
          disabled={labels.length >= TAGS_CREATION_LIMITS}
          height={32}
          fontSize={16}
          icon={Plus}
          textColor={theme.BUTTONS.PRIMARY}
          iconHeight={8}
          iconWidth={8}>
          {t("CREATE_A_LABEL")}
        </CustomButton>
      )}

      <ScrollView style={style.itemsWrapper}>
        {labels.map(({ id, name, color }, index) => {
          return (
            <MenuItem
              isLast={index === labels.length - 1}
              isFirst={index === 0}
              prependIconColor={color}
              prependIcon={Label}
              icon={isSettings ? Trash : null}
              isCheckbox={!isSettings}
              checked={currentSelectedTags.includes(id)}
              onPressIcon={() => handleDeletePress(id)}
              onToggleCheckbox={() => {
                dispatch(selectTagHandler(id));
                vibrate("selection");
              }}
              onPress={() => {
                isSettings
                  ? onEditTagPress(id)
                  : dispatch(selectTagHandler(id));
                vibrate("selection");
              }}
              key={`label-${id}`}>
              {name}
            </MenuItem>
          );
        })}
      </ScrollView>

      <ConfirmModal
        confirmLabel={`${t("CONFIRM_MODAL_DELETE")}`}
        dismissLabel={`${t("CANCEL_BUTTON")}`}
        visible={confirmModalVisible}
        onPressConfirm={handleDeleteTask}
        onPressDismiss={handleShowModal}
      />
    </View>
  );
};
