export interface Props {
  duration: string;
  price: number;
  description: string;
  isActive?: boolean;
  profitable?: boolean;
  onPress: () => void;
}
