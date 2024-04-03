import { Task } from "@/store/apis/tasks";

export interface Props {
  tasks?: Task[];
  onDeletePress: (id: string, isQuick?: boolean) => void;
  onItemPress: (id: string) => void;
  title?: string;
}
