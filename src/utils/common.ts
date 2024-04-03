import { COLORS } from "@/constants";
import { ShadowProps } from "@/types/common";

export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const addShadow = ({
  color = COLORS.DARK,
  width = 4,
  height = 4,
  shadowOpacity = 0.2,
  shadowRadius = 3,
  elevation = 4,
}: Partial<ShadowProps>) => {
  return {
    shadowColor: color,
    shadowOffset: {
      width,
      height,
    },
    shadowOpacity,
    shadowRadius,
    elevation,
  };
};
