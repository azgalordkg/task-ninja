import { Animated } from "react-native";
import AnimatedInterpolation = Animated.AnimatedInterpolation;
import { FC } from "react";

import { DefaultSvgProps } from "@/types";

export interface Props {
  scale: AnimatedInterpolation<string>;
  onPress: () => void;
  icon: FC<DefaultSvgProps>;
  backgroundColor?: string;
}
