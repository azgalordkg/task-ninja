import moment from "moment";
import React, { FC } from "react";
import { Text, View } from "react-native";

import { TaskItem } from "@/components/ui";
import { useThemeContext } from "@/context/hooks";
import { markTaskAsDone } from "@/services";

import styles from "./TasksList.styles";
import { Props } from "./TasksList.types";

export const TasksList: FC<Props> = ({
  tasks,
  onDeletePress,
  onItemPress,
  title,
}) => {
  const { theme } = useThemeContext();
  const style = styles(theme);
  return (
    <View style={style.container}>
      {title && <Text style={style.dayTitle}>{title}</Text>}
      <View style={style.tasksWrapper}>
        {tasks?.map(task => {
          const {
            description,
            id,
            isDone,
            name,
            repeat,
            labels,
            startDate,
            hasDeadline,
            priority,
          } = task;
          return (
            <TaskItem
              priority={priority}
              key={id}
              description={description}
              checked={isDone}
              repeat={repeat}
              id={`${id}`}
              name={name}
              onCheckPress={markTaskAsDone}
              onDeletePress={onDeletePress}
              isDone={isDone}
              onItemPress={onItemPress}
              labels={labels}
              startDate={moment(startDate).valueOf()}
              hasDeadline={hasDeadline}
            />
          );
        })}
      </View>
    </View>
  );
};
