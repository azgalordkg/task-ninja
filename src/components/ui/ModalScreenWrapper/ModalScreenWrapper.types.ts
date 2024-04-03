import { PropsWithChildren, ReactNode } from "react";

export interface CustomProps {
  onRequestClose: () => void;
  onCancelPress?: () => void;
  onDonePress?: () => void;
  isDoneDisabled?: boolean;
  cancelText?: string;
  doneText?: string;
  contentBackgroundColor?: string;
  title: string;
  rightActionComponent?: ReactNode;
  disablePressable?: boolean;
}

export type Props = PropsWithChildren<CustomProps>;
