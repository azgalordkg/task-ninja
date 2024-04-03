import { Control } from "react-hook-form/dist/types";
import { DateTimePickerProps } from "react-native-modal-datetime-picker";

import { CreateTaskData, CreateTaskKey } from "@/types";

export interface Props extends Partial<DateTimePickerProps> {
  title?: string;
  control: Control<CreateTaskData>;
  defaultValue?: string;
  name: CreateTaskKey;
  placeholder?: string;
  inputWidth?: string | number;
}
