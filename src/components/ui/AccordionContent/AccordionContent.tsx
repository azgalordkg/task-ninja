import { isEqual } from "lodash";
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
            _id,
            name,
            tags,
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
              tags={tags}
              key={_id}
              description={description}
              hasDeadline={Boolean(hasDeadline)}
              onItemPress={onItemPress}
              startDate={startDate}
              onCheckPress={markTaskAsDone}
              onDeletePress={onDeletePress}
              isDone={isDone}
              id={_id}
              repeat={repeat}
              name={name}
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
