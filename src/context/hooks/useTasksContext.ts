import { useContext } from "react";

import { TaskListContext } from "../providers";

export const useTasksContext = () => {
  const {
    timeFormat,
    toggleSearchInput,
    inputVisible,
    searchValue,
    handleSearchValueChange,
  } = useContext(TaskListContext);

  return {
    timeFormat,
    toggleSearchInput,
    inputVisible,
    searchValue,
    handleSearchValueChange,
  };
};
