import * as React from "react";
import { FC } from "react";
import Svg, { Path } from "react-native-svg";

import { DefaultSvgProps } from "@/types";

export const Search: FC<DefaultSvgProps> = ({ color, ...props }) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10.5 2C5.80558 2 2 5.72153 2 10.3123C2 14.903 5.80558 18.6245 10.5 18.6245C12.4728 18.6245 14.2886 17.9673 15.731 16.8645L20.7371 21.7886L20.8202 21.8586C21.1102 22.0685 21.5214 22.0446 21.7839 21.7873C22.0726 21.5043 22.072 21.0459 21.7825 20.7636L18.3044 17.3712L16.8074 15.8845C18.1701 14.4103 19 12.456 19 10.3123C19 5.72153 15.1944 2 10.5 2ZM10.5 3.28033C14.4714 3.28033 17.6908 6.42864 17.6908 10.3123C17.6908 14.1959 14.4714 17.3442 10.5 17.3442C6.52868 17.3442 3.30926 14.1959 3.30926 10.3123C3.30926 6.42864 6.52868 3.28033 10.5 3.28033Z"
      fill={color}
    />
  </Svg>
);
