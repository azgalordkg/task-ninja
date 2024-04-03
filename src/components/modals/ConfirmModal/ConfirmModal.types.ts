export interface Props {
  visible: boolean;
  confirmLabel?: string;
  dismissLabel?: string;
  onPressConfirm: () => void;
  onPressDismiss: () => void;
  warningText?: string;
}
