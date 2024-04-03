import React, { FC, PropsWithChildren } from "react";
import { Text } from "react-native";

import styles from "./ErrorMessage.styles";
import { Props } from "./ErrorMessage.types";

export const ErrorMessage: FC<PropsWithChildren<Props>> = ({
  children,
  size = "small",
}) => {
  const style = styles(size);
  return <Text style={style.text}>{children}</Text>;
};
