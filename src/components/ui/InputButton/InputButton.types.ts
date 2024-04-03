import { Control } from "react-hook-form/dist/types";

import { CreateTaskKey } from "@/types";
import { InputProps } from "@/types/common";

export interface Props extends InputProps {
  onPress: () => void;
  name: CreateTaskKey;
  control: Control<any>;
  icon: JSX.Element;
  disabled?: boolean;
}
