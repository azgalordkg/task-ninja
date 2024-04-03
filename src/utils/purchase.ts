import { Dimensions } from "react-native";

export const windowsPaddings = 40;
export const itemGaps = 25;

export const getPurchaseItemWidth = () =>
  (Dimensions.get("window").width - windowsPaddings - itemGaps * 2) / 3;
