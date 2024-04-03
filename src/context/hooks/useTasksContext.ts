import { useContext } from "react";

import { TaskListContext } from "../providers";

export const useTasksContext = () => {
  const {
    timeFormat,
    taskList,
    fetchList,
    unscheduledTaskList,
    overdueTaskList,
    targetDate,
    handleTaskDateChange,
    toggleSearchInput,
    inputVisible,
    searchValue,
    handleSearchValueChange,
  } = useContext(TaskListContext);

  return {
    timeFormat,
    taskList,
    unscheduledTaskList,
    overdueTaskList,
    fetchList,
    targetDate,
    handleTaskDateChange,
    toggleSearchInput,
    inputVisible,
    searchValue,
    handleSearchValueChange,
  };
};
