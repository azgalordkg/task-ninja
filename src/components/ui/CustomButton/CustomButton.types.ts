import { FC } from "react";

import { DefaultSvgProps } from "@/types";

export interface Props {
  isLoading?: boolean;
  onPress: () => void;
  bgColor?: string;
  textColor?: string;
  type?: "filled" | "outlined" | "clean";
  height?: number;
  fullWidth?: boolean;
  width?: number | string;
  paddingHorizontal?: number;
  fontSize?: number;
  borderWidth?: number;
  disabled?: boolean;
  icon?: FC<DefaultSvgProps>;
  borderRadius?: number;
  iconWidth?: number;
  iconHeight?: number;
  orientation?: "flex-start" | "center" | "flex-end";
  withShadow?: boolean;
}
