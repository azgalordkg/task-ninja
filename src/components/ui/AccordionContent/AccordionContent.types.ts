import { Task } from "@/store/apis/tasks";

export interface Props {
  content?: Task[];
  onItemPress: (id: string) => void;
  onDeletePress: (id: string, isQuick?: boolean) => void;
}
