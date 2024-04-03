import { FC } from "react";

import { DefaultSvgProps } from "@/types";

export interface Props {
  handleCreatePress?: () => void;
  image?: FC<DefaultSvgProps>;
  title?: string;
}
