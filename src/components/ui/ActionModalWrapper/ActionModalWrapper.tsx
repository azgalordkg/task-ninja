import React, { FC, PropsWithChildren } from "react";
import { View } from "react-native";

import styles from "./ActionModalWrapper.styles";

export const ActionModalWrapper: FC<PropsWithChildren> = ({ children }) => {
  return <View style={styles.modalButtonContainer}>{children}</View>;
};
