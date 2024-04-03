import { ModalProps } from "react-native-modal";

export interface Props extends Partial<ModalProps> {
  onModalClose: () => void;
}
