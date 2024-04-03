export interface Props {
  onPress: () => void;
  checked: boolean;
  checkedColor?: string;
  defaultColor?: string;
  size?: number;
  type?: "filled" | "outline";
  backgroundOpacity?: number;
  checkmarkColor?: string;
  isAnimated?: boolean;
}
