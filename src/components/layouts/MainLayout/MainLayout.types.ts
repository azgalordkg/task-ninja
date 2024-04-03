import { ScreenProps } from "@/types";

export interface Props extends Partial<ScreenProps<"Home">> {
  onBack?: () => void;
  screenTitle?: string;
  isFilter?: boolean;
  isSettings?: boolean;
  showHeader?: boolean;
  topViewBackgroundColor?: string;
}
