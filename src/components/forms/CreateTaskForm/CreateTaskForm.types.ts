import { FieldValues } from "react-hook-form";

export interface Props {
  onSubmit: (data: FieldValues) => void;
  onAddPress: () => void;
  editItemId?: string;
  isUnscheduled?: boolean;
  isDescriptionFocused: boolean;
  onToggleDescription: (value: boolean) => void;
  taskStartDate?: string;
}
