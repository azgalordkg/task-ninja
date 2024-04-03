import React, {
  createContext,
  FC,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";

import { useDayChangeListener } from "@/hooks";
import { updateRecurringTasks } from "@/services";
import { getUserTimeFormat } from "@/utils";

import { TaskListContextType } from "./TasksProvider.types";

export const TaskListContext = createContext<TaskListContextType>(
  {} as TaskListContextType,
);

export const TaskListProvider: FC<PropsWithChildren> = ({ children }) => {
  const [inputVisible, setInputVisible] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [timeFormat, setTimeFormat] = useState("LT");

  const toggleSearchInput = () => {
    setInputVisible(!inputVisible);
  };

  const handleSearchValueChange = (value: string) => {
    setSearchValue(value);
  };

  useDayChangeListener(() => {
    updateRecurringTasks();
  });

  useEffect(() => {
    getUserTimeFormat().then(({ format }) => {
      setTimeFormat(format);
    });
  }, []);

  return (
    <TaskListContext.Provider
      value={{
        timeFormat,
        inputVisible,
        toggleSearchInput,
        searchValue,
        handleSearchValueChange,
      }}>
      {children}
    </TaskListContext.Provider>
  );
};
