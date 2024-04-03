import moment from "moment";
import React, { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Month } from "react-native-month";
import { useDispatch } from "react-redux";

import { TasksView } from "@/components/features";
import { ArrowDown, Plus } from "@/components/icons";
import { MainLayout } from "@/components/layouts";
import { MonthPickerModal } from "@/components/modals";
import { COLORS } from "@/constants";
import { useThemeContext } from "@/context/hooks";
import { changeSelectDate } from "@/store/apis/tasks";
import { ScreenProps } from "@/types";
import { formatDate, getDayTitle, getDottedDays, vibrate } from "@/utils";

import styles from "./UpcomingScreen.styles";

export const UpcomingScreen: FC<ScreenProps<"Upcoming">> = ({ navigation }) => {
  const { theme } = useThemeContext();
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const dispatch = useDispatch();

  const [selectedDate, setSelectedDate] = useState(
    moment()
      .locale(language || "en")
      .toDate(),
  );
  const [monthModalVisible, setMonthModalVisible] = useState(false);

  const style = styles(theme);
  const maxDate = moment().add(10, "years").toDate();
  const dayTitle = getDayTitle(selectedDate, language);
  const countriesStartingWithSunday = ["es", "en"];

  const handleShowMonthModal = () => {
    setMonthModalVisible(!monthModalVisible);
  };

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
    dispatch(changeSelectDate(moment(date).valueOf()));
  };

  const handleMonthChange = (date: Date) => {
    handleDateChange(date);
    setMonthModalVisible(false);
  };

  const onBack = () => {
    navigation.goBack();
    dispatch(changeSelectDate(moment().valueOf()));
  };

  const handleItemPress = (id: string) => {
    vibrate("rigid");
    navigation.navigate("CreateTask", { id });
  };

  const handleCreatePress = () => {
    vibrate("selection");
    navigation.navigate("CreateTask", {
      startDate: selectedDate.toISOString(),
    });
  };

  const getWeekDays = (lng: string) => {
    const weekdaysShort = moment.localeData(lng).weekdaysShort();

    if (countriesStartingWithSunday.includes(lng)) {
      return weekdaysShort;
    }

    const reversedDaysOfWeek = weekdaysShort.reverse();
    return [...reversedDaysOfWeek.slice(1), reversedDaysOfWeek[0]];
  };

  const dottedDays = Object.assign({}, ...getDottedDays(theme));

  return (
    <MainLayout showHeader onBack={onBack} screenTitle={`${t("UPCOMING")}`}>
      <View style={style.contentWrapper}>
        <View style={style.headerStyle}>
          <TouchableOpacity activeOpacity={1} onPress={handleShowMonthModal}>
            <View style={style.selectContainer}>
              <Text style={style.selectDateText}>
                {formatDate(selectedDate, "MMM YYYY", language)}
              </Text>
              <ArrowDown color={theme.TEXT.PRIMARY} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              handleDateChange(moment(moment(), "DD.MM.YYYY").toDate())
            }>
            <Text style={style.todayText}>{t("TODAY")}</Text>
          </TouchableOpacity>
        </View>

        <View style={style.weekdayContainer}>
          {getWeekDays(language).map(weekday => (
            <Text style={style.weekdayText} key={weekday}>
              {weekday}
            </Text>
          ))}
        </View>
        <Month
          month={moment(selectedDate).month()}
          year={moment(selectedDate).year()}
          onPress={handleDateChange}
          startDate={selectedDate}
          disableRange
          maxDate={maxDate}
          firstDayMonday={!countriesStartingWithSunday.includes(language)}
          markedDays={dottedDays}
          theme={{
            activeDayColor: theme.TEXT.PRIMARY,
            activeDayContainerStyle: style.activeDayContainerStyle,
            activeDayTextStyle: style.activeDayTextStyle,
            dayContainerStyle: style.dayContainerStyle,
            dayTextStyle: style.dayTextStyle,
            endDateContainerStyle: style.endDateContainerStyle,
            todayTextStyle: style.todayTextStyle,
            nonTouchableDayTextStyle: style.nonTouchableDayTextStyle,
            startDateContainerStyle: style.startDateContainerStyle,
          }}
        />
      </View>

      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={style.taskListWrapper}>
          <TasksView
            currentTasksTitle={dayTitle}
            isUpcoming
            onItemPress={handleItemPress}
          />
        </View>
      </ScrollView>

      <SafeAreaView style={style.buttonContainer}>
        <TouchableOpacity onPress={handleCreatePress} activeOpacity={0.75}>
          <View style={style.buttonWrapper}>
            <Plus color={COLORS.WHITE} width={18} height={18} />
          </View>
        </TouchableOpacity>
      </SafeAreaView>

      <MonthPickerModal
        selectedMonth={selectedDate}
        visible={monthModalVisible}
        onPressDismiss={handleShowMonthModal}
        onDateChange={handleMonthChange}
      />
    </MainLayout>
  );
};
