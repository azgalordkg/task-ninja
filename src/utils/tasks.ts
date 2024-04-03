import { t } from "i18next";
import moment from "moment/moment";

import { COLORS } from "@/constants";
import { PRIORITIES } from "@/constants/tasks";
import { getAllTasks } from "@/services";
import { Task } from "@/store/apis/tasks";
import { Priority, SchemeType, TasksResponseItem } from "@/types";
import { formatDate } from "@/utils/date";

export const filterTasks = (
  filterType: "incomplete" | "complete",
  tasks?: Task[],
) => {
  if (filterType === "incomplete") {
    return tasks?.filter(task => !task.isDone);
  }
  if (filterType === "complete") {
    return tasks?.filter(task => task.isDone);
  }
};

export const getPriorityObject = (
  isDark: boolean,
  priorityId?: number,
): Priority => {
  if (!priorityId || priorityId === 4) {
    return {
      ...PRIORITIES[3],
      ...(!isDark ? { color: COLORS.GREY_LIGHT } : {}),
    };
  }
  return PRIORITIES.find(priority => priority.id === priorityId) as Priority;
};

export const getDayTitle = (date: Date, locale?: string) => {
  const momentDate = moment(date);
  const formattedDate = formatDate(date, "D MMM", locale);
  const today = moment().startOf("day");
  const tomorrow = moment().add(1, "day").startOf("day");
  const dayOfWeek = formatDate(date, "dddd", locale);
  let todayOrTomorrow = "";

  if (momentDate.isSame(today, "day")) {
    todayOrTomorrow = `• ${t("TODAY")}`;
  } else if (moment(date).isSame(tomorrow, "day")) {
    todayOrTomorrow = `• ${t("TOMORROW")}`;
  }

  return `${formattedDate} ${todayOrTomorrow} • ${dayOfWeek}`;
};

export const getDottedDays = (theme: SchemeType) => {
  const tasks = getAllTasks() as TasksResponseItem[];
  const uniqueDates = new Set<string>();

  tasks.forEach(task => {
    const taskStartDate = moment(task.startDate);

    uniqueDates.add(taskStartDate.format("YYYY-MM-DD"));
  });

  return Array.from(uniqueDates).map(dateItem => {
    return {
      [dateItem]: {
        dots: [
          {
            color: theme.TEXT.ACCENT,
            selectedColor: theme.TEXT.ACCENT,
          },
        ],
      },
    };
  });
};

export const getFilteredTasksBySearch = (
  tasks?: Task[],
  searchValue: string = "",
) => {
  if (searchValue) {
    return tasks?.filter(
      ({ name, description }) =>
        name.toLowerCase().includes(searchValue.trim().toLowerCase()) ||
        description?.toLowerCase().includes(searchValue.trim().toLowerCase()),
    );
  }
  return tasks;
};

export const getFilteredTasksByDate = (tasks?: Task[], date?: number) => {
  const targetDate = moment(date).startOf("day");

  return (
    tasks?.filter(task => moment(task.startDate).isSame(targetDate, "d")) || []
  );
};
