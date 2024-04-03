import { Dimensions, StyleSheet } from "react-native";

import { SchemeType } from "@/types";

const styles = (theme: SchemeType) =>
  StyleSheet.create({
    mainWrapper: {
      width: "100%",
      flex: 1,
      alignItems: "flex-start",
    },
    fieldsWrapper: {
      flex: 1,
      width: "100%",
    },
    footer: {
      marginLeft: -20,
      marginRight: -20,
      paddingHorizontal: 20,
      paddingTop: 20,
      width: Dimensions.get("window").width,
      borderTopWidth: 1,
      borderColor: theme.BORDERS.PRIMARY,
    },
  });

export default styles;
