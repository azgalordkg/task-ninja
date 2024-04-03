import { FC } from "react";

import { DefaultSvgProps } from "@/types";

export interface Props {
  onPress?: () => void;
  variant?: "small" | "large";
  icon?: FC<DefaultSvgProps>;
  color?: string;
  disabled?: boolean;
}
