import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { Text, TouchableOpacity, View } from "react-native";

import { TasksPlaceholder } from "@/components/icons";
import { useThemeContext } from "@/context/hooks";

import styles from "./EmptyTaskList.styles";
import { Props } from "./EmptyTaskList.types";

export const EmptyTaskList: FC<Props> = ({
  handleCreatePress,
  image = TasksPlaceholder,
  title,
}) => {
  const { theme } = useThemeContext();
  const style = styles(theme);
  const { t } = useTranslation();

  const Image = image;

  return (
    <View style={style.mainWrapper}>
      <Image />
      <View style={style.textContainer}>
        <Text style={style.title}>{title || t("NOT_MUCH")}</Text>
        {handleCreatePress && (
          <TouchableOpacity
            style={style.linkWrapper}
            onPress={handleCreatePress}>
            <Text style={style.link}>{t("LETS_CREATE")}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
