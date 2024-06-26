import * as React from "react";
import { FC } from "react";
import Svg, { Path } from "react-native-svg";

import { COLORS } from "@/constants";

import { Props } from "./Checkbox.types";

export const Checkbox: FC<Props> = ({
  color,
  checked,
  checkmarkColor,
  backgroundOpacity,
  type,
  ...props
}) => {
  const isTypeFilled = type === "filled";
  const fillOpacity = "0.05";

  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.66537 2.00018H16.3344C19.7381 2.00018 22.0004 4.42969 22.0004 7.91618V16.0842C22.0004 19.5709 19.738 22.0002 16.3334 22.0002H7.66537C4.26174 22.0002 2.00037 19.5709 2.00037 16.0842V7.91618C2.00037 4.43278 4.26779 2.00018 7.66537 2.00018ZM16.3344 3.50018H7.66537C5.12071 3.50018 3.50037 5.23856 3.50037 7.91618V16.0842C3.50037 18.7655 5.11513 20.5002 7.66537 20.5002H16.3334C18.8847 20.5002 20.5004 18.7653 20.5004 16.0842V7.91618C20.5004 5.23515 18.8849 3.50018 16.3344 3.50018Z"
        fill={color}
      />
      {isTypeFilled && checked && (
        <Path
          d="M16.3344 2.00018H7.66537C4.26779 2.00018 2.00037 4.43278 2.00037 7.91618V16.0842C2.00037 19.5709 4.26174 22.0002 7.66537 22.0002H16.3334C19.738 22.0002 22.0004 19.5709 22.0004 16.0842V7.91618C22.0004 4.42969 19.7382 2.00018 16.3344 2.00018Z"
          fill={color}
        />
      )}

      <Path
        d="M7.66537 3.50018H16.3344C18.8849 3.50018 20.5004 5.23515 20.5004 7.91618V16.0842C20.5004 18.7653 18.8847 20.5002 16.3334 20.5002H7.66537C5.11513 20.5002 3.50037 18.7655 3.50037 16.0842V7.91618C3.50037 5.23856 5.12071 3.50018 7.66537 3.50018Z"
        fill={color || COLORS.WHITE}
        fillOpacity={backgroundOpacity ?? fillOpacity}
      />
      {checked && (
        <Path
          d="M15.3397 9.21967C15.6326 8.92678 16.1074 8.92678 16.4003 9.21967C16.6666 9.48594 16.6908 9.9026 16.4729 10.1962L16.4003 10.2803L11.6543 15.0263C11.3881 15.2926 10.9715 15.3168 10.6779 15.099L10.5938 15.0264L8.21978 12.6534C7.92683 12.3606 7.92673 11.8857 8.21956 11.5928C8.48577 11.3265 8.90243 11.3022 9.19608 11.52L9.28022 11.5926L11.1231 13.4348L15.3397 9.21967Z"
          fill={isTypeFilled ? checkmarkColor || COLORS.WHITE : color}
        />
      )}
    </Svg>
  );
};
