import { StyleSheet } from "react-native";

import { addAlpha } from "@/utils";

const styles = (color: string) => {
  return StyleSheet.create({
    background: {
      position: "absolute",
      width: 22,
      height: 22,
      top: 1,
      left: 1,
      borderRadius: 8,
      backgroundColor: addAlpha(color, 0.35),
      zIndex: -1,
    },
  });
};

export default styles;
