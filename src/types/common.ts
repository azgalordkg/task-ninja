import { Control } from "react-hook-form/dist/types";
import { TextInputProps } from "react-native";

import { AuthFormValuesKey, ResetPasswordFormValuesKey } from "./auth";
import { CreateTaskKey } from "./tasks";

export interface ShadowProps {
  color: string;
  width: number;
  height: number;
  shadowOpacity: number;
  shadowRadius: number;
  elevation: number;
}

export interface InputProps extends TextInputProps {
  control: Control<any>;
  defaultValue?: string;
  name: CreateTaskKey | AuthFormValuesKey | ResetPasswordFormValuesKey;
  isDateTime?: boolean;
  timeFormat?: string;
  isTime?: boolean;
  icon?: JSX.Element;
  errorMessage?: string;
  borderColor?: string;
  backgroundColor?: string;
  maxLength?: number;
  borderRadius?: number;
  color?: string;
  isShowClearIcon?: boolean;
  isSecureInput?: boolean;
}
