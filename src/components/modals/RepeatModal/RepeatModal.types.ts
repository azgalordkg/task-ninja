import { RecurringTypes } from "@/types";

export interface Props {
  visible: boolean;
  activeValue: string;
  onPressDismiss: () => void;
  onValueChange: (value: RecurringTypes) => void;
  repeatList: { label: string; value: string }[];
}
