import * as React from "react";
import { FC } from "react";
import Svg, { G, Path } from "react-native-svg";

import { DefaultSvgProps } from "@/types";

export const Plus: FC<DefaultSvgProps> = ({ color, ...props }) => (
  <Svg
    width={512}
    height={512}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    {...props}>
    <G fill={color}>
      <Path d="m467 211h-166v-166c0-24.853-20.147-45-45-45s-45 20.147-45 45v166h-166c-24.853 0-45 20.147-45 45s20.147 45 45 45h166v166c0 24.853 20.147 45 45 45s45-20.147 45-45v-166h166c24.853 0 45-20.147 45-45s-20.147-45-45-45z" />
    </G>
  </Svg>
);
