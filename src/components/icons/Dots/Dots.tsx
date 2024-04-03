import * as React from "react";
import { FC } from "react";
import Svg, { Path } from "react-native-svg";

import { DefaultSvgProps } from "@/types";

export const Dots: FC<DefaultSvgProps> = ({ color, ...props }) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    {...props}>
    <Path
      d="M4.89918 13.7968C3.8513 13.7968 3 12.9455 3 11.8992C3 10.8529 3.8513 10 4.89918 10C5.94706 10 6.79836 10.8529 6.79836 11.8992C6.79836 12.9455 5.94706 13.7968 4.89918 13.7968Z"
      fill={color}
    />
    <Path
      d="M12.0005 13.7968C10.9526 13.7968 10.1013 12.9455 10.1013 11.8992C10.1013 10.8529 10.9526 10 12.0005 10C13.0483 10 13.8996 10.8529 13.8996 11.8992C13.8996 12.9455 13.0483 13.7968 12.0005 13.7968Z"
      fill={color}
    />
    <Path
      d="M19.1009 13.7968C18.0531 13.7968 17.2018 12.9455 17.2018 11.8992C17.2018 10.8529 18.0531 10 19.1009 10C20.1488 10 21.0001 10.8529 21.0001 11.8992C21.0001 12.9455 20.1488 13.7968 19.1009 13.7968Z"
      fill={color}
    />
  </Svg>
);
