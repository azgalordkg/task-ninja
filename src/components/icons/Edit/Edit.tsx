import * as React from "react";
import { FC } from "react";
import Svg, { Path } from "react-native-svg";

import { COLORS } from "@/constants";
import { DefaultSvgProps } from "@/types";

export const Edit: FC<DefaultSvgProps> = ({
  color = COLORS.WHITE,
  ...props
}) => {
  return (
    <Svg
      width="28"
      height="28"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M23.8092 0.398809C24.3408 -0.132936 25.1993 -0.132936 25.7309 0.398809L29.6014 4.27102C30.1328 4.80277 30.1328 5.66175 29.6014 6.1935L18.4668 17.3329C18.2078 17.5784 17.8672 17.7284 17.4991 17.7284H13.6422C12.8926 17.7284 12.2794 17.1147 12.2794 16.3649V12.5063C12.2794 12.1381 12.4156 11.7973 12.6746 11.5382L23.8092 0.398809Z"
        fill={color}
      />
      <Path
        d="M19.8978 30H4.63373C2.08518 30 0 27.9139 0 25.3643V10.0935C0 7.54387 2.07155 5.45779 4.63373 5.45779H12.6337C13.3833 5.45779 13.9966 6.07135 13.9966 6.82124C13.9966 7.57114 13.3833 8.1847 12.6337 8.1847H4.63373C3.58433 8.1847 2.72572 9.04368 2.72572 10.0935V25.3643C2.72572 26.414 3.58433 27.2731 4.63373 27.2731H19.8978C20.9472 27.2731 21.8058 26.414 21.8058 25.3643V17.4971C21.8058 16.7472 22.4191 16.1337 23.1686 16.1337C23.9182 16.1337 24.5315 16.7472 24.5315 17.4971V25.3643C24.5315 27.9139 22.4463 30 19.8978 30Z"
        fill={color}
      />
    </Svg>
  );
};