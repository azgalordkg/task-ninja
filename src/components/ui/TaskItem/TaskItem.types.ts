import { RecurringTypes } from "@/types";
import { LabelItem } from "@/types/labels";

export interface ListItemProps {
  name: string;
  checked: boolean;
  startDate?: number;
  onCheckPress: (id: string, isDone: boolean) => void;
  onDeletePress: (id: string, isQuick?: boolean) => void;
  isLast?: boolean;
  onItemPress: (id: string) => void;
  hasDeadline?: boolean;
  id: string;
  isDone?: boolean;
  repeat?: RecurringTypes;
  labels: LabelItem[];
  description?: string;
  priority?: number;
}
