export interface Props {
  onItemPress: (id: string) => void;
  isUnscheduled?: boolean;
  isUpcoming?: boolean;
  currentTasksTitle?: string;
}
