import { ReactNode } from "react";

export interface Props {
  onCancelPress?: () => void;
  onDonePress?: () => void;
  isDoneDisabled?: boolean;
  cancelText?: string;
  doneText?: string;
  rightActionComponent?: ReactNode;
  title: string;
  contentBackgroundColor?: string;
  withPadding?: boolean;
}
