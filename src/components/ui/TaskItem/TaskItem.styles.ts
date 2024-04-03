import { Animated, StyleSheet } from "react-native";

import { COLORS } from "@/constants";
import { SchemeType } from "@/types";
import { addShadow } from "@/utils";

export interface StyleProps {
  scale?: Animated.AnimatedInterpolation<string>;
  isLast?: boolean;
  checked?: boolean;
  theme: SchemeType;
}

const styles = ({ scale, isLast, checked, theme }: StyleProps) =>
  StyleSheet.create({
    buttonsContainer: {
      width: 70,
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      ...(isLast ? { transform: [{ scale: scale as unknown as number }] } : {}),
    },
    outerContainer: {
      marginHorizontal: 20,
      ...addShadow({
        shadowOpacity: 0.05,
        width: 1,
        height: 1,
        shadowRadius: 1,
        elevation: 1,
      }),
    },
    container: {
      padding: 10,
      borderRadius: 12,
      backgroundColor: theme.BACKGROUND.NEUTRAL,
    },
    textWrapper: {
      width: "80%",
      justifyContent: "center",
      rowGap: 4,
    },
    title: {
      fontWeight: "400",
      fontSize: 18,
      lineHeight: 22,
      color: theme.TEXT.PRIMARY,
    },
    description: {
      fontWeight: "400",
      fontSize: 12,
      lineHeight: 15,
      color: theme.TEXT.SECONDARY,
    },
    timeContainer: {
      flexDirection: "row",
      columnGap: 4,
      alignItems: "center",
    },
    time: {
      color: COLORS.GREEN,
      fontWeight: "400",
      fontSize: 12,
    },
    overdue: {
      color: COLORS.RED,
      fontWeight: "400",
      fontSize: 12,
    },
    mainWrapper: {
      flexDirection: "row",
      columnGap: 10,
    },
    contentButton: {
      width: "50%",
    },
    crossedTextStyles: {
      textDecorationLine: checked ? "line-through" : "none",
    },
    outsideBackground: {
      position: "absolute",
      height: "100%",
      width: "70%",
      left: 70,
      zIndex: -1,
    },
    deleteBtnWrapper: {
      position: "absolute",
      right: 0,
      top: 0,
      padding: 10,
    },
    tagsWrapper: {
      flexDirection: "row",
      columnGap: 4,
      marginTop: 4,
    },
    tagText: {
      fontWeight: "400",
      fontSize: 10,
      lineHeight: 12,
    },
  });

export default styles;
