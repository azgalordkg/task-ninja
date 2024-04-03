import { Control } from "react-hook-form/dist/types";
import { SwitchProps } from "react-native";

import { CreateTaskData, CreateTaskKey } from "@/types";

export interface Props extends SwitchProps {
  label: string;
  control: Control<CreateTaskData>;
  defaultValue?: string;
  name: CreateTaskKey;
}
