import React, { FC, PropsWithChildren } from "react";
import { Dimensions } from "react-native";
import Modal from "react-native-modal";

import styles from "./ExtendedModal.styles";
import { Props } from "./ExtendedModal.types";

export const ExtendedModal: FC<PropsWithChildren<Props>> = ({
  onModalClose,
  children,
  ...props
}) => {
  const deviceWidth = Dimensions.get("window").width;

  return (
    <Modal
      onBackdropPress={onModalClose}
      onSwipeComplete={onModalClose}
      useNativeDriverForBackdrop
      swipeDirection={["down"]}
      style={styles.container}
      deviceWidth={deviceWidth}
      {...props}>
      {children}
    </Modal>
  );
};
