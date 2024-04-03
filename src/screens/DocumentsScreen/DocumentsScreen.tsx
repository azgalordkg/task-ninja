import React, { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { ScrollView, Text, TouchableWithoutFeedback, View } from "react-native";
import Accordion from "react-native-collapsible/Accordion";

import {
  DocumentsContent,
  DocumentsHeader,
  ModalScreenWrapper,
} from "@/components/ui";
import {
  PRIVACY_POLICY,
  PRIVACY_POLICY_DESCRIPTION,
  TERMS_OF_USE,
} from "@/constants";
import { useThemeContext } from "@/context/hooks";
import { ScreenProps } from "@/types";

import styles from "./DocumentsScreen.styles";

export const DocumentsScreen: FC<ScreenProps<"Documents">> = ({
  navigation,
  route,
}) => {
  const { theme } = useThemeContext();
  const style = styles(theme);

  const isPrivacyPolicy = route?.params?.isPrivacyPolicy;
  const onClose = () => navigation.goBack();
  const [activeSection, setActiveSection] = useState<number[]>([0]);
  const { t } = useTranslation();

  const screenTitle = isPrivacyPolicy ? t("PRIVACY_POLICY") : t("TERMS_OF_USE");
  const screenContent = isPrivacyPolicy ? PRIVACY_POLICY : TERMS_OF_USE;

  return (
    <ModalScreenWrapper
      title={screenTitle}
      onRequestClose={onClose}
      disablePressable>
      <View style={style.mainWrapper}>
        <View style={style.container}>
          <Text style={style.update}>
            {t("LAST_UPDATED")} {screenContent.LAST_UPDATED}
          </Text>

          <ScrollView>
            {isPrivacyPolicy && (
              <DocumentsContent content={PRIVACY_POLICY_DESCRIPTION} />
            )}

            <Accordion
              touchableComponent={TouchableWithoutFeedback}
              sections={screenContent.DATA}
              activeSections={activeSection}
              renderHeader={({ title, id }) => (
                <View>
                  <DocumentsHeader
                    title={title}
                    active={activeSection.includes(id)}
                  />
                </View>
              )}
              renderContent={({ content }) => (
                <DocumentsContent content={content} />
              )}
              onChange={setActiveSection}
              expandMultiple={true}
            />
          </ScrollView>
        </View>
      </View>
    </ModalScreenWrapper>
  );
};
