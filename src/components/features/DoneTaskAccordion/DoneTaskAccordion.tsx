import React, { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import Accordion from "react-native-collapsible/Accordion";

import { ArrowDown, ArrowForward } from "@/components/icons";
import { MemoizedAccordionContent } from "@/components/ui";
import { useThemeContext } from "@/context/hooks";

import styles from "./DoneTaskAccordion.styles";
import { Props } from "./DoneTaskAccordion.types";

export const DoneTaskAccordion: FC<Props> = ({
  onItemPress,
  onDeletePress,
  tasks,
}) => {
  const { theme } = useThemeContext();
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState([0]);

  const style = styles(theme);

  const sections = {
    title: t("COMPLETED"),
    content: tasks,
  };

  if (!sections.content?.length) {
    return null;
  }

  return (
    <Accordion
      touchableComponent={TouchableWithoutFeedback}
      sections={[sections]}
      activeSections={activeSection}
      renderHeader={({ title }) => (
        <View style={style.titleContainer}>
          <Text style={style.title}>{title}</Text>

          {activeSection.length ? (
            <ArrowDown color={theme.ICONS.SECONDARY} />
          ) : (
            <ArrowForward color={theme.ICONS.SECONDARY} />
          )}
        </View>
      )}
      renderContent={({ content }) => (
        <MemoizedAccordionContent
          content={content}
          onDeletePress={onDeletePress}
          onItemPress={onItemPress}
        />
      )}
      onChange={setActiveSection}
    />
  );
};
