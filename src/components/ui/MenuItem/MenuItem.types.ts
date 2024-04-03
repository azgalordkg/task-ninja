import { FC } from "react";

import { DefaultSvgProps } from "@/types";

export interface Props {
  onPress?: () => void;
  isSwitcher?: boolean;
  onToggleSwitch?: (value: boolean) => void;
  backgroundColor?: string;
  value?: boolean;
  isLast?: boolean;
  isFirst?: boolean;
  color?: string;
  prependIconColor?: string;
  icon?: FC<DefaultSvgProps> | null;
  onPressIcon?: () => void;
  prependIcon?: FC<DefaultSvgProps>;
  count?: number;
  isCheckbox?: boolean;
  checked?: boolean;
  onToggleCheckbox?: () => void;
}
