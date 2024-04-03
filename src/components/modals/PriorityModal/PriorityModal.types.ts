export interface Props {
  visible: boolean;
  activePriorityId: number;
  onPressDismiss: () => void;
  onValueChange: (value: number) => void;
}
