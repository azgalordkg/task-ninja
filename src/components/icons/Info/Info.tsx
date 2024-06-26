import * as React from "react";
import { FC } from "react";
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";

import { COLORS } from "@/constants";
import { DefaultSvgProps } from "@/types";

export const Info: FC<DefaultSvgProps> = ({
  color = COLORS.WHITE,
  ...props
}) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#clip0_58_296)">
      <Path
        d="M10 0C4.47707 0 0 4.47723 0 10C0 15.5231 4.47707 20 10 20C15.5229 20 20 15.5231 20 10C20 4.47723 15.5229 0 10 0ZM10 5C10.6904 5 11.25 5.55969 11.25 6.25C11.25 6.94063 10.6904 7.5 10 7.5C9.30961 7.5 8.75 6.94063 8.75 6.25C8.75 5.55969 9.30961 5 10 5ZM11.875 15H8.125C7.77984 15 7.5 14.7205 7.5 14.375C7.5 14.0298 7.77984 13.75 8.125 13.75H8.75V10H8.125C7.77984 10 7.5 9.72047 7.5 9.375C7.5 9.02984 7.77984 8.75 8.125 8.75H10.625C10.9702 8.75 11.25 9.02984 11.25 9.375V13.75H11.875C12.2202 13.75 12.5 14.0298 12.5 14.375C12.5 14.7205 12.2202 15 11.875 15Z"
        fill={color}
      />
    </G>
    <Defs>
      <ClipPath id="clip0_58_296">
        <Rect width={20} height={20} fill={color} />
      </ClipPath>
    </Defs>
  </Svg>
);
