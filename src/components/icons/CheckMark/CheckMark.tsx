import * as React from "react";
import { FC } from "react";
import Svg, { Path } from "react-native-svg";

import { Props } from "./CheckMark.types";

export const CheckMark: FC<Props> = ({ color, ...props }) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M16.2176 8.3058C16.6254 7.89806 17.2865 7.89806 17.6942 8.3058C18.0649 8.67648 18.0986 9.25652 17.7953 9.66526L17.6942 9.78236L11.0872 16.3893C10.7166 16.7599 10.1367 16.7937 9.72794 16.4905L9.61083 16.3895L6.30596 13.086C5.89813 12.6783 5.898 12.0173 6.30565 11.6094C6.67624 11.2387 7.25628 11.2049 7.66508 11.5081L7.78221 11.6091L10.3477 14.1737L16.2176 8.3058Z"
      fill={color}
    />
  </Svg>
);
