import { isEqual } from "lodash";
import moment from "moment";
import React, { FC, memo } from "react";
import { View } from "react-native";

import { MemoizedListItem } from "@/components/ui";
import { markTaskAsDone } from "@/services";

import { Props } from "./AccordionContent.types";
import styles from "./AccourdionContent.styles";

const customComparator = (prevProps: Props, nextProps: Props) => {
  return isEqual(prevProps, nextProps);
};

export const AccordionContent: FC<Props> = ({
  content,
  onItemPress,
  onDeletePress,
}) => {
  return (
    <View style={styles.container}>
      {content?.map(
        (
          {
            hasDeadline,
            startDate,
            isDone,
            id,
            name,
            labels,
            repeat,
            description,
            priority,
          },
          index,
        ) => {
          const isLast = index + 1 === content.length;

          return (
            <MemoizedListItem
              priority={priority}
              key={id}
              description={description}
              hasDeadline={Boolean(hasDeadline)}
              onItemPress={onItemPress}
              startDate={moment(startDate).valueOf()}
              onCheckPress={markTaskAsDone}
              onDeletePress={onDeletePress}
              isDone={isDone}
              id={`${id}`}
              repeat={repeat}
              name={name}
              labels={labels}
              checked={Boolean(isDone)}
              isLast={isLast}
            />
          );
        },
      )}
    </View>
  );
};

export const MemoizedAccordionContent = memo(
  AccordionContent,
  customComparator,
);
