import { FC } from "react";

import { DefaultSvgProps } from "@/types";

export interface Props {
  icon?: FC<DefaultSvgProps>;
  onPress?: () => void;
}
