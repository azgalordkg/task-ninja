import React, { FC, PropsWithChildren } from "react";
import { Pressable, ScrollView, View } from "react-native";

import { CustomButton } from "@/components/ui";
import { useThemeContext } from "@/context/hooks";

import styles from "./FormContentWrapper.styles";
import { Props } from "./FormContentWrapper.types";

export const FormContentWrapper: FC<PropsWithChildren<Props>> = ({
  children,
  onSubmitPress,
  isSubmitDisabled,
  submitTitle,
}) => {
  const { theme } = useThemeContext();

  const style = styles(theme);

  return (
    <View style={style.mainWrapper}>
      <View style={style.fieldsWrapper}>
        <ScrollView>
          <Pressable>{children}</Pressable>
        </ScrollView>
      </View>

      <View style={style.footer}>
        {onSubmitPress && (
          <CustomButton
            height={46}
            fullWidth
            bgColor={theme.BUTTONS.PRIMARY}
            onPress={onSubmitPress}
            disabled={isSubmitDisabled}>
            {submitTitle}
          </CustomButton>
        )}
      </View>
    </View>
  );
};
