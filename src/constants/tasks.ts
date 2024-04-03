import { COLORS } from "@/constants/colors";
import { Priority } from "@/types";

export const PRIORITIES: Priority[] = [
  { label: "#1", id: 1, color: COLORS.RED },
  { label: "#2", id: 2, color: COLORS.YELLOW },
  { label: "#3", id: 3, color: COLORS.GREEN },
  { label: "#4", id: 4, color: COLORS.WHITE, isLight: true },
];
