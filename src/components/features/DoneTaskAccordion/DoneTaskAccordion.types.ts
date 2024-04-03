import { Task } from "@/store/apis/tasks";

export interface Props {
  onItemPress: (id: string) => void;
  onDeletePress: (id: string, isQuick?: boolean) => void;
  tasks?: Task[];
}
