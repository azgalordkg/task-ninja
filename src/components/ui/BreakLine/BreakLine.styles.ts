import { StyleSheet } from "react-native";

import { SchemeType } from "@/types";

interface StylesProps {
  theme?: SchemeType;
  marginBottom?: number;
  color?: string;
}

const styles = ({ theme, marginBottom, color }: StylesProps) =>
  StyleSheet.create({
    brakeLine: {
      width: "100%",
      height: 1,
      backgroundColor: color || theme?.TEXT_INFO,
      marginBottom: marginBottom || 0,
      alignItems: "flex-end",
    },
  });

export default styles;
