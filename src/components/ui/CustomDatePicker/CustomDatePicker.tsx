import moment from "moment";
import React, { FC, useEffect, useState } from "react";
import { useController } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Keyboard, TouchableOpacity, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { Calendar, TimeCircle } from "@/components/icons";
import { COLORS } from "@/constants";
import { useThemeContext } from "@/context/hooks";
import { TimeFormat } from "@/types";
import { getUserTimeFormat } from "@/utils";

import { Input } from "../Input";
import styles from "./CustomDatePicker.styles";
import { Props } from "./CustomDatePicker.types";

export const CustomDatePicker: FC<Props> = ({
  control,
  defaultValue,
  name,
  inputWidth,
  placeholder,
  ...props
}) => {
  const {
    i18n: { language },
  } = useTranslation();

  const [timeFormat, setTimeFormat] = useState<TimeFormat>({
    format: "LT",
    locale: language,
  });
  const { theme, isDark } = useThemeContext();
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [open, setOpen] = useState(false);
  const style = styles(theme, keyboardHeight, inputWidth);
  const maxDate = moment().add(2, "years").endOf("year");
  const isTime = props.mode === "time";

  useEffect(() => {
    const hideListener = Keyboard.addListener("keyboardWillHide", () => {
      setKeyboardHeight(0);
    });

    const showListener = Keyboard.addListener("keyboardWillShow", event => {
      isTime && setKeyboardHeight(event.endCoordinates.height);
    });

    return () => {
      showListener.remove();
      hideListener.remove();
    };
  }, []);

  const { field } = useController({
    control,
    defaultValue,
    name,
  });

  const onConfirm = (currentDate: Date) => {
    setOpen(false);
    field.onChange(currentDate);
  };

  useEffect(() => {
    if (isTime) {
      getUserTimeFormat().then(format => {
        setTimeFormat(format);
      });
    }
  }, [props.mode]);

  return (
    <>
      <View style={style.container}>
        <View>
          <TouchableOpacity
            style={style.button}
            onPress={() => setOpen(true)}
          />
          <Input
            placeholder={placeholder}
            color={theme.TEXT.PRIMARY}
            editable={false}
            isDateTime
            timeFormat={timeFormat.format}
            isTime={isTime}
            backgroundColor={theme.INPUTS.PRIMARY}
            control={control}
            name={name}
            icon={
              isTime ? (
                <TimeCircle color={COLORS.BLUE} />
              ) : (
                <Calendar color={COLORS.GREEN} />
              )
            }
          />
        </View>
      </View>

      <DateTimePickerModal
        {...props}
        locale={timeFormat.locale}
        modalStyleIOS={style.modalStyleIOS}
        isVisible={open}
        date={(field.value as Date) || new Date()}
        minuteInterval={10}
        isDarkModeEnabled={isDark}
        textColor={theme.TEXT.PRIMARY}
        maximumDate={maxDate.toDate()}
        onConfirm={currentDate => onConfirm(currentDate)}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
};
