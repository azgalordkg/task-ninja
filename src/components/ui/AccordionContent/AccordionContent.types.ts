import { TasksResponseItem } from "@/types";

export interface Props {
  content?: TasksResponseItem[];
  onItemPress: (id: string) => void;
  onDeletePress: (id: string, isQuick?: boolean) => void;
}
